import { motion } from "framer-motion";

const navLinks = ["Home", "Features", "FAQ", "About"];

export default function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-extrabold text-blue-600 tracking-wide"
                >
                    Career<span className="text-gray-900">Suite</span>
                </motion.div>

                {/* Nav Links */}
                <nav className="hidden md:flex space-x-10">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={`#${link.toLowerCase()}`}
                            whileHover={{ scale: 1.1, color: "#1d4ed8" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
                        >
                            {link}
                        </motion.a>
                    ))}
                </nav>

                {/* Book Demo Button */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#book-demo"
                    className="hidden md:inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition duration-200"
                >
                    Book Demo
                </motion.a>
            </div>
        </header>
    );
}
