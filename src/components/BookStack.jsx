
import { useRef } from "react";
import DownloadButton from "./DownloadButton.jsx";
const bookColors = [
  "#604258",
  "#D8B9B5",
  "#926B7D",
  "#A68C9A",
  "#493244",
];

function BookStack({ books }) {

const artworkRef = useRef(null);

async function downloadImage() {
  if (!artworkRef.current) return;

  try {
    const dataUrl = await toPng(artworkRef.current, {
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = "my-bookstack.png";
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Download failed:", error);
  }
}


  return (
    <section className="min-h-screen bg-[#30283F] px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#FFF0E6]">
          Your Book Stack
        </h2>

        <p className="text-[#E6C9CB] mt-3">
          Five stories, one little stack.
        </p>

        <div ref={artworkRef}
        className="mt-10 bg-[#FFF0E6] rounded-2xl overflow-hidden p-8 sm:p-12">
          <div className="flex flex-col items-center gap-1">

            {books.map((book, index) => (
              <div
                key={book.key}
                className="flex items-center w-full max-w-sm min-h-16 rounded-lg shadow-sm border-l-8 border-black/15 px-4 py-3"
                style={{
                  backgroundColor: bookColors[index % bookColors.length],
                  transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`
                }}
              >
                <div className="w-full text-center">
                  <p className={`font-semibold text-sm ${
                    index === 1
                      ? "text-[#30283F]"
                      : "text-[#FFF0E6]"
                  }`}>
                    {book.title}
                  </p>

                  <p className={`text-xs mt-1 ${
                    index === 1
                      ? "text-[#30283F]"
                      : "text-[#FFF0E6]"
                  }`}>
                    {book.author_name?.join(", ") || "Unknown Author"}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <p className="mt-8 text-[#604258] text-sm tracking-wide">
            FIVE STORIES, ONE LITTLE STACK.
          </p>
        </div>
        <DownloadButton artworkRef={artworkRef} />
  
      </div>
    </section>
  );
}

export default BookStack;