export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center pt-10 pb-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-7xl bg-gradient-to-r from-[#0a1f44] via-[#1f3b70] to-[#d97706] rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 animate-gradient">
            Simplify Your Phone Search!
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover the perfect smartphone for your needs with our intuitive search and comparison tools.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-[#0a1f44] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md">
            Explore Phones
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0a1f44] transition-colors duration-200">
            Compare Now
          </button>
        </div>
      </div>
    </section>
  );
}
