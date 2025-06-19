import { useState } from 'react';
import ProductCard from './ProductCard';

// Update these image paths to match the actual asset names you place in public/product_detail_asset
const galleryImages = [
  '/product_detail_asset/Asgaard sofa 3.png',
  '/product_detail_asset/Maya sofa three seater (1) 1.png',
  '/product_detail_asset/Cloud sofa three seater + ottoman_1 1.png',
  '/product_detail_asset/Outdoor sofa set 2.png',
];

function ProductDetail() {
  const [activeImg, setActiveImg] = useState(galleryImages[0]);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* breadcrumb */}
      <nav className="text-sm text-gray3 mb-6">
        <a href="/" className="hover:text-primary">Home</a>
        <span className="mx-1">/</span>
        <span className="text-gray3">Shop</span>
        <span className="mx-1">/</span>
        <span className="text-black">Asgaard sofa</span>
      </nav>

      {/* top grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* gallery */}
        <div className="grid grid-cols-[80px_1fr] gap-4">
          <div className="flex flex-col space-y-3">
            {galleryImages.map((img) => (
              <img
                key={img}
                src={img}
                alt="thumbnail"
                className={`w-20 h-20 object-cover cursor-pointer border ${
                  activeImg === img ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>
          <img
            src={activeImg}
            alt="product"
            className="w-full object-contain max-h-[500px] bg-gray-100"
          />
        </div>

        {/* info */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">Asgaard sofa</h1>
          <p className="text-xl text-primary font-medium mb-4">Rs. 250,000.00</p>

          {/* stars */}
          <div className="flex items-center mb-6 gap-1 text-yellow-400 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="ml-2 text-gray3">5 Customer Review</span>
          </div>

          <p className="text-gray3 mb-6">
            Setting the bar for style and comfort, this modern sofa features clean
            lines, a sturdy frame and deep, welcoming cushions.
          </p>

          {/* color selector */}
          <div className="flex items-center gap-3 mb-6">
            {['#816DFA', '#000000', '#B88E2F', '#F6973F'].map((clr) => (
              <button
                key={clr}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: clr }}
              ></button>
            ))}
          </div>

          {/* action buttons */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <button className="border py-3 px-10 hover:bg-primary hover:text-white transition rounded-md">
              Add To Cart
            </button>
            <button className="border py-3 px-8 rounded-md">Compare</button>
          </div>

          {/* meta */}
          <ul className="space-y-1 text-sm">
            <li>
              <span className="font-semibold">SKU:</span> SS001
            </li>
            <li>
              <span className="font-semibold">Category:</span> Sofa, Chair, Home,
              Shop
            </li>
            <li>
              <span className="font-semibold">Tags:</span> Sofa, Chair, Home,
              Shop
            </li>
            <li>
              <span className="font-semibold">Share:</span> <span className="underline cursor-pointer"><img src="/product_detail_asset/akar-icons_facebook-fill.svg" alt="fb" className="inline w-4 h-4" /></span>,{' '}
              <span className="underline cursor-pointer"><img src="/product_detail_asset/ant-design_twitter-circle-filled.svg" alt="tw" className="inline w-4 h-4" /></span>,{' '}
              <span className="underline cursor-pointer"><img src="/product_detail_asset/akar-icons_linkedin-box-fill.svg" alt="in" className="inline w-4 h-4" /></span>
            </li>
          </ul>
        </div>
      </div>

      {/* tabs */}
      <div className="mb-12">
        <div className="flex gap-8 border-b">
          {['description', 'additional', 'reviews'].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`py-3 capitalize border-b-2 transition-colors ${
                activeTab === t ? 'border-primary text-primary' : 'border-transparent text-gray3'
              }`}
            >
              {t === 'additional' ? 'Additional Information' : t}
              {t === 'reviews' ? ' [5]' : ''}
            </button>
          ))}
        </div>
        {/* tab panels */}
        {activeTab === 'description' && (
          <div className="py-8 text-gray3 leading-relaxed">
            Stimulating the raw wrapped iron, it’s not just about portable—some terms evoke speaker cases like unmistakable note and record in lecture. It amplifies the notion, and shapes the shadow it can tread.
          </div>
        )}
        {activeTab === 'additional' && (
          <div className="py-8 text-gray3 leading-relaxed">
            Material: Wood, Fabric, Leather. Size: 200 x 76 x 40 cm.
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="py-8 text-gray3 leading-relaxed">No reviews yet.</div>
        )}
      </div>

      {/* related images section */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <img
          src="/product_detail_asset/Cloud sofa three seater + ottoman_2 1.png"
          alt="layout1"
          className="w-full object-cover bg-gray-100"
        />
        <img
          src="/product_detail_asset/Outdoor sofa set_2 1.png"
          alt="layout2"
          className="w-full object-cover bg-gray-100"
        />
      </div>

      

{/* Related products */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Related Products
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {[
          { name: 'Slytherine', price: 'Rp 2.500.000', img: '/product_detail_asset/Stuart sofa 1.png' },
          { name: 'Leviosa', price: 'Rp 2.500.000', img: '/product_detail_asset/Outdoor sofa set 2.png' },
          { name: 'Lolito', price: 'Rp 7.000.000', img: '/product_detail_asset/Cloud sofa three seater + ottoman_1 1.png' },
          { name: 'Respira', price: 'Rp 500.000', img: '/product_detail_asset/Maya sofa three seater (1) 1.png' },
        ].map((p) => (
          <ProductCard key={p.name} {...p} />

        ))}
      </div>
      <div className="text-center">
        <a href="#" className="border px-12 py-3 inline-block hover:bg-primary hover:text-white transition">
          Show More
        </a>
      </div>
    </main>
  );
}

export default ProductDetail;
