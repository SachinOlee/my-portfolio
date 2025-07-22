export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded"/>
          <input type="email" placeholder="Your Email" className="border p-3 rounded"/>
          <textarea placeholder="Your Message" className="border p-3 rounded h-32"></textarea>
          <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
