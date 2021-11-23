import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const data = {
    mainNavbar: [
        {
            address: "/",
            content: "Main"
        },
        {
            address: "/portfolio",
            content: "Portfolio"
        },
        {
            address: "/blog",
            content: "Blog"
        },
        {
            address: "/contact",
            content: "Contact"
        },
    ],
    contactWays: [
        {
            icon: <EmailIcon className="contact-icon"/>,
            address: "mailto:granarax@protonmail.com"
        },
        {
            icon: <GitHubIcon className="contact-icon"/>,
            address: "https://github.com/SKupisz"
        },
        {
            icon: <TwitterIcon className="contact-icon"/>,
            address: "https://twitter.com/granarax"
        },
        {
            icon: <LinkedInIcon className="contact-icon"/>,
            address: "https://www.linkedin.com/in/szymon-kupisz-0a8a91193/"
        }
    ],
    console: {
        helpCommands: [
            ["show --projects", "Shows the projects I built"],
            ["show --skills", "Shows my abilities in programming"],
            ["clear", "Clears the console"],
            ["chfz -b -m -l","Changes console's font size to bigger (-b), medium (-m) or lower (-l)"],
            ["chcc {color} --reset","Changes console text's color to the hex code or the RGB given or resets is with --reset. To know more colors, type chcc -list"],
            ["exit","Shows exit options"]
        ],
        projects:
        [
            ["SGK-news","2019","2021","https://sgk-news.pl","Founder and CEO"],
            ["Hackclub","2019","now","https://hackclub.pl","Co-leader and emcee"],
            ["Alice envisions the future","2020","2020","https://www.microsoft.com/en-eg/alice-envisions-the-future","Tech mentor"],
            ["Hackweek","2020","2020","https://hackweek.pl","Co-leader"],
        ],
        skills: 
        [
            {
                name: "Web front-end",
                techs: ["HTML (advanced)","CSS (advanced)","SCSS (mid-advanced)","Javascript (mid-advanced)","ReactJS (mid-advanced)"]
            },
            {
                name: "Web back-end",
                techs: ["PHP (mid-advanced)","Laravel (mid)","Node.js (mid)"]
            },
            {
                name: "Databases",
                techs: ["SQL (advanced)","MySQL (advanced)", "MongoDB (beginner-mid)"]
            },
            {
                name: "Mobile apps design",
                techs: ["React Native (beginner-mid), SwiftUI(beginner)"]
            },
            {
                name: "Other languages",
                techs: ["C (mid)", "C++ (mid-advanced)","Python (learning)"]
            }
        ]
    }
};

export default data;