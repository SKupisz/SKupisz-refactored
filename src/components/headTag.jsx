import React from "react";
import { Helmet } from "react-helmet";

const HeadTag = ({siteName, description="Simon George Kupisz's site", robotsTags="all", keywords=""}) => {
    return <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description}/>
        <meta name="robots" content={robotsTags}/>
        {keywords.length > 0 ? <meta name="keywords" content={keywords}/>: <></>}
    </Helmet>
};

export default HeadTag;