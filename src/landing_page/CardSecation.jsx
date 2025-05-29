import { motion } from "framer-motion";

const Card = ({ image, title, text, link, delay = 0 }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-2xl font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Image Section (80%) */}
      <div className="h-[80%]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text Section (20%) */}
      <div className="h-[20%] p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </motion.a>
  );
};

// Card Grid Section
export default function CardSecation(){
    const cards = [
    {
      image: "https://plus.unsplash.com/premium_photo-1681810994162-43dbe0919d3f?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      text: "Learn color, layout, and branding.",
      link: "#design",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Web Development",
      text: "Build websites and apps with experts.",
      link: "#development",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Music & Audio",
      text: "Join jam sessions or teach vocals.",
      link: "#music",
    },
  ];
    return(
        <>
          <div className="flex flex-wrap gap-6 justify-center items-start py-6">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} delay={idx * 0.2} />
      ))}
    </div>
        
        </>
    )
}