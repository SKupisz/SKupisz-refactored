import ProgrammingBooks from "../assets/my-programming-books-background.webp";
import ReactBackground from "../assets/reactBackground.png";
import ProgrammingBackground from "../assets/how-to-step-into-programming.webp";
import HTMLBackground from "../assets/html-code-background.webp";
import Fire from "../assets/fire.webp";

const blogData = {
    menuData: [
        {
            title: "Laziness pays back – shortly about lazy loading",
            content: "For a moment, let’s go back in time to school. What can you remember from that time? Some friendships, perhaps...",
            address: "lazy-loading-overview",
            background: Fire,
            keywords: "lazy loading, Simon Kupisz lazy loading, lazy loading react.js",
            contentId: "lpbsall",
            date: "10th of March 2022"
        },
        {
            title: "The Divology – what is that and why should you avoid it?",
            content: "When you think of building a web application, you can think of many different technologies to use. Will React.JS be a good choice for the UI design? Maybe...",
            address: "the-divology",
            background: HTMLBackground,
            keywords: "HTML, web programming, HTML tags",
            contentId: "tdwitaw",
            date: "2nd of January 2022"
        },
        {
            title: "Back to the past – shortly about C",
            content: "Day by day, we witness some programming languages becoming obsolete. Generally, these are the languages that have been used for a while, like twenty years or even more...",
            address: "back-to-the-past",
            background: ProgrammingBooks,
            keywords: "C language, Programming in C, Why you should learn C, C",
            contentId: "bttpsac",
            date: "14th of December 2021"
        },
        {
            title: "How to step into the programming?",
            content: "Nobody is surprised how many things in your daily life are related to programming and the IT industry today. No matter if you open your mobile phone, or you’re travelling by plane or...",
            address: "how-to-step-into-the-programming",
            background: ProgrammingBackground,
            keywords: "Programming for beginners, Learning programming, IT industry, Programming for freshsers",
            contentId: "htsitp",
            date: "5th of December 2021"
        },
        {
            title: "React - worth to learn or not?",
            content: "For a longer time, I have been programming many websites with React.js. At the beginning of learning this framework, I was not sure if that was something I thoroughly needed. However, ...",
            address: "react-worth-to-learn-our-not",
            background: ReactBackground,
            keywords: "ReactJS, Learning React, Javascript Frontend Library, Is it worthy to learn React?",
            contentId: "rwtlon",
            date: "30th of April 2020"
        },
        {
            title: "My favourite programming books",
            content: "In today's world we can learn programming from many sources: youtube tutorials, online courses, stack overflow etc. However, programming books are also a popular source of IT knowledge. Today, I will show you...",
            address: "my-programming-books",
            background: ProgrammingBooks,
            keywords: "Programming books, Luke Welling, Laura Thompson, Danuta Mendrala, Marcin Szeliga, Marcin Karbowski",
            contentId: "mfpb",
            date: "25 of April 2020"
        },
    ]
};

export default blogData;