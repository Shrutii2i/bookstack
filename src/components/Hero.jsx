function Hero({onStart, onSurprise}) {


    return (
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-6 py-12">
            <p className="text-[#E9B3A7] text-sm tracking-[0.2em] uppercase mb-5">
                A little something for book lovers
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFF0E6] max-w-3xl">
                Your favorite stories, all in one stack.
            </h1>

            <p className="text-[#E6C9CB] mt-6 max-w-lg">
                Pick five books you love, personalize your stack,
                and share it with someone special.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                    type="button"
                    onClick={onStart}
                    className="bg-[#D99591] text-[#30283F] font-semibold px-8 py-3 rounded-full hover:bg-[#E9B3A7] transition-colors cursor-pointer"
                >
                    Build My Own Stack
                </button>

                <button
                    type="button"
                    onClick={onSurprise}
                    className="border border-[#D99591] text-[#FFF0E6] font-semibold px-8 py-3 rounded-full hover:bg-[#D99591]/20 transition-colors cursor-pointer"
                >
                    Surprise Me ✨
                </button>
            </div>
        </section>

    );

}

export default Hero;