import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { MainContainer } from "../../styled/main.jsx";
import { BlogMainContainer, BlogMainHeader, BlogLinkContainer,
    BlogLinkHeader, BlogLinkDesc } from "../../styled/blog.jsx";

import Navbar from "../navbar.jsx";

import blogData from "../../data/blog.js";

const Blog = () => {

    const [phase, setPhase] = useState(-2);
    const [currentOpening, setCurrentOpening] = useState(-1);

    useEffect(() => {
        const currentAddress = window.location.pathname.split("/");
        if(currentAddress.length <= 3) setPhase(-1);
        else if(currentAddress.length <= 5){
            if(currentAddress[2].length > 0){
                const indOfTheArticle = blogData["menuData"].findIndex((elem) => {return elem["address"] === currentAddress[2];});
                if(indOfTheArticle === -1) setPhase(-3);
                else setPhase(indOfTheArticle);
            }
        }
    },[window.location.pathname]);

    useEffect(() => {
        if(phase === -1){
            setCurrentOpening(-1);
            setTimeout(() => {
                for(let i = 0 ; i <= blogData["menuData"].length; i++){
                    setTimeout(() => setCurrentOpening(i), 200);
                }
            }, 200);
        }
    }, [phase]);

    return <>
    <Navbar/>
    <MainContainer className="block-center" iswithmainmenu="true">
        <BlogMainContainer className="block-center">
            <BlogMainHeader className="block-center">
                {phase === -1 ? "Blog" : phase === -3 ? "The article you are looking for does not exist" : 
                blogData["menuData"][phase]["title"]} 
            </BlogMainHeader>
            {
                phase === -1 ? <>
                {blogData["menuData"].map((elem, ind) => <Link to = {"/blog/"+elem["address"]} key = {"article-link-"+ind}>  
                    <BlogLinkContainer className="block-center" backgroundsrc={elem["background"]}
                        height={ind <= currentOpening ? "40vh" : "0vh"}>
                        <BlogLinkHeader className="block-center">
                            {elem["title"]}
                        </BlogLinkHeader>
                        <BlogLinkDesc className="block-center">
                            {elem["content"]}
                        </BlogLinkDesc>
                    </BlogLinkContainer>
                </Link>)}
                </> : null
            }

        </BlogMainContainer>
    </MainContainer>
    </>
};

export default Blog;