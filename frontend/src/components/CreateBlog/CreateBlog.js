import React from 'react';
import './CreateBlog.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function CreateBlog() {
    return (
        <>
            <div className="createblog-container">
                <div className="createblog">
                    <div>
                        <label htmlFor="uploadImage">Upload Image : </label>
                        <input type="file" accept="image/*" id='uploadImage'/>
                    </div>
                    <div>
                        <textarea type="text" id='createblog-title' placeholder='Title' />
                    </div>
                    <div>
                        <textarea name="description" id="createblog-description" placeholder='Type here...'></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}
