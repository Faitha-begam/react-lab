import { useNavigate } from "react-router-dom";
import news from "../data/NewsData";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDF6ED]">
      <nav className="bg-[#66785F] text-white px-10 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">NewsPulse</h1>

        <ul className="flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-[#DCCFC0] transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-[#DCCFC0] transition">
            Latest News
          </li>

          <li className="cursor-pointer hover:text-[#DCCFC0] transition">
            Reviews
          </li>

          <li className="cursor-pointer hover:text-[#DCCFC0] transition">
            Contact
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-[#66785F]">
          Welcome to NewsPulse
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest trending news from Tamil Nadu, India,
          and around the world.
        </p>
      </section>

      {/* Latest News */}
      <section className="px-10 pb-16">
        <h2 className="text-3xl font-bold text-[#66785F] mb-8">
          Trending News
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/news/${item.id}`)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <span className="inline-block bg-[#A1BC98] text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.date}
                </p>

                <button className="mt-6 w-full bg-[#66785F] text-white py-2 rounded-lg hover:bg-[#55684f] transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="px-10 pb-16">
        <h2 className="text-3xl font-bold text-[#66785F] mb-8">
          Readers' Reviews
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</p>

            <p className="text-gray-700 mt-2">
              The Jana Nayagan release article was informative and covered all
              the important highlights. Looking forward to more entertainment
              news!
            </p>
          </div>

          <hr />

          <div>
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐</p>

            <p className="text-gray-700 mt-2">
              The Anti-NEET protest article provided a balanced overview and was
              easy to understand.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#66785F] text-white py-6 text-center">
        <h2 className="text-xl font-semibold">NewsPulse</h2>

        <p className="mt-2 text-sm">
          Bringing you the latest updates from Tamil Nadu and India.
        </p>

        <p className="mt-4 text-xs">
          © 2026 NewsPulse. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;