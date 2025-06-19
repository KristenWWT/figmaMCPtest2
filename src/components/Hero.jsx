// Place your hero image in public/hero.jpg or adjust the path
const heroImage = '/hero.jpg';

function Hero() {
  return (
    <section
      className="h-80 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-center">
        <img src="/guarantee.svg" alt="icon" className="mx-auto mb-4 h-8" />
        <h1 className="text-4xl font-semibold mb-1">Contact</h1>
        <nav className="text-sm text-gray3">
          <a href="/" className="hover:text-primary">Home</a>
          <span className="mx-1">/</span> Contact
        </nav>
      </div>
    </section>
  );
}

export default Hero;
