# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PublicActivity.enabled = false

User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
TrackFeature.destroy_all
TrackProducer.destroy_all
TrackWriter.destroy_all
Annotation.destroy_all
Comment.destroy_all
Upvote.destroy_all
Question.destroy_all
Answer.destroy_all
PublicActivity::Activity.destroy_all

# ActiveRecord::Base.connection.reset_pk_sequence!('users') # this resets the id during every new seed
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end


users = User.create([
  { username: "user1",
    password: 555555,
    email: "user1@user.com",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMr_Ky37u_30imoav7-kzi01LCBOh88WP6hu2r3IkXUJaQsWexdA&s",
    description: "I am the demo user for this app!"},
  { username: "user2", password: 666666, email: "user2@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" },
  { username: "user3", password: 777777, email: "user3@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" }
])

artists = Artist.create([
  {
    name: "Car Seat Headrest",
    image_url: "https://pbs.twimg.com/profile_images/459401939529134080/ZPooDfQ0_400x400.jpeg",
    banner_image_url: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p640x640/40095711_2176917312381348_6504233799444856832_o.jpg?_nc_cat=109&_nc_ohc=ULaBjFI5mfIAQnM735_K2CdWi9lE104pnMgzCQ4WaX6H7RkxXlzq3U4hw&_nc_ht=scontent-lga3-1.xx&oh=ef566fb0176f3c43c1f458474c14df35&oe=5E4E7A38",
    description: %Q(Will Toledo is an upstanding young man who has upheld the letter of the law to the fullest extent of his abilities.

      He passed through his school years and through college without any evidence of criminal wrongdoings being attached to him, indeed becoming a role model and a guiltless beacon of hope to his peer group, members of whom might have otherwise been terribly misled.

      He has no identifying marks or scars.)
  },
  {
    name: "Joanna Newsom",
    image_url: "https://media.pitchfork.com/photos/5d7c07438699b30008f1b0ad/2:1/w_790/Joanna-Newsom.jpg",
    banner_image_url: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Ff3a4e9cc-87ab-11e5-90de-f44762bf9896?fit=scale-down&source=next&width=700",
    description: "Newsom is a singer-songwriter whose uniqueness is defined by her voice, her lyrics, her instrument of choice (the pedal harp), and her manner of composition (long songs owing more to modern classical music than pop song formats)."
  },
  {
    name: "Laura Marling",
    image_url: "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4cc7a56c-5f0b-11e6-829b-372b3909db3d.jpg?crop=2028%2C1141%2C58%2C32&resize=685",
    banner_image_url: "https://cdn.cherwell.org/wp-content/uploads/2017/02/09070647/LM-Conference-3-e1487946942627.jpg"
  },
  {
    name: "M.Ward",
    image_url: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-143221-rectangle.jpg",
    banner_image_url: "http://acltv.com/wp-content/uploads/2012/06/mward.jpg",
    description: "M. Ward is an American musician, perhaps most famous for his collaboration with Zooey Deschanel in the band She & Him, which he provides the music for."
  },
  {
    name: "Natalie Prass",
    image_url: "https://media.pitchfork.com/photos/592c618713d197565213fab1/2:1/w_648/0ac15845.jpg",
    banner_image_url: "https://images.squarespace-cdn.com/content/v1/56858337cbced60d3b293aef/1536803629883-8V8TPLEA4WIL1LQUY4EE/ke17ZwdGBToddI8pDm48kLtpqB6kVHXkiemRg4JLCL5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIe72J8h1NHI3a274XhZOnpF485W8QFyZD-MOGIJwbHpwKMshLAGzx4R3EDFOm1kBS/Albumism_NataliePrass_MainImage1.jpg",
    description: "Prass’s debut was shelved by Spacebomb Records after it was recorded in 2012. In the time between finishing recording and the release of the record in January 2015, she played in Jenny Lewis’s touring band."
  }
])

albums = Album.create([
  { title: "Twin Fantasy", artist_id: artists[0].id,
    date: Date.new(2011, 11, 2),
    image_url: "https://f4.bcbits.com/img/a0202599159_10.jpg",
    banner_image_url: "https://www.angryyoungandpoor.com/store/pc/catalog/products/lp/mtd11330lp.jpg"
  },
  { title: "Teens of Denial", artist_id: artists[0].id,
    date: Date.new(2016, 5, 20),
    image_url: "https://f4.bcbits.com/img/a2165492760_10.jpg"
  },
  {
    title: "Ys", artist_id: artists[1].id, date: Date.new(2006, 11, 6),
    image_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Ys_cover.jpg",
    description: "Ys is the second studio album by harpist, singer and songwriter Joanna Newsom. The album title refers to the mythical city of Ys, supposedly located on the coast of Brittany before it ended up sinking beneath an ocean flood."
  },
  {
    title: "Divers",
    artist_id: artists[1].id,
    date: Date.new(2015, 10, 23),
    image_url: "https://midnightpunk.files.wordpress.com/2015/11/joannanewsom_divers_mini-400x400.jpg",
    banner_image_url: "https://i.ytimg.com/vi/WY1uzXMKsOE/maxresdefault.jpg"
  },
  {
    title: "I Speak Because I Can",
    artist_id: artists[2].id,
    date: Date.new(2010, 3, 22),
    image_url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Ispeakbecauseican.jpg"
  },
  {
    title: "Semper Femina",
    artist_id: artists[2].id,
    date: Date.new(2017, 3, 10),
    image_url: "https://upload.wikimedia.org/wikipedia/en/7/72/Semper_Femina_-_Laura_Marling.jpg"
  },
  {
    title: "Have One on Me",
    artist_id: artists[1].id,
    date: Date.new(2010, 2, 23),
    image_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fe2f790a4752e38a734e9a107bbcb3f5c.452x452x1.jpg",
    banner_image_url: "https://static.stereogum.com/uploads/2011/12/joanna-newsom-good-intentions-paving-company-608x450.jpg"
  },
  {
    title: "Post-War",
    artist_id: artists[3].id,
    date: Date.new(2006, 8, 22),
    image_url: "https://www.mergerecords.com/stuff/contentmgr/files/0/0a797cfb20796db825f32af6c6b4c115/image/_resized/10_700_700_mrg280.jpg",
  },
  {
    title: "More Rain",
    artist_id: artists[3].id,
    date: Date.new(2016, 3, 4),
    image_url: "http://dis.resized.images.s3.amazonaws.com/540x540/102433.png",
  },
  {
    title: "Natalie Prass",
    artist_id: artists[4].id,
    date: Date.new(2015, 1, 27),
    image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Natalie_Prass.png/220px-Natalie_Prass.png",
  },
  {
    title: "The Future and the Past",
    artist_id: artists[4].id,
    date: Date.new(2018, 6, 1),
    image_url: "https://media.pitchfork.com/photos/5ae09c2680a91d204f0b399b/1:1/w_320/Natalie%20Prass:%20The%20Future%20and%20the%20Past.jpg",
  }
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

lyrics_4 = %Q([Intro]
In the backseat of my heart
My love tells me I'm a mess
I couldn't get the car to start
I left my keys somewhere in the mess

[Verse 1]
It comes and goes in plateaus
One month later, I'm a fucking pro
My parents would be proud
Or fall asleep on the floor
Forget what happened in the morning
There are notes in your handwriting
But you can't make it out

[Chorus 1]
We are not a proud race
It's not a race at all
We're just trying
I'm only trying to get home
Drunk drivers, drunk drivers
This is not a good thing
I don't mean to rationalize
Or try and explain it away
It's not okay
Drunk drivers, drunk drivers

[Verse 2]
It's too late to articulate it
That empty feeling
You share the same fate as the people you hate
You build yourself up against others' feelings
And it left you feeling empty as a car coasting downhill
I have become such a negative person
It was all just an act
It was all so easily stripped away

[Pre-Chorus]
But if we learn how to live like this
Maybe we can learn how to start again
Like a child who's never done wrong
Who hasn't taken that first step

[Chorus 2]
We are not a proud race
It's not a race at all
We're just trying
I'm only trying to get home
Drunk drivers, drunk drivers
Put it out of your mind
And perish the thought
There's no comfort in responsibility
Drunk drivers, drunk drivers

[Chorus 3]
It doesn't have to be like this
It doesn't have to be like this
It doesn't have to be like this
Killer whales, killer whales
It doesn't have to be like this
It doesn't have to be like this
It doesn't have to be like this
Killer whales, killer whales

[Verse 3]
Here's that voice in your head
Giving you shit again
But you know he loves you
And he doesn't mean to cause you pain
Please listen to him
It's not too late
Turn off the engine
Get out of the car
And start to walk

[Bridge]
Drunk drivers
Drunk drivers
Drunk drivers
Drunk drivers

[Chorus 3]
It doesn't have to be like this
It doesn't have to be like this
It doesn't have to be like this
Killer whales, killer whales
It doesn't have to be like this
It doesn't have to be like this
It doesn't have to be like this
Killer whales, killer whales

[Outro]
Ahhh
Whales... ahhh
Whales... ahhh yeah yeah...
Whales... oh oh oh oh oh)

lyrics_5 = %Q(Twenty miles left to the show
Hello, my old country, hello
Stars are just beginning to appear
And I have never in my life, before been here

And it's my heart, not me, who cannot drive
At which conclusion you arrived
Watching me sit here bolt upright and cry
For no good reason at the Eastering sky

And the tilt of this strange nation
And the will to remain for the duration
Waving the flag
Feeling it drag

Like a bump on a bump on a log, baby
Like I'm in a fist fight with a fog, baby
Step-ball-change and a pirouette
And I regret, I regret

How I said to you, "honey, just open your heart"
When I've got trouble even opening a honey jar
And that right there is where we are...

And I been 'fessing double fast
Addressing questions nobody asked
I'll get this joy off of my chest at last
And I will love you 'til the noise has long since passed

And I did not mean to shout, just drive
Just get us out, dead or alive
A road too long to mention, lord, it's something to see!
Laid down by the good intentions paving company

All the way to the thing we've been playing at, darlin'
I can see that you're wearing your staying hat, darlin'
For the time being all is well
Won't you love me a spell?

This is blindness beyond all conceiving
Well, behind us the road is leaving, yeah, leaving
And falling back
Like a rope gone slack

Well, I saw straight away that the lay was steep
But I fell for you, honey, as easy as falling asleep
And that right there is the course I keep...

And no amount of talking
Is going to soften the fall
But, like after the rain, step out
Of the overhang, that's all

It had a nice a ring to it
When the ol' opry house rang
So with a solemn auld lang
Signed, sealed, delivered, I sang

And there is hesitation
And it always remains
Concerning you, me
And the rest of the gang

And in our quiet hour
I feel I see everything
And am in love with the hook
Upon which everyone hangs

And I know you meant to show the extent
To which you gave a goddang
You ranged real hot and real cold but I'm sold
I am home on that range

And I do hate to fold
Right here at the top of my game
When I've been trying with my whole heart and soul
To stay right here in the right lane

But it can make you feel over and old
Lord, you know it's a shame
When I only want for you to pull over and hold me
'Til I can't remember my own name)

lyrics_6 = %Q([Verse 1]
Well, he stormed with his feet
And he clapped with his hands
He summoned all of his joy when he laughed

It suffered all of his joy when he cried
And sometimes when he got into talking
Man, he could rattle on and on

[Refrain]
He was a good man and now he's gone

[Verse 2]
Well, in war he was a tiger
When it was over, like a dove
He summoned all of his strength in the climb

It suffered all of his strength in the fall
And sometimes when he got into fighting
Man, he could fight with you all day long

[Refrain]
He was a good man and now he's gone

[Verse 3]
He put his trust in a higher power
He held his power like a Holy Grail
He summoned all of his faith in the lifting

It suffered all of his faith in the fail
His heart was stronger than a heavy metal bullet
And that's why I dedicate this song

[Refrain]
He was a good man and now he's gone

[Outro]
His heart was stronger than a heavy metal bullet
And that's why I dedicate this song)

lyrics_7 = %Q([Verse 1]
I sailed a wild, wild sea
Climbed up a tall, tall mountain
I met an old, old man
Beneath a weeping willow tree
He said, "Now if you got some questions
Go and lay them at my feet
But my time here is brief
So you'll have to pick just three"

[Verse 2]
And I said, "What do you do
With the pieces of a broken heart?
And how can a man like me
Remain in the light?
And if life is really as short as they say
Then why is the night so long?"
And then the sun went down
And he sang for me this song

[Bridge]
See, I once was a young fool like you
Afraid to do the things that I knew I had to do
So I played an escapade, just like you
I played an escapade, just like you

[Verse 3]
I sailed a wild, wild sea
Climbed up a tall, tall mountain
I met an old, old man
He sat beneath a sapling tree
He said, "Now if you got some questions
Go and lay them at my feet
But my time here is brief
So you'll have to pick just three"

[Verse 4]
And I said, "What do you do
With the pieces of a broken heart?
And how can a man like me
Remain in the light?
And if life is really as short as they say
Then why is the night so long?"
And then the sun went down
And he played for me this song)

lyrics_8 = %Q(Everything is old in the world
Except for the baby
Little baby, ah little baby

And nothing's sun isn't seen
Except for the baby
Little baby, ah little baby

And I say child, be my teacher
Would ya could ya baby yeah?
Little baby, ah little baby

And everyone is too big to cry
Except for the baby
Little baby, ah little baby

And everyone knows how to lie
Except for the baby
Little baby, ah little baby

So I say child, be my teacher
Would ya could ya baby yeah?
Little baby, ah little baby

So I said talk to me baby (talk to me baby)
Talk to me baby (talk to me baby)
Talk to me baby (talk to me baby)
Talk to me baby (talk to me baby)
Talk to me baby tell me everything's all right

So I say child, be my teacher
Would ya could ya baby yeah?
Little baby, ah little baby
Little baby, ah little baby
Little baby, ah little baby
Little baby, ah little baby)

lyrics_9 = %Q([Verse 1]
I remember you told me
You'd love me only
And now you've gone and treated me like a fool
You never say where you're going
Stay out until the morning
And I know you've been treating me like a fool

[Chorus]
All the loving that I made
All the promises that I gave
Then you let me down
And every story and every lie
It won't save you from me saying goodbye

[Verse 2]
So tonight when you're out
You'll come back to an empty house
With a note signed "Sincerely, Your Fool"

[Chorus]
All the loving that I made
All the promises that I gave
Then you let me down
And every story and every lie
It won't save you from me saying goodbye

[Verse 3]
Built this new life before me
But you fill up my memory
And they haunt me like memories often do
And they tell me I'll always be your fool
Oh, I guess I'll always be your fool)

lyrics_10 = %Q(There are trees, there are clouds
Many shadows and crowds
There are dreams, there are doubts
There are whispers and shouts
And the snow, it formed a crown
Upon the silvered mountain king
But there's only one thing that I need

Sandy glass, stained with red
Birds with porcelain wings
In a house filled with books
That nobody reads
So many things will fill my life
But only one will do
It is you, it is you, it is you

And the Sun will sing its song
And the Moon will always mellow
And each day as my life goes on
It has all been a ruin without you

Broken bells, try to chime
Guitar with no strings
Pearls in the sea
That will never see rings
All the answers of the world
They need a reason to be true
It is you
It is you

Do my best on my own
To see the beauty abound
Glass of wine on my desk
When you're not around
I've learned that there's a key
Inside and only one will do
It is you
It is you
It is you)

lyrics_11 = %Q([Verse 1]
Ooh ooh ooh, time has chosen
We need to feel this, we need to feel this
Ooh ooh ooh, like an ocean
No-one can steal this, nobody can take this, yeah
Nobody can

[Chorus]
Oh, ain't nobody can
Take this from our hands
And I know, and I know, I know, I know
We're holdin' on, keep holdin' on
Who's letting go? Not you, not you
Ooh, oh, ain't nobody can

[Verse 2]
Ooh ooh ooh, sing out your voices
This kind of noise is, one that rejoices
Ooh ooh ooh, stand like a rock
I am the sources of my body's choices now
Oh, and nobody can

[Chorus]
Oh, ain't nobody can take this from our hands
And I know, and I know, I know, I know
We're holdin' on, we'll keep holdin' on
Who's letting go? Not you, not you
Ooh, oh, ain't nobody can

[Bridge]
Ain't nobody here is givin' it up
Ain't nobody here is givin' it up
No ain't nobody here is givin' it up
Ain't nobody here is givin' it up
Oh, ain't nobody can take this from our hands
Oh, ain't nobody here is givin' it up
Oh, ain't nobody can take this from our hands
Oh, no, ain't nobody here is givin' it up

[Chorus]
Oh, ain't nobody can take this from our hands
And I know, and I know, I know, I know
We're holdin' on, keep holdin' on
Who's letting go? Not you, not you
Ooh, oh, ain't nobody can

Ain't nobody can take this from our hands
And I know, and I know, I know, I know
We're holdin' on, we'll keep holdin' on
Who's letting go? Not you, not you
Ooh, oh, ain't nobody can)

tracks = Track.create!([
  { 
    name: "Cute Thing",
    youtube_url: "https://www.youtube.com/watch?v=fj8H_ZXLgio",
    artist_id: artists[0].id,
    lyrics: lyrics_1,
    album_id: albums[0].id,
    date: albums[0].date,
    image_url: "https://e-cdns-images.dzcdn.net/images/cover/19af256a3e05dd7b640dd1140bd97b6e/500x500-000000-80-0-0.jpg"
  },
  { 
    name: "Emily",
    youtube_url: "https://www.youtube.com/watch?v=UGoNCvoZuYA",
    artist_id: artists[1].id,
    lyrics: lyrics_2,
    album_id: albums[2].id,
    date: albums[2].date,
    image_url: "https://nofoodjustwax.files.wordpress.com/2018/10/img_9126.jpg?w=560"
  },
  { 
    name: "Darkness Descends",
    youtube_url: "https://www.youtube.com/watch?v=rKQzY3HYFhE",
    artist_id: artists[2].id,
    lyrics: lyrics_3,
    album_id: albums[4].id,
    date: albums[4].date,
    image_url: "http://simg.mysound.jp/img/disc/657/120_EMI5099962781657.jpg"
  },
  { 
    name: "Drunk Drivers/Killer Whales",
    youtube_url: "https://www.youtube.com/watch?v=ccztRby3FAk",
    artist_id: artists[0].id,
    lyrics: lyrics_4,
    album_id: albums[1].id,
    date: albums[1].date,
    image_url: "https://e.snmc.io/i/300/w/55bb15d208fa0138018c6fd6f172952a/6168909"
  },
  {
    name: "Good Intentions Paving Co.",
    youtube_url: "https://www.youtube.com/watch?v=eBa3QSycc0c",
    artist_id: artists[1].id,
    lyrics: lyrics_5,
    album_id: albums[6].id,
    date: albums[6].date,
    image_url: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fe2f790a4752e38a734e9a107bbcb3f5c.452x452x1.jpg"
  },
  {
    name: "Requiem",
    artist_id: artists[3].id,
    lyrics: lyrics_6,
    album_id: albums[7].id,
    date: albums[7].date,
    image_url: albums[7].image_url,
    youtube_url: "https://www.youtube.com/watch?v=AIMVxQy0mCU"
  },
  {
    name: "Chinese Translation",
    artist_id: artists[3].id,
    lyrics: lyrics_7,
    album_id: albums[7].id,
    date: albums[7].date,
    image_url: albums[7].image_url,
    youtube_url: "https://www.youtube.com/watch?v=ToEPFDIzhNA"
  },
  {
    name: "Little Baby",
    artist_id: artists[3].id,
    lyrics: lyrics_8,
    album_id: albums[8].id,
    date: albums[8].date,
    image_url: albums[8].image_url,
    youtube_url: "https://www.youtube.com/watch?v=gIeOCM8e25c"
  },
  {
    name: "Your Fool",
    artist_id: artists[4].id,
    lyrics: lyrics_9,
    album_id: albums[9].id,
    date: albums[9].date,
    image_url: albums[9].image_url,
    youtube_url: "https://www.youtube.com/watch?v=_iw9yzbUWGM"
  },
  {
    name: "It is You",
    artist_id: artists[4].id,
    lyrics: lyrics_10,
    album_id: albums[9].id,
    date: albums[9].date,
    image_url: albums[9].image_url,
    youtube_url: "https://www.youtube.com/watch?v=Kl3yVWnP8AY"
  },
  {
    name: "Ain't Nobody",
    artist_id: artists[4].id,
    lyrics: lyrics_11,
    album_id: albums[10].id,
    date: albums[10].date,
    image_url: albums[10].image_url,
    youtube_url: "https://www.youtube.com/watch?v=9K1CnOKYgKA"
  },
])

tracks[0].producers.create!(name: "Will Toledo")
will = tracks[0].producers.find_by(name: "Will Toledo")
tracks[0].writers = [will]

annotations = Annotation.create([
  { track_id: tracks[0].id, start_idx: 10, end_idx: 47, body: "Will got too romantic, so he apologizes.", author_id: users[0].id },
  { track_id: tracks[0].id, start_idx: 48, end_idx: 74, body: "He will light your cigarette.", author_id: users[0].id }
])

comments = Comment.create([
  { track_id: tracks[0].id, author_id: users[0].id, body: "This song sucks." },
  { track_id: tracks[0].id, author_id: users[1].id, body: "This song rocks." }
])

upvotes = Upvote.create!([
  { value: 1, user_id: users[1].id, upvotable_id: comments[0].id, upvotable_type: "Comment" },
  { value: -1, user_id: users[2].id, upvotable_id: comments[0].id, upvotable_type: "Comment" },
  { value: 1, user_id: users[0].id, upvotable_id: comments[1].id, upvotable_type: "Comment" },
  { value: 1, user_id: users[1].id, upvotable_id: annotations[0].id, upvotable_type: "Annotation" },
  { value: 1, user_id: users[2].id, upvotable_id: annotations[0].id, upvotable_type: "Annotation" }
])

answers = Answer.create!([
  { body: "[https://twitter.com/carseatheadrest/status/846419969638383616]", question_id: tracks[3].questions[1].id, user_id: users[0].id },
])

PublicActivity.enabled = true