import { useState } from "react";
import BookStack from "./BookStack.jsx";
import BookReceipt from "./BookReceipt.jsx";
import EReader from "./EReader.jsx";
import Bookshelf from "./Bookshelf.jsx";

const styles = [
    { id: "classic", name: "Classic Stack", icon: "📚" },
    { id: "receipt", name: "Book Receipt", icon: "🧾" },
    { id: "ereader", name: "E-Reader", icon: "📖" },
    { id: "bookshelf", name: "Bookshelf", icon: "📕" },
];

function StyleSelector({ books }) {
    const [selectedStyle, setSelectedStyle] = useState(null);

    if (selectedStyle) {
  const templates = {
    classic: BookStack,
    receipt: BookReceipt,
    ereader: EReader,
    bookshelf: Bookshelf,
  };

  const SelectedTemplate = templates[selectedStyle];

  return (
    <div>
      <div className="bg-[#30283F] text-center pt-6">
        <button
          onClick={() => setSelectedStyle(null)}
          className="text-[#FFF0E6] hover:text-[#D99591] cursor-pointer"
        >
          ← Back to Styles
        </button>
      </div>

      <SelectedTemplate books={books} />
    </div>
  );
}
    return (
        <section className="min-h-screen bg-[#30283F] px-6 py-12">
            <div className="max-w-3xl mx-auto text-center">

                <h2 className="text-3xl font-bold text-[#FFF0E6]">
                    Choose Your Style
                </h2>

                <p className="mt-3 text-[#E6C9CB]">
                    One stack, four ways to make it yours.
                </p>

                {/* Style selection cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {styles.map((style) => (
                        <button
                            key={style.id}
                            type="button"
                            onClick={() => setSelectedStyle(style.id)}
                            className="bg-[#FFF0E6] rounded-2xl p-8 text-center
               cursor-pointer hover:bg-[#E6C9CB]
               hover:-translate-y-1 transition-all"
                        >
                            <div className="text-4xl mb-4">
                                {style.icon}
                            </div>

                            <h3 className="text-[#30283F] font-semibold">
                                {style.name}
                            </h3>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default StyleSelector;