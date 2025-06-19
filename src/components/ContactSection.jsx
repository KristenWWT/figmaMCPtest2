import Banner from './Banner';

function ContactSection() {
  return (
    <>
    <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
        <p className="text-gray3 mb-4">
          Fill in the form and our team will get back to you within 24 hours.
        </p>
        <ul className="space-y-3 text-gray3">
          <li>
            <strong className="text-primary">Phone:</strong> (+01) 234 567 890
          </li>
          <li>
            <strong className="text-primary">Email:</strong>{' '}
            support@example.com
          </li>
          <li>
            <strong className="text-primary">Address:</strong> 1234 Street Name,
            City, Country
          </li>
        </ul>
      </div>
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />
        <textarea
          rows="5"
          placeholder="Your message"
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white py-3 px-6 rounded-md hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </section>
      <Banner />
    </>
  );
}

export default ContactSection;
