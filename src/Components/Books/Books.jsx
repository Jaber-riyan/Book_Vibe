import React, { useEffect, useState } from 'react';
import Book from './Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('booksData.json');
            const data = await res.json();
            setBooks(data);
        }
        fetchData();
    }, [])



    return (
        <div>
            <div>
                <h2 className='font-bold text-4xl text-[#131313] text-center mb-9'>Books</h2>
                <div className='grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-5 mb-10'>

                    {
                        books.map((book) => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;