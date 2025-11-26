import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import PageBlog from '../container/BlogGrid/PageBlog';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const BlogGrid = () => {
    return (
        <React.Fragment>
            <SEO title="Ogha Corp || Blog" />
            <Header />
            <Breadcrumb 
                image="images/aed-photo/shots/trail3.jpg"
                title="Newpaper Articles, Blogs, Stories and more."
                content="Home"
                contentTwo="Blog"
            />
            <PageBlog />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default BlogGrid;
