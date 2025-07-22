export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow">
      <div className="container mx-auto px-5 py-3 flex justify-between">
        <div className="text-2xl font-bold">Sachin Oli</div>
        <ul className="flex space-x-8">
          {["Home","Projects","Skills","Contact"].map(sec => (
            <li key={sec}>
              <a href={`#${sec.toLowerCase()}`} className="hover:text-blue-600">{sec}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
