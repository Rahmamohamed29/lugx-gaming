import { useState } from "react";
import GameCard from "./GameCard";
import { shopGamesData } from "../data/siteData";
import bannerBgImg from "../assets/images/banner-bg.jpg";

export default function ShopPage({ onNavigate, onSelectGame }) {
  const [activeFilter, setActiveFilter] = useState("SHOW ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const filters = ["SHOW ALL", "ADVENTURE", "STRATEGY", "RACING"];

  const filteredGames = shopGamesData.filter((game) => {
    if (activeFilter === "SHOW ALL") return true;
    return game.tag === activeFilter;
  });

  return (
    <div>
      <section
        className="bg-blue-500 text-white pt-28 pb-24 px-6 rounded-b-[150px] text-center"
        style={{
          backgroundImage: `url(${bannerBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-3">
          OUR SHOP
        </h1>
        <p className="text-sm text-white/90">
          <button
            onClick={() => onNavigate("home")}
            className="hover:underline "
          >
            Home
          </button>{" "}
          &gt; Our Shop
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase transition duration-300  ${
                activeFilter === filter
                  ? "bg-rose-400 text-white"
                  : "bg-gray-100 text-gray-800 hover:text-rose-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} onSelectGame={onSelectGame} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-16">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white font-bold text-sm transition "
          >
            &lt;
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full font-bold text-sm transition  ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white font-bold text-sm transition "
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
}
