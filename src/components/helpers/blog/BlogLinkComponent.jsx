import React from "react";

import {BlogLinkContainer, BlogLinkHeader, BlogLinkDesc} from "../../../styled/blog";

const BlogLinkComponent = ({elem}) => {

    return <BlogLinkContainer className="block-center" backgroundsrc={elem["background"]}
        height="40vh">
        <BlogLinkHeader className="block-center">
            {elem["title"]}
        </BlogLinkHeader>
        <BlogLinkDesc className="block-center">
            {elem["content"]}
        </BlogLinkDesc>
    </BlogLinkContainer>

};

export default BlogLinkComponent;