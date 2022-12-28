import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BlogList from '../../components/BlogList/BlogList';
import CreateBlog from '../../components/CreateBlog/CreateBlog';


export default function Homepage() {

    const [showHomepage, setShowHomepage] = useState(true);
    const [showCreateBlog, setShowCreateBlog] = useState(false);

    

    return (
        <>
            <Navbar setShowHomepage={setShowHomepage} setShowCreateBlog={setShowCreateBlog} />

            {showHomepage &&
                <BlogList />
            }

            {showCreateBlog &&
                <CreateBlog />
            }

            <Footer />
        </>
    );
}
