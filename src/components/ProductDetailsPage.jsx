import { useState } from "react";
import { categoriesData } from "../data/siteData";
import bannerBgImg from "../assets/images/banner-bg.jpg";

import singleGameImg from "../assets/images/single-game.jpg";

export default function ProductDetailsPage({ onNavigate }) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addedMsg, setAddedMsg] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section
        className="bg-blue-500 text-white pt-28 pb-24 px-6 rounded-b-[150px] text-center"
        style={{
          backgroundImage: `url(${bannerBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-3">
          MODERN WARFARE® II
        </h1>
        <p className="text-sm text-white/90">
          <button
            onClick={() => onNavigate("home")}
            className="hover:underline "
          >
            Home
          </button>{" "}
          &gt;{" "}
          <button
            onClick={() => onNavigate("shop")}
            className="hover:underline "
          >
            Shop
          </button>{" "}
          &gt; Assassin Creed
        </p>
      </section>

      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-gray-100">
          {/* Left Image */}
          <div className="lg:col-span-6 bg-gray-100 p-4 rounded-[25px] shadow-sm">
            <img
              src={singleGameImg}
              alt="Modern Warfare II"
              className="w-full h-[460px] object-cover rounded-[20px]"
            />
          </div>

          {/* Right Info */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Call of Duty®: Modern Warfare® II
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-gray-400 line-through font-bold text-lg">
                $28
              </span>
              <span className="text-blue-500 font-extrabold text-2xl">
                $22
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS
              framework. This template is provided by TemplateMo and it is
              suitable for your gaming shop ecommerce websites. Feel free to use
              this for any purpose. Thank you.
            </p>

            {/* Add to Cart */}
            <form
              onSubmit={handleAdd}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 h-12 rounded-full bg-gray-100 border border-gray-200 text-center font-bold text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-7 h-12 rounded-full transition duration-300  flex items-center gap-2 shadow-sm"
              >
                🛒 ADD TO CART
              </button>
            </form>

            {addedMsg && (
              <p className="text-emerald-600 text-sm font-semibold">
                Added {quantity} item(s) to cart!
              </p>
            )}

            {/* Meta*/}
            <div className="pt-6 space-y-3 text-sm max-w-xs mx-auto lg:mx-0 text-left border-t border-gray-100">
              <div className="flex">
                <span className="w-28 text-gray-400 font-medium">Game ID:</span>
                <span className="text-blue-500 font-semibold">COD MMII</span>
              </div>
              <div className="flex">
                <span className="w-28 text-gray-400 font-medium">Genre:</span>
                <span className="text-blue-500 font-semibold">
                  Action, Team, Single
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-gray-400 font-medium">
                  Multi-tags:
                </span>
                <span className="text-blue-500 font-semibold">
                  War, Battle, Royal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Reviews Tabs */}
        <div className="bg-gray-100 rounded-[25px] p-8 md:p-12 mt-20 text-center lg:text-left shadow-sm">
          <div className="flex items-center justify-center lg:justify-start gap-6 border-b border-gray-200 pb-4 mb-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`text-lg font-bold transition  ${
                activeTab === "description"
                  ? "text-blue-500"
                  : "text-gray-800 hover:text-blue-500"
              }`}
            >
              Description
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`text-lg font-bold transition  ${
                activeTab === "reviews"
                  ? "text-blue-500"
                  : "text-gray-800 hover:text-blue-500"
              }`}
            >
              Reviews (3)
            </button>
          </div>

          {activeTab === "description" ? (
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                You can search for more templates on Google Search using
                keywords such as &quot;templatemo digital marketing&quot;,
                &quot;templatemo one-page&quot;, &quot;templatemo gallery&quot;,
                etc. Please tell your friends about our website. If you need a
                variety of HTML templates, you may visit Tooplate and Too CSS
                websites.
              </p>
              <p>
                Coloring book air plant shabby chic, crucifix normcore raclette
                cred swag artisan activated charcoal. PBR&amp;B fanny pack pok
                pok gentrify truffaut kitsch helvetica jean shorts edison bulb
                poutine next level humblebrag la croix adaptogen.
              </p>
            </div>
          ) : (
            <div className="text-gray-600 text-sm space-y-3">
              <p className="font-bold text-gray-900">
                ★★★★★ Awesome gameplay and graphics!
              </p>
              <p>One of the best action games this year. Highly recommended.</p>
            </div>
          )}
        </div>

        {/* Related Games */}
        <div className="mt-24">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between text-center sm:text-left mb-12 gap-4">
            <div>
              <span className="text-rose-400 uppercase font-bold text-xs tracking-wider">
                ACTION
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                Related Games
              </h2>
            </div>
            <button
              onClick={() => onNavigate("shop")}
              className="bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-7 py-3.5 rounded-full transition duration-300  shadow-sm"
            >
              VIEW ALL
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categoriesData.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onNavigate("details")}
                className="bg-blue-500 rounded-[25px] p-5 text-white flex flex-col items-center text-center shadow-md hover:bg-blue-600 transition duration-300  group"
              >
                <span className="text-xs font-semibold uppercase bg-white/20 px-3 py-1 rounded-full mb-4">
                  Action
                </span>
                <div className="w-full h-[170px] rounded-[20px] overflow-hidden bg-white">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}