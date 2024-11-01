import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../../Utilities/addToDb';

const BookDetails = () => {
    const param = useParams();
    const data = useLoaderData();
    const id = Number(param.bookId);
    const selectedData = data.find(d => d.bookId === id);
    const { bookName, author, tags, rating, image, bookId, review, totalPages, publisher, yearOfPublishing } = selectedData;

    const addToReadList = (id) => {
        /** 
         * 1. Understand what to store or save:=> Book Id
         * 2. Where to store the book:=> database(advance), use state(we are use)
         * 3. structure of save book like array, list, collection
         * 4. check:=> if the adding book is already exist in the read list then ignore it and if not then add the book in the read list
        */
        addToStoredReadList(id);
    }

    const addToWishlistList = (id) => {
        addToStoredWishList(id);
    }

    return (
        <div>
            <div className='border-2 rounded-2xl md:flex justify-around playfair-display gap-11 mb-10 shadow-lg p-3'>

                <div className='md:w-1/2 bg-[#F3F3F3] flex justify-center p-10 mb-6 rounded-xl'>
                    <img src={image} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='mt-4 font-bold text-3xl text-[#131313]'>{bookName}</h2>
                    <p className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>By : {author}</p>
                    <div className="divider"></div>
                    <p className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>Fiction</p>
                    <div className="divider"></div>
                    <p className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'><span className='font-bold'>Fiction: </span>{review}</p>
                    <p>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC] mr-5'><span className='font-bold'>Tags </span></button>

                        {
                            tags.map(tag => <button key={Math.random()} className='bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-2xl mr-3 font-medium text-[1rem] work-sans'>#{tag}</button>)
                        }
                    </p>
                    <div className="divider"></div>
                    <div className='flex gap-20 items-center'>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>Number of Pages: </button>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC] ml-1'><span className='font-bold'>{totalPages} </span></button>

                    </div>
                    <div className='flex gap-36 items-center'>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>Publisher: </button>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'><span className='font-bold'>{publisher} </span></button>

                    </div>
                    <div className='flex gap-20 items-center'>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>Year of Publishing: </button>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'><span className='font-bold'>{yearOfPublishing} </span></button>

                    </div>
                    <div className='flex gap-40 items-center mb-8'>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>Rating: </button>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC] ml-3'><span className='font-bold'>{rating} </span></button>
                    </div>
                    <button onClick={() => addToReadList(bookId)} className="work-sans rounded-lg py-4 px-5 border border-[#1313134D] font-semibold mr-4">Mark As Read</button>
                    <button onClick={() => addToWishlistList(bookId)} className="work-sans rounded-lg py-4 px-5 bg-[#59C6D2] text-white font-semibold">Add Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;