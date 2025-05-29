import { motion } from "framer-motion";
import Services from "./Services";
import About from "./About";
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
            <h2 className="text-xl font-bold">Welcome to PreeSkills — the future of collaborative learning.</h2>
            <p className="text-sm mt-2 text-gray-600">Swap your skills, share your knowledge, and unlock a world of learning — one connection at a time.</p>
          </div>
        </div>
      </motion.div>

    <Services></Services>
<About></About>
     

    
    </div>

        </>
    )
}