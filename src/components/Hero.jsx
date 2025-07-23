
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <motion.img
          src={profileImg}
          alt="Profile"
          className="mx-auto rounded-full mb-6 shadow-lg" style={{ width: '128px', height: '128px' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m Sachin Oli
        </h1>
        <motion.p
          className="text-xl text-gray-600"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
    </section>
  );
}
