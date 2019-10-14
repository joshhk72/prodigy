# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
TrackFeature.destroy_all
TrackProducer.destroy_all
TrackWriter.destroy_all
Annotation.destroy_all

# ActiveRecord::Base.connection.reset_pk_sequence!('users') # this resets the id
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end


users = User.create([
  { username: "user1", password: 555555, email: "user1@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" },
  { username: "user2", password: 666666, email: "user2@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" },
  { username: "user3", password: 777777, email: "user3@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" }
])

artists = Artist.create([
  { name: "Car Seat Headrest" },
  { name: "Joanna Newsom" },
  { name: "Laura Marling" }
])

albums = Album.create([
  { title: "Twin Fantasy", artist_id: artists[0].id, date: Date.new(2011, 11, 2)},
  { title: "Teens of Denial", artist_id: artists[0].id, date: Date.new(2016, 5, 20)},
  { title: "Ys", artist_id: artists[1].id, date: Date.new(2006, 11, 6)},
  { title: "Divers", artist_id: artists[1].id, date: Date.new(2015, 10, 23)},
  { title: "I Speak Because I Can", artist_id: artists[2].id, date: Date.new(2010, 3, 22)},
  { title: "Semper Femina", artist_id: artists[2].id, date: Date.new(2017, 3, 10)}
])

lyrics_1 = %Q([Verse 1]
I got so fucking romantic
I apologize
Lemme light your cigarette
Come visit Kansas for a week of debauchery
Songs and high fives and weird sex

[Chorus]
Cute thing
Don't be a rude thing
Hot thing
It was nothing

[Post-Chorus 1]
God
Give me Frank Ocean's voice
And James Brown's stage presence
I will be your rock, God, when you're rolling the dice

[Verse 2]
I got so fucking romantic
I apologize
Lemme smoke your weed, no wait
Healthy minds make sexy bodies
Let us touch so much of ourselves together

[Chorus]
Cute thing (cute thing, cute thing)
Don't be a rude thing (don't be rude, don't be a rude thing)
Hot thing (hot thing, hot thing)
It was nothing (it was nothing, it was nothing)

[Post-Chorus 2]
Dog (ooh ooh)
Give me one little chance (ooh ooh)
I can make you a man (ooh ooh)
I will be your rock, dog, (woof woof) when you're rolling your eyes
(Ooooh ooooh ooooh)
(Ooooh ooooh ooooh)
(Ooooh ooooh ooooh)

[Guitar breakdown]
(Do do do, do do do, do do)
(Do do do, do do do, do do)
(Do do do, do do do, do do)
(Do do do, do do do, do do)

[Bridge]
He died in an explosion
Of mixed media and poorly written reviews
And some stammering drunk who tried to tell him how good his shit was
"That's- that's, ah- that's- that's some good- good shit, man"

I accidentally spoke his first name aloud
Trying to make it fit in with the lyrics of "Ana Ng"
Worked like a charm

We're getting old
When will we walk in each other's majestic presence?
Listen, hear my words
They're the ones you would think I would say if I was John Linnell
Or trying to be John Linnell

[Outro]
I am love
I am love
I would sleep naked
Next to you naked
I am love
I am love
I would sleep naked
Next to you naked
I am love
I am love
Like some excommunicated priest
Casting demons
Asked one what its name was
)

lyrics_2 = %Q([Verse 1]
The meadowlark and the chim-choo-ree and the sparrow
Set to the sky in a flying spree, for the sport of the pharaoh
Little while later the Pharisees dragged a comb through the meadow
Do you remember what they called up to you and me, in our window?
There is a rusty light on the pines tonight
Sun pouring wine, lord, or marrow
Down into the bones of the birches
And the spires of the churches
Jutting out from the shadows
The yoke, and the axe, and the old smokestacks and the bale and the barrow
And everything sloped like it was dragged from a rope
In the mouth of the south below
We've seen those mountains kneeling, felten and grey
We thought our very hearts would up and melt away
From that snow in the nighttime
Just going
And going
And the stirring of wind chimes
In the morning
In the morning
Helps me find my way back in
From the place where I have been
And, Emily - I saw you last night by the river
I dreamed you were skipping little stones across the surface of the water
Frowning at the angle where they were lost, and slipped under forever
In a mud-cloud, mica-spangled, like the sky'd been breathing on a mirror
Anyhow - I sat by your side, by the water
You taught me the names of the stars overhead that I wrote down in my ledger
Though all I knew of the rote universe were those Pleiades loosed in December
I promised you I'd set them to verse so I'd always remember

[Chorus]
That the meteorite is a source of the light
And the meteor's just what we see
And the meteoroid is a stone that's devoid of the fire that propelled it to thee

And the meteorite’s just what causes the light
And the meteor’s how it’s perceived
And the meteoroid’s a bone thrown from the void
That lies quiet and offering to thee

[Verse 2]
You came and lay a cold compress upon the mess I'm in
Threw the windows wide and cried, "Amen! Amen! Amen!"
The whole world stopped to hear you hollering
You looked down and saw now what was happening
The lines are fading in my kingdom
(Though I have never known the way to border them in)
So the muddy mouths of baboons and sows and the grouse and the horse and the hen
Grope at the gate of the looming lake that was once a tidy pen
And the mail is late and the great estates are not lit from within
The talk in town's becoming downright sickening
In due time we will see the far buttes lit by a flare
I've seen your bravery, and I will follow you there
And row through the nighttime
So healthy
Gone healthy all of a sudden
In search of a midwife
Who can help me
Who can help me
Help me find my way back in
And there are worries where I've been
Say, say, say in the lee of the bay; don't be bothered
Leave your troubles here where the tugboats shear the water from the water
(Flanked by furrows, curling back, like a match held up to a newspaper)
Emily, they'll follow your lead by the letter
And I make this claim, and I'm not ashamed to say I know you better
What they've seen is just a beam of your sun that banishes winter
Let us go! Though we know it's a hopeless endeavor
The ties that bind, they are barbed and spined and hold us close forever
Though there is nothing would help me come to grips with a sky that is gaping and yawning
There is a song I woke with on my lips as you sailed your great ship towards the morning
Come on home, the poppies are all grown knee-deep by now
Blossoms all have fallen, and the pollen ruins the plow
Peonies nod in the breeze and while they wetly bow
With hydrocephalitic listlessness ants mop up their brow
And everything with wings is restless, aimless, drunk and dour
The butterflies and birds collide at hot, ungodly hours
And my clay-colored motherlessness rangily reclines
Come on home, now! All my bones are dolorous with vines
Pa pointed out to me, for the hundredth time tonight
The way the ladle leads to a dirt-red bullet of light
Squint skyward and listen
Loving him, we move within his borders
Just asterisms in the stars' set order
We could stand for a century
Staring
With our heads cocked
In the broad daylight at this thing
Joy
Landlocked
In bodies that don't keep
Dumbstruck with the sweetness of being
Until we don't be told
Take this
And eat this

[Chorus]
Told: the meteorite is a source of the light
And the meteor's just what we see
And the meteoroid is a stone that's devoid of the fire that propelled it to thee

And the meteorite’s just what causes the light
And the meteor’s how it’s perceived
And the meteoroid’s a bone thrown from the void
That lies quiet and offering to thee
)

lyrics_3 = %Q(You're holding bits of styrofoam
With your face painted on to your friends
You listen to them whine and moan
About everything you can't understand

Can I just say I don't fear the light
But darkness descends once more into my life

And suddenly we're all alone in silence
So I take a step away
I look up to the falling snow
As it makes its home upon my face
Well I wouldn't want to ruin something I couldn't save
The gap will keep us safe
The gap will keep us safe

Step away, get me when I'm down

And suddenly I'm five years old
And I'm just so cold I want to cry
I haul up on my gentlemen
Who have always been there in hard times
They're just not like that man of mine
Who visit me from time to time

My love, I treasure you

I hear that summer's coming back
So I stretch out my back and travel a long
The winter though it darkens me
It is pure and clean and all I want
I'll apologize to the ones I love
For leaving them when the sun comes up

Too bright for me, darkness descends

Oh well I'm not well again
And once more darkness it descends
The ground is falling under me
And I can't find the means to leave

Convinced that I am going mad
Oh I bury my head into his hands
So sure that I'm loosing faith
Oh I clear a space in his fathers land

You deal with God far too young
Before you know it your life has run away
)

tracks = Track.create([
  { name: "Cute Thing", youtube_url: "https://www.youtube.com/watch?v=fj8H_ZXLgio", artist_id: artists[0].id, lyrics: lyrics_1, album_id: albums[0].id, date: albums[0].date, image_url: "https://e-cdns-images.dzcdn.net/images/cover/19af256a3e05dd7b640dd1140bd97b6e/500x500-000000-80-0-0.jpg" },
  { name: "Emily", youtube_url: "https://www.youtube.com/watch?v=UGoNCvoZuYA", artist_id: artists[1].id, lyrics: lyrics_2, album_id: albums[2].id, date: albums[2].date, image_url: "https://nofoodjustwax.files.wordpress.com/2018/10/img_9126.jpg?w=560" },
  { name: "Darkness Descends", youtube_url: "https://www.youtube.com/watch?v=rKQzY3HYFhE", artist_id: artists[2].id, lyrics: lyrics_3, album_id: albums[4].id, date: albums[4].date, image_url: "http://simg.mysound.jp/img/disc/657/120_EMI5099962781657.jpg" }
])

tracks[0].producers.create(name: "Will Toledo");
will = tracks[0].producers.find_by(name: "Will Toledo")
tracks[0].writers = [will]
tracks[0].featured_artists.create(name: "Testing1")
tracks[0].featured_artists.create(name: "Testing2")
tracks[0].featured_artists.create(name: "Testing3")

annotations = Annotation.create([
  { track_id: tracks[0].id, start_idx: 10, end_idx: 47, body: "Will got too romantic, so he apologizes." },
  { track_id: tracks[0].id, start_idx: 48, end_idx: 74, body: "He will light your cigarette." },
])