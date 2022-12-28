import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import './BlogPage.css';

export default function BlogPage() {
    return (
        <>
            <Navbar />

            <div className='blogpage-container'>
                <div className="blogpage-image">
                    <img src="https://wallpapercave.com/wp/wp7658910.jpg" alt="" />
                </div>
                <div className="blogpage-title">
                    <h2>Parth Tyagi</h2>
                    <div className="blogpage-edit-delete">
                        <button>
                            <FiEdit />
                        </button>
                        <button>
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
                <div className="blogpage-about">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio vel ex fugiat, autem blanditiis quae,
                    optio cupiditate repellendus quas repudiandae voluptates, nostrum ipsam doloremque quia qui reprehenderit.
                    Deleniti, dolorum suscipit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laudantium quos, aspernatur nostrum neque? Beatae, molestiae quia ipsum est ad impedit recusandae voluptatem! Cum velit earum autem libero quaerat.
                    Quisquam harum saepe modi totam minus obcaecati veritatis ratione. Quam dicta eaque temporibus recusandae ducimus aspernatur, doloribus magnam perferendis officia tempore, quisquam reprehenderit. Expedita architecto ipsum adipisci fugit magni non!
                    Non nihil veniam ab! Quasi minima assumenda laboriosam dolorem! A voluptates totam perspiciatis reprehenderit illum soluta consequatur dolor expedita, ratione enim, ducimus ex labore saepe explicabo ut id aspernatur atque.
                    Nam suscipit delectus eos perferendis quasi quam ullam sed dolores ex, atque et debitis doloremque? Vel iste beatae laborum, tenetur nostrum, qui ullam, magni expedita tempora quam reiciendis ut reprehenderit!
                    Laborum itaque iste sed rem dolores rerum eius, minima corporis, qui doloremque esse magni aut modi? Ab, sint modi asperiores eos saepe aliquam est magni ipsam placeat voluptas non voluptate!

                </div>
                <div className="blogpage-author">
                    <div>Author : <span>Parth Tyagi</span></div>
                </div>
            </div>

            <Footer />
        </>
    );
}
