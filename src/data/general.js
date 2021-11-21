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
    ]
};

export default data;