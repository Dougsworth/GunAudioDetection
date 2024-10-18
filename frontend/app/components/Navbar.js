import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent fixed top-0 left-0 py-4 px-8 z-50 flex items-center justify-between">
      <div className="text-2xl font-bold text-indigo-500">
        GunDetection Audio
      </div>
      <div className="hidden sm:flex gap-8 text-gray-300">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>

        <Link href="/case-study" className="hover:text-white transition-colors">
          Case Study
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
