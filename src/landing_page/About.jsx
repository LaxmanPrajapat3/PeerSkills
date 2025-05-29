import { motion } from "framer-motion";

export default function About(){
    
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
            <h3 className="text-lg font-semibold">Empowering people to learn by sharing what they love</h3>
            <p className="text-sm text-gray-600">At PeerSkills, we believe that everyone has something valuable to offer. Whether you're a designer, a developer, a musician, or a home chef — your skills can help someone grow, just as theirs can help you.

Our platform is built to connect people who are passionate about learning and teaching. No money involved — just meaningful exchanges of time, knowledge, and passion.

In a world that moves fast, we slow down to make learning personal again. We’re not just building a platform — we’re building a community where skills are the new currency.</p>

<h3 className="text-lg font-semibold">
    🧩 What Makes Us Different
    
    </h3>
    <p className="text-sm text-gray-600">
Unlike traditional learning platforms, PeerSkills doesn’t charge users or rely on formal credentials. We believe real skills come from real people, and learning should feel like a conversation — not a transaction.

Here, your passion is your currency. Whether you’re great at photography or just starting out in coding, you have something valuable to share.

    </p>


          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">🔗 What You Can Do on PeerSkills</h3>
            <p className="text-sm text-gray-600">
Swap Skills: Exchange your expertise with others. For example, teach someone to code in return for learning Spanish.

Offer Sessions: Share your talent through one-on-one or group sessions.

Build Your Profile: Showcase your skills, past exchanges, and reviews.

Grow Your Network: Connect with learners and teachers from around the world.

Chat in Real-Time: Communicate instantly with other users through our secure, built-in messaging system. Schedule sessions, ask questions, or simply get to know your learning partner — all in one place.
</p>

<h3 className="text-lg font-semibold">🚀 Our Vision for the Future</h3>
<p className="text-sm text-gray-600">We envision a global skill-sharing movement where everyone contributes, everyone benefits, and education becomes more human, connected, and community-driven.</p>
          </div>
        </div>
      </motion.div>
</>
    )
}