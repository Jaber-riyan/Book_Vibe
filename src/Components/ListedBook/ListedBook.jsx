import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList/ReadList';
import WishList from './WishList/WishList'
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from '../../Utilities/addToDb';

const ListedBook = () => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);

    const books = useLoaderData();

    useEffect(() => {
        const storedReadDataList = getStoredReadList();
        const storedWishDataList = getStoredWishList();
        // console.log("parse",storedReadDataList);
        // console.log("book",books);
        const findReadBooksList = books.filter(book => storedReadDataList.includes(book.bookId));
        setReadBooks(findReadBooksList);
        const findWishBooksList = books.filter(book => storedWishDataList.includes(book.bookId));
        setWishBooks(findWishBooksList);
    }, [])

    return (
        <div className='work-sans'>
            <div className='bg-[#1313130D] py-7 rounded-xl mb-8'>
                <h2 className='text-[#131313] font-bold text-3xl text-center'>Books</h2>
            </div>
            <div className='flex justify-center mb-12'>
                <button className="mr-5 rounded-lg py-4 px-5 bg-[#23BE0A] text-white font-semibold">Sort By</button>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            readBooks.map(book => <ReadList key={book.bookId} book={book}></ReadList>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            wishBooks.map(book => <WishList  key={book.bookId} book={book}></WishList>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBook;