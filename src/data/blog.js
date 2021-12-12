import ProgrammingBooks from "../assets/my-programming-books-background.jpg";
import ReactBackground from "../assets/reactBackground.png";
import ProgrammingBackground from "../assets/how-to-step-into-programming.jpg";

const blogData = {
    menuData: [
        {
            title: "How to step into the programming?",
            content: "Nobody is surprised how many things in your daily life are related to programming and the IT industry today. No matter if you open your mobile phone, or you’re travelling by plane or...",
            address: "how-to-step-into-the-programming",
            background: ProgrammingBackground,
            keywords: "Programming for beginners, Learning programming, IT industry, Programming for freshsers",
            contentId: "htsitp"
        },
        {
            title: "My favourite programming books",
            content: "In today's world we can learn programming from many sources: youtube tutorials, online courses, stack overflow etc. However, programming books are also a popular source of IT knowledge. Today, I will show you...",
            address: "my-programming-books",
            background: ProgrammingBooks,
            keywords: "Programming books, Luke Welling, Laura Thompson, Danuta Mendrala, Marcin Szeliga, Marcin Karbowski",
            contentId: "mfpb"
        },
        {
            title: "React - worth to learn or not?",
            content: "For a longer time, I have been programming many websites with React.js. At the beginning of learning this framework, I was not sure if that was something I thoroughly needed. However, ...",
            address: "react-worth-to-learn-our-not",
            background: ReactBackground,
            keywords: "ReactJS, Learning React, Javascript Frontend Library, Is it worthy to learn React?",
            contentId: "rwtlon"
        },
    ]
};

export default blogData;