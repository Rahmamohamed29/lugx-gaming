export default function Featured({ items }) {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[25px] py-9 px-6 shadow-[0_0_15px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)] hover:-translate-y-1 flex flex-col items-center text-center group  transition-all duration-300"
          >
            <div className="w-[90px] h-[90px] rounded-full bg-blue-500 group-hover:bg-rose-400 flex items-center justify-center mb-6 transition-colors duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-11 h-11 object-contain"
              />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-[17px] tracking-wide">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}