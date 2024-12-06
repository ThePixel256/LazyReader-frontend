import { getAllBooks } from '../../api/BookRequest';
import { BookCard } from './BookCard';
import { useState, useEffect } from 'react';

export function BookList() {
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            const res = await getAllBooks();
            console.log(res);
            setBooks(res.data);
        }
        loadBooks();
    }, []);

    return (
        <div>
            {books.map((book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
}
