function Banner() {
  const items = [
    {
      src: '/customer-support.svg',
      label: '24/7 Support',
    },
    {
      src: '/guarantee.svg',
      label: 'High Quality',
    },
    {
      src: '/trophy%201.svg', // space encoded
      label: 'Award Winning',
    },
    {
      src: '/shipping.svg',
      label: 'Free Shipping',
    },
  ];

  return (
    <div className="bg-gray-100 rounded-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center text-center">
          <img src={item.src} alt={item.label} className="h-12 mb-4" />
          <span className="text-sm font-medium text-gray3">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Banner;
