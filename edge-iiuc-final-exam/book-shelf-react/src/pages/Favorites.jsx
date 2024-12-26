import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  //  Load favorite books from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (bookId) => {
    const updatedFavorites = favorites.filter((book) => book.id !== bookId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Books</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
          {favorites.map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-md p-4 bg-white flex flex-col lg:flex-row gap-4 items-center "
            >
              <img
                src={book.coverImg}
                alt={`${book.title} cover`}
                className="w-32 h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="font-bold text-lg text-center mb-2">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Category:</strong> {book.categories}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Ratings:</strong> {book.ratings}/5
              </p>
              <button
                onClick={() => removeFavorite(book.id)}
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No favorite books added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
