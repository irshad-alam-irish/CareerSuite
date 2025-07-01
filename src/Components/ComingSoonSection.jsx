import { motion } from "framer-motion";

export default function ComingSoonSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-28 px-6 py-16 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-xl text-center"
        >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                🚧 Exciting Features in the Works!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We're currently building more powerful tools to help you grow your career.
                Stay tuned for what's next — it's going to be awesome!
            </p>
            <div className="mt-6">
                <span className="inline-block px-5 py-2 text-sm font-semibold text-blue-800 bg-blue-200 rounded-full animate-pulse">
                    New modules launching soon...
                </span>
            </div>
        </motion.section>
    );
}
