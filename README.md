# Prodigy

[Link to site](https://prodigy-clone.herokuapp.com)

Prodigy is a lyrics & annotation web app, cloned to imitate the popular site **Genius**. It lets user add song lyrics and annotate these lyrics by highlighting words and submitting notes. Prodigy is built with **React/Redux** and **Ruby on Rails**, using a **PostgreSQL** database.

Annotations were implemented from scratch using the **Window Web API**, which allows interaction with the DOM document loaded in the browser window. The specifically used method was `window.getselection()` which returns a `Selection` object that contains the nodes selected by the user, along with the text and the indices of the `baseNode` and `extentNode` at the ends of the selection.

The annotations are implemented by creating `<span>` tags around selected parts of the text. Once annotations were created from the Rails console, they could be rendered onto the page easily by inserting the span tags onto the HTML in reverse order, sorted by the `end_idx` of the annotations.

Despite the tools available, implementing the annotation creation to let users correctly and exactly select the highlighted text proved difficult. While the **Window Web API** gave the tools to retrieve the indices of the first and last nodes in the `selection` object, the indices were useless without finding a way to also retrieve the indices of the text nodes relative to the `<p>` element where the lyrics were contained.

Since a `selection` object does not allow easy access to its contained nodes, the solution was to get the parent `<p>` element and retrieve its child nodes in a list. The `baseNode` and `extendNode` could be compared against this list to find their position compared to the parent `<p>` element. These new indices and the `baseOffset` and `extentOffset` indices given by the `selection` could be converted to indices referring to the position of the annotation in the lyrics.

During early implementation, a consequence of using this system was having a `<br>` element at the end of the `selection` would cause the parent element `<p>` to be selected instead. While `<br>`s cannot be selected when highlighting the text from front-to-back, this would limit the options that users have available. `<br>` elements could easily be selected if the user if highlighting back-to-front or are double-clicking to select a line.

It made sense that horizontal whitespaces are not significant in lyrics, and users would not select them,so it made sense to not consider them in highlighted text. The solution was to simply shift the retrieved indices if `<br>` elements were at the end of the aforementioned list. 