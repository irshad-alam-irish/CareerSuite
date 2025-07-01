import { motion } from "framer-motion";

export default function ComingSoonSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 mb-10 px-6 py-12 text-center bg-blue-50 border border-blue-100 rounded-xl shadow-sm"
        >
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-2">
                🚧 More Features Coming Soon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                This section is still under development. Several exciting features and detailed information will be added here shortly.
            </p>
            <p className="text-sm text-gray-500 mt-4">
                We're working hard to bring you a complete experience — stay tuned!
            </p>
        </motion.section>
    );
}
