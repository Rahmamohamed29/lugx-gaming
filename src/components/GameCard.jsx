export default function GameCard({ game, onSelectGame }) {
  const { category, title, oldPrice, price, image } = game;

  return (
    <div
      onClick={() => onSelectGame(game)}
      className="bg-gray-100 rounded-[25px] overflow-hidden shadow-sm hover:shadow-md group  transition-all duration-300"
    >
      {/* Image & Price Badge */}
      <div className="relative overflow-hidden rounded-[25px]">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-500 group-hover:bg-blue-500 text-white rounded-xl px-3.5 py-1.5 text-right shadow transition-colors duration-300">
          {oldPrice && (
            <span className="block text-xs line-through text-white/80 font-normal">
              ${oldPrice}
            </span>
          )}
          <span className="font-bold text-base">${price}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-500 block mb-1">{category}</span>
          <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
            {title}
          </h4>
        </div>

        <button
          type="button"
          className="w-10 h-10 rounded-full bg-rose-400 hover:bg-blue-500 group-hover:bg-blue-500 text-white flex items-center justify-center transition-colors duration-300  shadow-sm"
        >
          🛒
        </button>
      </div>
    </div>
  );
}