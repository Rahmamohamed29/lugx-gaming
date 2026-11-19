import { useState } from "react";
import Featured from "./Featured";
import {
  featuresData,
  trendingGamesData,
  mostPlayedData,
  categoriesData,
} from "../data/siteData";

import bannerImg from "../assets/images/banner-image.jpg";
import bannerBgImg from "../assets/images/banner-bg.jpg";
import ctaBgImg from "../assets/images/cta-bg.jpg";

export default function HomePage({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onNavigate("shop", { search: searchTerm });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section
        className="text-white pt-14 pb-48 rounded-b-[150px] relative overflow-hidden bg-blue-500"
        style={{
          backgroundImage: `url(${bannerBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h6 className="uppercase tracking-wider font-semibold text-base">
              WELCOME TO LUGX
            </h6>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
              BEST GAMING SITE EVER!
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
              gaming websites. You can download and use this layout for
              commercial purposes. Please tell your friends about TemplateMo.
            </p>

            <form
              onSubmit={handleSearch}
              className="relative max-w-md mx-auto lg:mx-0 pt-4 flex items-center"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type Something"
                className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-full py-4 pl-6 pr-36 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-7 py-4 rounded-full transition duration-300 "
              >
                SEARCH NOW
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <img
                src={bannerImg}
                alt="Hero Character"
                className="w-full h-[430px] object-cover rounded-[25px] shadow-2xl"
              />
              <span className="absolute top-5 right-5 bg-blue-500 text-white font-extrabold text-xl px-5 py-1.5 rounded-full">
                $22
              </span>
              <span className="absolute -bottom-6 -left-6 bg-rose-400 text-white font-extrabold text-2xl w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                -40%
              </span>
            </div>
          </div>
        </div>
      </section>

      <Featured items={featuresData} />
      {/* 3. TRENDING GAMES */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <span className="text-rose-400 uppercase font-bold text-xs tracking-wider">
              TRENDING
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
              Trending Games
            </h2>
          </div>
          <button
            onClick={() => onNavigate("shop")}
            className="mt-4 sm:mt-0 bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-6 py-3 rounded-full transition duration-300 cursor-pointer"
          >
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingGamesData.map((game) => (
            <div
              key={game.id}
              className="bg-gray-100 rounded-[25px] overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-[210px] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-blue-500 text-white rounded-2xl px-3.5 py-2 flex flex-col items-end leading-tight shadow-sm">
                  {game.oldPrice && (
                    <span className="text-xs text-white/80 line-through font-semibold">
                      ${game.oldPrice}
                    </span>
                  )}
                  <span className="text-sm font-extrabold">${game.price}</span>
                </div>
              </div>

              <div className="p-5 flex justify-between items-center gap-3">
                <div className="text-left">
                  <span className="text-gray-400 text-xs block">
                    {game.category}
                  </span>
                  <h4 className="font-bold text-gray-900 text-base mt-0.5">
                    {game.title}
                  </h4>
                </div>

                <button
                  onClick={() => onNavigate("details", { gameId: game.id })}
                  aria-label={`Add ${game.title} to cart`}
                  className="w-10 h-10 shrink-0 bg-rose-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition duration-300 cursor-pointer shadow-sm"
                >
                  🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOST PLAYED GAMES */}
      <section className="bg-gray-100 py-20 rounded-[150px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-rose-400 uppercase font-bold text-xs tracking-wider">
              TOP GAMES
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
              Most Played
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {mostPlayedData.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-[25px] overflow-hidden shadow-sm flex flex-col items-center text-center group hover:shadow-md transition duration-300"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-[180px] object-cover rounded-[20px] mb-4"
                />
                <span className="text-gray-400 text-xs">{game.genre}</span>
                <h5 className="font-bold text-gray-900 text-sm mt-1 mb-4">
                  {game.title}
                </h5>
                <button
                  onClick={() => onNavigate("shop")}
                  className="bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-4 py-2 rounded-full transition duration-300  mt-auto"
                >
                  EXPLORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-rose-400 uppercase font-bold text-xs tracking-wider">
            CATEGORIES
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
            Top Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categoriesData.map((cat) => (
            <div
              key={cat.id}
              className="bg-blue-500 rounded-[25px] p-6 text-center text-white flex flex-col items-center shadow-md hover:bg-blue-600 transition duration-300 "
            >
              <h4 className="font-bold text-lg uppercase mb-4 tracking-wide">
                {cat.name}
              </h4>
              <div className="w-full h-[150px] rounded-[20px] overflow-hidden bg-white">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION (OUR SHOP + NEWSLETTER OVERLAPPING) */}
      <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-[420px] bg-gray-100 p-10 rounded-[25px] shadow-lg z-20 mb-8 lg:mb-0 lg:-mr-12 text-center lg:text-left">
            <span className="text-rose-400 uppercase font-bold text-xs tracking-wider">
              OUR SHOP
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3 mb-5 leading-snug">
              Go Pre-Order Buy &amp; Get Best{" "}
              <span className="text-blue-500">Prices</span> For You!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
              incididunt.
            </p>
            <button
              onClick={() => onNavigate("shop")}
              className="bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-7 py-3.5 rounded-full transition duration-300 "
            >
              SHOP NOW
            </button>
          </div>

          <div className="w-full lg:w-[500px] z-10 my-4 lg:my-0">
            <img
              src={ctaBgImg}
              alt="Shop Background"
              className="w-full h-[480px] object-cover rounded-[25px] shadow-md"
            />
          </div>

          <div className="w-full lg:w-[420px] bg-gray-100 p-10 rounded-[25px] shadow-lg z-20 mt-8 lg:mt-0 lg:-ml-12 text-center lg:text-left">
            <span className="text-rose-400 uppercase font-bold text-xs tracking-wider">
              NEWSLETTER
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3 mb-6 leading-snug">
              Get Up To $100 Off Just Buy{" "}
              <span className="text-blue-500">Subscribe</span> Newsletter!
            </h2>

            <form
              onSubmit={handleSubscribe}
              className="relative max-w-md mx-auto lg:mx-0 flex items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email..."
                className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-full py-3.5 pl-6 pr-32 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-5 py-3.5 rounded-full transition duration-300 "
              >
                SUBSCRIBE NOW
              </button>
            </form>

            {subscribed && (
              <p className="text-green-600 text-sm font-medium mt-3">
                Subscribed successfully!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
