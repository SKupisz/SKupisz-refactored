import ProgrammingBooks from "../assets/my-programming-books-background.jpg";
import PhpAndMySQL from "../assets/phpAndMySQL.jpg";
import PracticalSQLCourse from "../assets/practicalSQLCourse.jpg";
import BasicsOfCryptography from "../assets/basicsOfCryptography.jpg";
import ReactLogo from "../assets/react-logo.png";
import DotNetCoreLogo from "../assets/dotNetCoreLogo.png";
import ReactBackground from "../assets/reactBackground.png";

const blogData = {
    menuData: [
        {
            title: "My favourite programming books",
            content: "In today's world we can learn programming from many sources: youtube tutorials, online courses, stack overflow etc. However, programming books are also a popular source of IT knowledge. Today, I will show you...",
            address: "my-programming-books",
            background: ProgrammingBooks
        },
        {
            title: "React - worth to learn or not?",
            content: "In today's world we can learn programming from many sources: youtube tutorials, online courses, stack overflow etc. However, programming books are also a popular source of IT knowledge. Today, I will show you...",
            address: "react-worth-to-learn-our-not",
            background: ReactBackground
        },
    ],
    blogsContent: [
        [
            {
                type: "p",
                content: "In today's world we can learn programming from many sources: youtube tutorials, online courses, stack overflow etc. However, programming books are also a popular source of IT knowledge. Today, I will show you some of the books that I use while programming."
            },
            {
                type: "image",
                title: "PHP and MySQL",
                src: PhpAndMySQL
            },
            {
                type: "p",
                content: "The first title on my list is \"PHP and MySQL. Making websites. Edition V\" written by Luke Welling and Laura Thompson.I recommend this book especially to beginners because of clear language, understandable even for non-technical people. The authors of this book successfully applied the rule that the more interesting examples you are given, the faster you learn. Already in the first chapter,we start learning theory and practice together by coding a lot of projects, from a car parts store and online shop through bookmarks even to our own mailbox. Luke Welling and Laura Thompson didn't forget about databases, too - they wrote a separate chapter on the basics of MySQL, and then showed how to use MySQL with PHP. And when it comes down to databases..."
            },
            {
                type: "image",
                title: "Practical SQL Course",
                src: PracticalSQLCourse
            },
            {
                type: "p",
                content: "For a very long time, I had been searching for a good compendium about SQL. Some books were not accurate enough, others disappointed me with the language used by the authors. Finally, I found \"Practical SQL Course\" by Danuta Mendrala and Marcin Szeliga. It was an exellent choice - there is all you need to learn about SQL. The language is really understandable and clear and also very professional. I advise to read this book both to beginners and to experienced programmers who want to learn something new or check something about SQL."
            },
            {
                type: "image",
                title: "Basics of Cryptography",
                src: BasicsOfCryptography
            },
            {
                type: "p",
                content: "Now let's move from websites and databases designing to something that most people associate with movies like Mission Impossible, James Bond series or Mr.Robot - cryptography and cyphering. I have learnt a lot about that from \"Basics of Cryptography. Edition III\", written by Marcin Karbowski. From steganography to RSA encryption, you will find there everything you should know about cryphtography. After reading it attentively, I started creating my own cyphers, which really improved my creativity. Who do I recommend this book for? Mostly for cryptography adepts, but also for people who haven't had a chance to learn about cyphering yet."
            },
            {
                type: "p",
                content: "And that's how my personal programming booklist looks like. In my opinion, it is worth reading because these books are both professional and practical. If you want to see more of my programming and mathematical books, just write to me. See ya!"
            }
        ],
        [
            {
                type: "p",
                content: "For a longer time, I have been programming many websites with React.js. At the beginning of learning this framework, I was not sure if that was something I thoroughly needed. However, today, after getting experience in this technology, I don't regret this choice - here's why."
            },
            {
                type: "image",
                title: "React logo",
                src: ReactLogo
            },
            {
                type: "p",
                content: " At first, for those of you who don't know what the React.js is, let me tell you something about its story. Let's get back in time to 2013, when due to Facebook's rise, its programmers started creating many different augments and frameworks. One of these projects was the XHP, a PHP language's augmentation made for working with XML files.  This extension of PHP and its facebook's dialect called Hack inspired Jordan Walke to create a language that will improve the condition of the Facebook Ads department which he was working for. That's how the story of React.js began in a nutshell."
            },
            {
                type: "p",
                content: "Now you know what React.js is - a javascript frontend framework. And, in my opinon, a really programmer-friendly one - I have been learning and building projects with React for 2 years and I can that it's kinda easy to learn and not that hard to master. With this framework, I created many websites, like sgk-news.pl, my polish language course or this website you are reading right now 😉"
            },
            {
                type: "p",
                content: "But let's stop for a moment and think - why the hell another framework was made? We have pure javascript and its libraries, hence we may not need this React.js and all of that fluffy stuff. Well, at least to my mind, that's not the truth - in fact, React is not that bad. What makes him that work-boosting framework is the virtual DOM, which stands for the Document Object Model. Another feature that makes React worth to know is a large society of programmers that use this framework and the content they create for other ones of them - the packages that you can download from the NPM web. At any moment, in any place - the only limit is your imagination (or your project's limits 😅)."
            },
            {
                type: "p",
                content: "Somebody could say now \"Okay, that's gorgeous what you're saying about React.js, but am I able to use it in any other destination?\" The answer is: yes, you can! One of the top examples of which other languages you can use React.js with is C#, especially the .NET core. With this language (technically a C# framework) you can build your website backend with the C#, and use React.js for your app's frontend. If you don't know anything about programming in C# and you still want to become a full-stack web developer, nothing lost - the other alternative to this option is Laravel, a PHP language framework. And, for me the most thunderous feature about the React, you can also build mobile apps with its augmentation, React native which is quite easy to learn if you know React.js."
            },
            {
                type: "image",
                title: ".NET Core logo",
                src: DotNetCoreLogo
            },
            {
                type: "p",
                content: "Brief, it's still worth to learn React although there are some alternatives for it, like Vue.js or Angular.js. However, from my personal point of view I recommend you to start with React first. If this framework doesn't suit you, don't worry - try to get used to its rules, concepts and all of that stuff or just find something other to learn, like Vue or Angular. Nevertheless, it will benefit you if you learn React.js and I'm sure you're not gonna be dissapointed 😉."
            }
        ]
    ]
};

export default blogData;