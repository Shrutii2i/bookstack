import { useRef } from "react";
import DownloadButton from "./DownloadButton.jsx";
function EReader({ books }) {

  const artworkRef = useRef(null);
  return (
    <section className="min-h-screen bg-[#30283F] px-6 py-12">
      <div 
      ref={artworkRef}
     className="max-w-2xl mx-auto">

        {/* Device frame */}
        <div 
       
        className="bg-[#17141D] rounded-[32px] p-4 shadow-2xl border-4 border-[#493F50] ">

          {/* E-reader screen */}
          <div className="bg-[#F2EDE3] rounded-lg px-8 sm:px-12 py-8 min-h-[380px] text-[#30283F]">

            <p className="text-center text-xs tracking-[0.3em]">
              MY LITTLE LIBRARY
            </p>

            <h2 className="text-center text-2xl font-serif mt-5">
              Five Favorite Reads
            </h2>

            <div className="border-b border-[#A68C9A] my-6" />

            {books.map((book, index) => (
              <div
                key={book.key}
                className="flex gap-3 mb-6 items-start"
              >
                <span className="font-serif text-xl text-[#926B7D]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-serif font-semibold text-sm">
                    {book.title}
                  </p>

                  <p className="text-xs text-[#604258] mt-1">
                    {book.author_name?.join(", ") || "Unknown Author"}
                  </p>
                </div>
              </div>
            ))}

            <p className="text-center text-xs mt-8 text-[#926B7D]">
              A collection of stories worth keeping.
            </p>

          </div>

          {/* Device bottom */}
          <div className="flex justify-center mt-5 mb-1">
            <div className="w-12 h-1 rounded-full bg-[#6D6373]" />
          </div>
            
        </div>
         <div className="flex justify-center mt-6">
  <DownloadButton artworkRef={artworkRef} />
</div>
      </div>
    </section>
  );
}

export default EReader;