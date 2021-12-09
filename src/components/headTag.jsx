import React from "react";
import { Helmet } from "react-helmet";

const HeadTag = ({siteName, description="Simon George Kupisz's site", robotsTags="all"}) => {
    return <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description}/>
        <meta name="robots" content={robotsTags}/>
    </Helmet>
};

export default HeadTag;