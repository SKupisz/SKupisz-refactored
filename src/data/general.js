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
            ["chfz -b -n -s --reset","Changes console's font size to big (-b), normal (-n), small (-s) or reset the size with the --reset flag"],
            ["chcc {color} --reset --list","Changes console text's color to the hex code or the RGB given or resets is with --reset. To know which color formats are allowed to use, type chcc --list"],
            ["exit","Shows exit options"]
        ],
        projects:
        [
            {
                name: "SGK-news",
                beginning: "2019",
                ending: "2021",
                website: "https://sgk-news.pl",
                websiteActive: false,
                role: "Founder and CEO"
            },
            {
                name: "Hackclub",
                beginning: "2019",
                ending: "now",
                website: "https://hackclub.pl",
                websiteActive: true,
                role: "Co-leader and emcee"
            },
            {
                name: "Alice envisions the future",
                beginning: "2020",
                ending: "2020",
                website: "https://www.microsoft.com/en-eg/alice-envisions-the-future",
                websiteActive: true,
                role: "Tech mentor"
            },
            {
                name: "Hackweek",
                beginning: "2020",
                ending: "2020",
                website: "https://hackweek.pl",
                websiteActive: true,
                role: "Co-leader"
            },
            {
                name: "PIKNIK hackaton",
                beginning: "2021",
                ending: "2021",
                website: "",
                websiteActive: false,
                role: "Participant and the winner"
            },
            {
                name: "Softway Polska sp. z o. o.",
                beginning: "2021",
                ending: "now",
                website: "",
                websiteActive: false,
                role: "internship"
            }
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
        ],
        allowedColorFormats: ["standard html colors", "rgb", "rgba", "hex"]
    }
};

export default data;