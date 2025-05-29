import { motion } from "framer-motion";
export default function Hero(){

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};
    return(
        <>
 <div className="w-full min-h-screen grid grid-rows-3 gap-6 bg-gray-100 p-4 sm:p-6">
      {/* First Row */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 bg-white rounded shadow p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        {/* Left Image */}
        <div className="md:col-span-3 flex items-center justify-center">
          <img
            src="../../src/assets/home_page_heroSecation_img.png"
            alt="Hero"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Right Text */}
        <div className="md:col-span-1 mt-4 md:mt-0 flex items-center justify-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Welcome to Our Site</h2>
            <p className="text-sm mt-2 text-gray-600">Inspiring digital experiences.</p>
          </div>
        </div>
      </motion.div>

      {/* Second Row */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 bg-white rounded shadow p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
      >
        <div className="flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 p-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Left Section</h3>
            <p className="text-sm text-gray-600">Responsive and elegant layout.</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Right Section</h3>
            <p className="text-sm text-gray-600">Optimized for all screen sizes.</p>
          </div>
        </div>
      </motion.div>

      {/* Third Row */}
      <motion.div
        className="bg-white rounded shadow p-6 flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={3}
      >
        <h3 className="text-xl font-bold">Join Us Today!</h3>
        <p className="text-gray-600 mt-2 max-w-xl">
          Start building your journey with us. We're here to help you grow.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </motion.div>
    </div>

        </>
    )
}