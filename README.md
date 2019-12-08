# Prodigy

[Link to site](https://prodigy-docker.herokuapp.com/)

Prodigy is a lyrics & annotation web app, cloned to imitate the popular site **Genius**. It lets users add song lyrics and annotate these lyrics by highlighting words and submitting notes. Users can also comment on tracks and upvote/downvote comments and annotations. Prodigy is built with **React/Redux** and **Ruby on Rails**, using a **PostgreSQL** database.

![Home Page](/app/assets/images/prodigy.png)

Annotations were implemented from scratch using the **Window Web API**, which allows interaction with the DOM document loaded in the browser window. The main method used was `window.getselection()`, which returns a `Selection` object that contains the nodes selected by the user, along with the text and the indices of the `baseNode` and `extentNode` at the ends of the selection. The annotations were implemented by creating stylized `<span>` tags around selected parts of the text. Once annotations were created from the Rails console, they could be rendered onto the page easily by inserting the span tags onto the HTML in reverse order, sorted by the `end_idx` of the annotations.

Implementing the annotation creation to let users correctly and exactly select the highlighted text proved difficult. While the **Window Web API** gave the tools to retrieve the indices of the first and last nodes in the `selection` object, the indices were useless without finding a way to also retrieve the indices of the text nodes relative to the `<p>` element where the lyrics were contained.

Since a `selection` object does not allow easy access to its contained nodes, the solution was to get the parent `<p>` element and retrieve its child nodes in a list. The `baseNode` and `extendNode` could be compared against this list to find their position compared to the parent `<p>` element. These new indices and the `baseOffset` and `extentOffset` indices given by the `selection` could be converted to indices referring to the position of the annotation in the lyrics.

During early implementation, a consequence of using this system was having a `<br>` element at the end of the `selection` would cause the parent element `<p>` to be selected instead. While `<br>`s cannot be selected when highlighting the text from front-to-back, this would limit the options that users have available. `<br>` elements could easily be selected if the user if highlighting back-to-front or are double-clicking to select a line.

It made sense that whitespaces at the beginning and end of highlights are not significant for the users,so it made sense to not take them out before saving annotations to the database. The solution was to simply shift the retrieved indices if `<br>` or whitespace elements were at the end of the aforementioned list of nodes.

![Annotation](/app/assets/images/annotation.png)

Another interesting implementation to create was the form for the creation of tracks. When a user submits a new song on Genius, Genius also creates new artists and albums if necessary. While it certainly is possible to create artists, albums, and tracks with separate requests to the API backend, this would create confusing situations if one of the requests were invalid.

Therefore, it was necessary to implement a form object which would use `ActiveRecord` transactions to either create all of the necessary objects or none of them. Since this wouldn't be a standard `ActiveModel` model, I would have to define my own `save` and `update` methods within the model.

```
  def save
    return false if invalid?

    ActiveRecord::Base.transaction do # save everything in the form, or nothing
      @track = new_track
      artist = find_or_create_artist(self.artist)

      if artist.tracks.to_a.any? { |track| track.name == self.name }
        errors.add(:track, "already exists")
      end

      @track.artist_id = artist.id

      if self.album
        album = find_or_create_album(artist)
        @track.album_id = album.id
      end

      @track.date = self.date if self.date
      @track.image_url = self.image_url if self.image_url
      @track.youtube_url = self.youtube_url if self.youtube_url
      @track.save!

      if self.features
        features = self.features.split(',').map { |name| find_or_create_artist(name) }
        @track.featured_artists = features
      end

      if self.producers
        producers = self.producers.split(',').map { |name| find_or_create_artist(name) }
        @track.producers = producers
      end

      if self.writers
        writers = self.writers.split(',').map { |name| find_or_create_artist(name) }
        @track.writers = writers
      end
      
      true

    rescue ActiveRecord::StatementInvalid => e
      errors.add(:base, e.message)
      false
    end
  end
```
While Genius handles artists by giving them unique names (ex: Phantoms (Metal) uses parenthesis to set itself apart), albums are allowed to have the same names. Therefore it was necessary to create albums by using associations with the found or newly created artist. After the track was saved, any associations via join tables could be created before the end of the transaction.

After adding the question and answer models, it became desirable to improve the formatting of answers and annotations. Genius allows Markdown to be used append basic formatting, links, images, videos, and tweets to answers and annotations. A search showed that the [Showdown library](https://github.com/showdownjs/showdown) was ideal for a quick implementation of such capabilities for most of the features that I desired. The library converts Markdown into HTML that can be placed onto a page. However, the library did not have an add-on for tweets (although [this add-on](https://github.com/showdownjs/twitter-extension) allows for hashtags and usernames) for the Showdown library.

To solve this, I had to customize a way for tweets to be added via Markdown. The Showdown library is convenient in that it allows for html tags to stay in its formatting uninterrupted after parsing the string. Therefore, I created custom algorithms that would find tweet urls in the unformatted answer/annotation Markdown string, replace these with placeholder HTML tags holding the id of the tweet, then have Showdown format the strings.

```javascript
  const tweetRegex = /\[https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status\/(\d+)\]$/g;

  export const replaceTweets = str => {
    return str.replace(tweetRegex, 
      "\n<tweet id=$2 />"
    );
  };
```

After rendering the HTML converted by Showdown, I could utilize the [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed) and ReactDOM to replace the elements with tweet panels.

```javascript
  import ReactDOM from 'react-dom';
  import { TwitterTweetEmbed } from 'react-twitter-embed';
  
  export const renderTweets = () => {
    const tweets = document.querySelectorAll("tweet");
    tweets.forEach(tweet => {
      ReactDOM.render(<TwitterTweetEmbed tweetId={tweet.id} />, tweet);
    })
  };
```

![Tweet](/app/assets/images/tweet.png)

There are various other interesting features that I want to implement in the future. Some of these include:

1. Adding event listeners directly on the span tags

   Currently, the event listener for leading to the annotation display are placed on the page. The event listener can be placed directly on the annotations so that the code can be cleaner and less safeguards can be in place (ex: to allow buttons to work)

2. Adding artists and albums to the search

3. Implementing tags for tracks, and associated pages for tags
   Songs can have multiple tags, but also have one primary tag on Genius.
