import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(112, 253, 255)", "rgb(0, 64, 255)"]

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Emre",
    lastName: "Temir",
    initials: "ET", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the TR'
        },
        {
            emoji: "💼",
            text: "freelancer at Upwork"
        },
        {
            emoji: "📧",
            text: "emretemirdev@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://drive.google.com/file/d/1Zegh3IDzvuQD8qlrnrD4JExXHwtXB3FM/view?usp=sharing",
            icon: 'fa fa-cloud-download',
            label: 'cv'
        },
       
        {
            link: "https://medium.com/@emretemir",
            icon: 'fa fa-medium',
            label: 'medium'
        },
       
        {
            link: "https://github.com/emretemirdev",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/emretemir/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/EmreTemirr",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hi!, I'm Emre, a web developer and content creator from Turkey. With over four years of experience in the tech industry, I've worked for Harpidae and TecPro.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'next.js', 'node.js','typescript','html5','css3','express','figma'],
            exposedTo: ['']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Harpidae",
            live: "https://harpidae.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "To-Do List",
            live: "https://github.com/emretemirdev/To-Do-List",
            source: "https://github.com/emretemirdev/To-Do-List",
            image: mock2
        }
    ]
}