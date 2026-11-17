import StyleSelector from "./StyleSelector.jsx";
import BookStack from "./BookStack.jsx";
import { useState } from 'react';

function BookSearch() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedBooks, setSelectedBooks] = useState([]);

    const [showStack, setShowStack] = useState(false);





    async function searchBooks() {
  if (!query.trim()) return;

  setLoading(true);

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&fields=key,title,author_name&limit=10`
    );

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const data = await response.json();
    setBooks(data.docs);
  } catch (error) {
    console.error("Error fetching books:", error);
  } finally {
    setLoading(false);
  }
}


function addBook(book) {
    console.log("Book clicked:", book.title);
  setSelectedBooks((currentBooks) => {
    // Don't add the same book twice
    if (currentBooks.some((b) => b.key === book.key)) {
      return currentBooks;
    }

    // Maximum of five books
    if (currentBooks.length >= 5) {
      return currentBooks;
    }

    return [...currentBooks, book];
  });
}

function removeBook(bookKey) {
  setSelectedBooks((currentBooks) =>
    currentBooks.filter((book) => book.key !== bookKey)
  );
}

if (showStack) {
  return <StyleSelector books={selectedBooks} />;
}


    return (
        <section className="min-h-screen bg-[#30283F] px-6 py-12">
            <div className="max-w-2xl mx-auto text-center">

                <h2 className="text-3xl font-bold text-[#FFF0E6]">
                    Build Your Book Stack
                </h2>

                <p className="text-[#E6C9CB] mt-3">
                    Search for five books you'd love to share.
                </p>

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a book..."
                    className="w-full mt-8 p-4 rounded-xl bg-[#FFF0E6] text-[#30283F] outline-none"
                />

                <button
                    onClick={searchBooks}
                    disabled={loading}
                    className="mt-4 bg-[#D99591] text-[#30283F] px-6 py-3 rounded-full cursor-pointer disabled:opacity-60"
                >
                    {loading ? "Searching..." : "Search Books"}
                </button>
               
            {/*Selected books counter */}

                <p className="text-[#E9B3A7] mt-6">
                    {selectedBooks.length} / 5 books selected
                </p>


                {/*Search results*/}
                <div className="mt-8 space-y-3">
  {books.map((book) => (
    <div
      key={book.key}
      className="bg-[#45394F] text-[#FFF0E6] p-4 rounded-xl text-left"
    >
      <h3 className="font-semibold">{book.title}</h3>

      <p className="text-[#E6C9CB] text-sm">
        {book.author_name?.join(", ") || "Unknown Author"}
      </p>

      {/* Add to Stack button */}
      <button
        onClick={() => addBook(book)}
        disabled={
          selectedBooks.some((b) => b.key === book.key) ||
          selectedBooks.length >= 5
        }
        className="mt-3 bg-[#D99591] text-[#30283F] px-4 py-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {selectedBooks.some((b) => b.key === book.key)
          ? "Added ✓"
          : "Add to Stack"}
      </button>
    </div>
  ))}
</div>


<div className="mt-10 text-left">
  <h3 className="text-xl font-semibold text-[#FFF0E6] mb-4">
    Your Selected Books
  </h3>

  {selectedBooks.map((book) => (
    <div
      key={book.key}
      className="flex items-center justify-between gap-4 bg-[#45394F] p-4 rounded-xl mb-3"
    >
      <p className="text-[#FFF0E6]">{book.title}</p>

      <button
        onClick={() => removeBook(book.key)}
        className="text-[#E9B3A7] cursor-pointer"
      >
        Remove
      </button>
    </div>
  ))}
</div>

{/* Create Stack button */}
<button
onClick={() => setShowStack(true)}
  disabled={selectedBooks.length !== 5}
  className="mt-8 bg-[#D99591] text-[#30283F] font-semibold px-8 py-3 rounded-full cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
>
  {selectedBooks.length === 5
    ? "Create My Stack →"
    : `Select ${5 - selectedBooks.length} more books`}
</button>

            </div>
        </section>
    );
}

export default BookSearch;