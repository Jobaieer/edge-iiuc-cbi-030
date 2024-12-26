import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const fetchBooks = async () => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = await response.json();
      const { docs } = data;

      const booksWithDetails = docs.map((book) => ({
        id: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "U/A",
        categories: book.subject ? book.subject.join(", ") : "U/C",
        coverImg: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150?text=No+Cover",
        description: book.first_sentence
          ? book.first_sentence[0]
          : "No description available.",
        ratings: book.ratings_average ? book.ratings_average.toFixed(1) : "0.0",
        publishYear: book.first_publish_year || "N/A",
        hardCopy: book.availability?.physical || false,
        eBook: book.availability?.is_ebook || false,
        status: book.availability?.status || "Unknown",
      }));

      setBooks(booksWithDetails);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookDetails = async (bookKey) => {
    try {
      const response = await fetch(`https://openlibrary.org${bookKey}.json`);
      const data = await response.json();
      setSelectedBook(data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  // Handle favorite toggle
  const handleFavorite = (book) => {
    const isFavorite = favorites.some((fav) => fav.id === book.id);
    let updatedFavorites = [...favorites];

    if (isFavorite) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== book.id);
    } else {
      updatedFavorites.push(book);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Search</h1>
      <form onSubmit={handleSearch} className="flex items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <span className="loading loading-bars loading-lg text-[#F34040]"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
          <div className="lg:grid lg:grid-cols-[332px_repeat(6,_1fr)] lg:font-medium hidden">
            <div>Title</div>
            <div>Ratings</div>
            <div>Category</div>
            <div>Availability</div>
            <div>Status</div>
          </div>
          {books.map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-md p-4 flex flex-col lg:grid lg:grid-cols-[300px_repeat(6,_1fr)] gap-4 bg-white items-center cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <img
                  src={book.coverImg}
                  alt={`${book.title} cover`}
                  className="w-auto lg:w-10 lg:h-auto object-cover mb-4 rounded-[10px] lg:rounded-[5px]"
                />
                <div className="text-center lg:text-left">
                  <h3 className="font-normal text-lg">{book.title}</h3>
                  <p className="text-gray-600 text-base">
                    {book.author.split(",")[0]}, {book.publishYear}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                {book.ratings}
                <span className="text-gray-400 text-[12px]">/5</span>
              </p>
              <p className="text-gray-600">{book.categories.split(",")[0]}</p>
              <p className="text-gray-600">
                <p className="text-gray-600 mb-1 flex items-center gap-2">
                  {book.hardCopy ? (
                    <IoIosCheckmarkCircle className="text-green-500" />
                  ) : (
                    <FaCircleXmark />
                  )}{" "}
                  Hard Copy
                </p>
                <p className="text-gray-600 mb-1 flex items-center gap-2">
                  {book.eBook ? <IoIosCheckmarkCircle /> : <FaCircleXmark />}{" "}
                  E-Book
                </p>
              </p>
              <p className="text-white bg-[#42BB4E] text-center rounded-md text-[14px] w-20">
                {book.status === "in-shelf" ? "In Shelf" : "Borrowed"}
              </p>
              {/* <p className="text-gray-600">
                Description:{" "}
                {book.description.length > 50
                  ? book.description.slice(0, 40) + "..."
                  : book.description}
              </p> */}

              {/* Favorite heart button */}
              <button onClick={() => handleFavorite(book)} className="mt-2">
                {favorites.some((fav) => fav.id === book.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-500" />
                )}
              </button>

              <button
                onClick={() => fetchBookDetails(book.id)}
                className="px-5 w-auto h-10 bg-white text-[#F76B56] border border-[#F76B56] rounded-md hover:bg-[#F76B56] hover:text-white"
              >
                Preview
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-3/4 max-w-xl">
            <h2 className="text-xl font-bold mb-4">{selectedBook.title}</h2>
            <p>
              <strong>Author:</strong>{" "}
              {selectedBook.authors?.map((author) => author.name).join(", ")}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {selectedBook.description || "No description available."}
            </p>
            <button
              onClick={() => setSelectedBook(null)}
              className="px-4 py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
