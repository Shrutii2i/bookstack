import { useRef } from "react";
import DownloadButton from "./DownloadButton.jsx";

function BookReceipt({ books }) {
    const artworkRef = useRef(null);
  return (
    <section className="min-h-screen bg-[#30283F] px-6 py-12">
      <div className="max-w-md mx-auto">

      <div
      ref={artworkRef}
       className="receipt-paper bg-[#FFF0E6] text-[#30283F] p-8 shadow-xl">

          <h2 className="text-center text-xl font-mono font-bold tracking-widest">
            THE BOOK RECEIPT
          </h2>

          <p className="text-center text-sm mt-2">
            Your five favorite stories
          </p>

          <div className="border-t border-dashed border-[#604258] my-6" />

          {books.map((book, index) => (
            <div key={book.key} className="mb-5">
              <p className="font-semibold text-sm">
                {String(index + 1).padStart(2, "0")}.
                {" "}{book.title}
              </p>

              <p className="text-xs text-[#926B7D] mt-1">
                {book.author_name?.join(", ") || "Unknown Author"}
              </p>
            </div>
          ))}

          <div className="border-t border-dashed border-[#604258] my-6" />

          <div className="flex justify-between text-sm font-semibold">
            <span>TOTAL BOOKS</span>
            <span>{books.length}</span>
          </div>

          <p className="text-center text-xs mt-8 tracking-widest">
            THANK YOU FOR READING ♡
          </p>

        </div>
        <div className="flex justify-center mt-6">
  <DownloadButton artworkRef={artworkRef} />
</div>
      </div>
    </section>
  );
}

export default BookReceipt;