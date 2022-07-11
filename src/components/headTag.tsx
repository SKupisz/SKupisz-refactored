import React from "react";
import { Helmet } from "react-helmet";

interface HeadTagInterface{
    siteName: string
    description: string,
    robotsTags?: string
    keywords: string
}

const AuthorImage = require("../assets/simonKupisz.jpg");

const HeadTag:React.FC<HeadTagInterface> = ({siteName="Simon G. Kupisz site", description="Simon George Kupisz's site", robotsTags="all", keywords=""} : HeadTagInterface) => {
    return <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description}/>
        <meta name="robots" content={robotsTags}/>
        <meta name="google-site-verification" content="k6qWiZWDk7r4KzuP-f2nQ1NH-i651GfErEy4BKyWluc" />
        {keywords.length > 0 ? <meta name="keywords" content={keywords}/>: <meta name="keywords" content=""/>}
        <script type="application/ld+json" data-react-helmet="true" data-rh="true">
            {
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Simon G. Kupisz",
                    "alternateName": ["Szymon Kupisz", "Simon Kupisz"],
                    "disambiguatingDescription": "A Polish software developer",
                    "knowsAbout": ["Programming", "Web apps development", "Algorithms"],
                    "jobTitle": "Programmer",
                    "url": "https://skupisz.netlify.app",
                    "birthDate": "2003-09-16",
                    "birthPlace": "Warsaw, Poland",
                    "memberOf": "https://hackclub.pl",
                    "nationality": "Poland",
                    "description": "Since he can remember, Simon is a big passionate of programming.",
                    "familyName": "Kupisz",
                    "seeks": ["knowledge","fame"],
                    "gender": "male",
                    "givenName": ["Simon", "Szymon"],
                    "knowsLanguage": ["English", "Polish"],
                    "image": AuthorImage
                })
            }
        </script>
    </Helmet>
};

export default HeadTag;