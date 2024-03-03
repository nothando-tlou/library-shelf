import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [books , setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend API
    axios.get('http://localhost:3001/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Library Shelf</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}by {book.author}</li>

        ))}
      </ul>
    </div>
  )


}

export default App;