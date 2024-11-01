import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList/ReadList';
import WishList from './WishList/WishList'
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from '../../Utilities/addToDb';
import { toast } from 'react-toastify';

const ListedBook = () => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);
    const [sort, setSort] = useState();
    const [pathOfList, setPathOfList] = useState('read books');

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


    const handleSort = sortType => {
        setSort(sortType);
        if (pathOfList === 'read books') {
            if (sortType === 'Rating') {
                const newSortedReadList = [...readBooks].sort((a, b) => b.rating - a.rating);
                setReadBooks(newSortedReadList);
                toast.success('Sorted Read List By "Rating"');
            }
            else if (sortType === 'Number of pages') {
                const newSortedReadList = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
                setReadBooks(newSortedReadList);
                toast.success('Sorted Read List By "Number of pages"');

            }
            else if (sortType === 'Publisher year') {
                const newSortedReadList = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                setReadBooks(newSortedReadList);
                toast.success('Sorted Read List By "Publisher year"');
            }
        }
        else if (pathOfList === 'wishlist books') {
            if (sortType === 'Rating') {
                const newSortedReadList = [...wishBooks].sort((a, b) => b.rating - a.rating);
                setWishBooks(newSortedReadList);
                toast.success('Sorted Wish List By "Rating"');
            }
            else if (sortType === 'Number of pages') {
                const newSortedReadList = [...wishBooks].sort((a, b) => b.totalPages - a.totalPages);
                setWishBooks(newSortedReadList);
                toast.success('Sorted Wish List By "Number of pages"');
            }
            else if (sortType === 'Publisher year') {
                const newSortedReadList = [...wishBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                setWishBooks(newSortedReadList);
                toast.success('Sorted Read List By "Publisher year"');
            }
        }
    }

    const handlePathList = path => {
        setPathOfList(path);
    }

    return (
        <div className='work-sans'>
            <div className='bg-[#1313130D] py-7 rounded-xl mb-8'>
                <h2 className='text-[#131313] font-bold text-3xl text-center'>Books</h2>
            </div>
            <div className='flex justify-center mb-12'>
                <details className="dropdown">
                    <summary className="mr-5 rounded-lg py-4 px-10 bg-[#23BE0A] text-white font-semibold cursor-pointer">
                        {
                            sort ? `${sort}` : 'Sort By'
                        }
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-44 p-2 shadow bg-[#22be0ab9] text-white font-bold tex-xl">
                        <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                        <li onClick={() => handleSort('Number of pages')}><a>
                            Number of pages</a></li>
                        <li onClick={() => handleSort('Publisher year')}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab><h1 onClick={() => handlePathList('read books')} className='text-xl font-semibold'>
                            {
                                pathOfList === 'read books' ? '* ' : ''
                            }
                            Read Books</h1></Tab>
                        <Tab><h1 onClick={() => handlePathList('wishlist books')} className='text-xl font-semibold'>
                            {
                                pathOfList === 'wishlist books' ? '* ' : ''
                            }
                            Wishlist Books</h1></Tab>
                    </TabList>

                    <TabPanel>
                        {
                            readBooks.map(book => <ReadList key={book.bookId} book={book}></ReadList>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            wishBooks.map(book => <WishList key={book.bookId} book={book}></WishList>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBook;