import { useRef } from "react";
import DownloadButton from "./DownloadButton.jsx";

const bookColors = [
  "#604258",
  "#D8B9B5",
  "#926B7D",
  "#A68C9A",
  "#493244",
];

function Bookshelf({ books }) {
const artworkRef = useRef(null);

  return (
    <section className="min-h-screen bg-[#30283F] px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#FFF0E6]">
          Your Little Library
        </h2>

        <p className="text-[#E6C9CB] mt-3">
          Five stories worth keeping.
        </p>

        {/* Shareable artwork */}
        <div 
        ref={artworkRef}
        className="mt-10 bg-[#FFF0E6] rounded-2xl overflow-hidden p-6 sm:p-10">

          <h3 className="font-serif text-xl text-[#604258] mb-10">
            The Bookshelf
          </h3>

          {/* Books */}
          <div className="flex items-end justify-center gap-1 sm:gap-2 min-h-[300px]">

            {books.map((book, index) => (
              <div
                key={book.key}
                className="flex-1 min-w-0 max-w-24 rounded-t-sm
                           shadow-md flex items-center justify-center
                           px-1 py-3 border-l-4 border-black/10"
                style={{
                  backgroundColor:
                    bookColors[index % bookColors.length],
                  height: `${210 + (index % 3) * 30}px`,
                  transform: `rotate(${
                    index === 1 ? -2 : index === 3 ? 2 : 0
                  }deg)`,
                }}
              >
                <div
                  className="flex flex-col items-center gap-3"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  <p
                    className={`text-xs font-semibold ${
                      index === 1
                        ? "text-[#30283F]"
                        : "text-[#FFF0E6]"
                    }`}
                  >
                    {book.title}
                  </p>

                  <p
                    className={`text-[10px] ${
                      index === 1
                        ? "text-[#30283F]"
                        : "text-[#FFF0E6]"
                    }`}
                  >
                    {book.author_name?.join(", ") ||
                      "Unknown Author"}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Shelf */}
          <div className="h-4 bg-[#926B7D] rounded-sm shadow-md" />
          <div className="h-3 bg-[#604258] mx-3 rounded-b-md" />

          <p className="mt-10 text-[#604258] text-xs tracking-widest">
            FIVE STORIES, ONE LITTLE SHELF.
          </p>

        </div>

      
       <div className="flex justify-center mt-6">
  <DownloadButton artworkRef={artworkRef} />
</div>

      </div>
    </section>
  );
}

export default Bookshelf;