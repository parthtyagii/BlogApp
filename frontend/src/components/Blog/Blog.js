import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';
import { GiSandsOfTime } from 'react-icons/gi';
import './Blog.css';

export default function Blog() {
    return (
        <div className="blog">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_kCrE0JwBLF54gd_-ooF8kM-Gk-nZrKIOw&usqp=CAU"
                alt="image" />
            <div className="blog-title">Travel</div>
            <span className="blog-about">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet assumenda repellat eaque natus sequi
                maio res, autem ipsum possimus alias adipisci corporis aut fugiat officiis numquam velit provident quis
                placeat fugit!
            </span>
            <div className="blog-interaction">
                <span><GiSandsOfTime /> December 27, 2022</span>
                <button>
                    <AiFillHeart className='blog-icons' /> 123
                </button>
                <button>
                    <AiOutlineComment className='blog-icons' />123
                </button>

            </div>
        </div>
    );
}

