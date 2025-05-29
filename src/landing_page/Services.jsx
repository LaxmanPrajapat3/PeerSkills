import { motion } from "framer-motion";
import CardSecation from "./CardSecation";

export default function Services(){
    const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};
    
    return (
        <>
{/* Third Row */}
<motion.div
        className="bg-white rounded shadow p-6 flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={3}
      >
        <h3 className="text-xl font-bold">Services</h3>
        <CardSecation></CardSecation>
        <CardSecation></CardSecation>
        {/* <CardSecation></CardSecation> */}

          
      </motion.div>
  </>
    )
}