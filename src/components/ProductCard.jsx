function ProductCard({ img, name, price, badge }) {
  return (
    <div className="border group relative overflow-hidden">
      <img src={img} alt={name} className="w-full h-56 object-cover" />
      {badge && (
        <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
          {badge}
        </span>
      )}
      <button className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
        Add to Cart
      </button>
      <div className="p-3">
        <h3 className="font-medium mb-1">{name}</h3>
        <p className="text-primary text-sm">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
