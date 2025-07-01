import { motion } from "framer-motion";

const cardData = [
    {
        title: "Personalized Career Pathing",
        desc: "Tailored growth plans based on individual strengths and goals.",
    },
    {
        title: "Role-based Upskilling",
        desc: "Train your workforce for future-ready roles with focused learning.",
    },
    {
        title: "Insightful Analytics",
        desc: "Visualize team progress and identify skill gaps easily.",
    },
];

export default function LandingPage() {
    return (
        <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen pt-24 px-4 md:px-16">

            {/* Hero Section */}
            <section className="text-center space-y-6">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-800"
                >
                    Career Beyond <span className="text-blue-600">Boundaries</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl md:text-2xl text-gray-600"
                >
                    Empowering Talent for the Future
                </motion.p>
                <motion.a
                    href="#book-demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
                >
                    Book Demo
                </motion.a>
            </section>

            {/* Video Section */}
            <section className="mt-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto w-full max-w-3xl rounded-xl overflow-hidden shadow-lg"
                >
                    <video
                        src="/your-demo-video.mp4" // Replace with your video path or embed link
                        controls
                        className="w-full h-[300px] object-cover"
                    />
                </motion.div>

                <h2 className="mt-8 text-2xl font-bold text-gray-700">
                    Unlock the full potential of your organization
                </h2>
                <p className="text-gray-600 mt-2">
                    Align talent, upskill teams, and accelerate transformation.
                </p>
            </section>

            {/* Cards Section */}
            <section className="mt-20 grid gap-8 md:grid-cols-3">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-bold text-blue-700 mb-2">{card.title}</h3>
                        <p className="text-gray-600">{card.desc}</p>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
