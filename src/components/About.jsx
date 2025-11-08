import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-textDark mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-textDark/80 leading-relaxed text-[0.8rem]">
              <p>
                <span className="text-5xl">Hi,</span> I’m Rachel Hanna, a
                psychologist with a Bachelor’s degree from ELTE University in
                Budapest. My interest in psychology began long before my formal
                studies. It started in high school, when I was living in Dubai.
                I found myself fascinated by people, how they think, feel, and
                cope with the complexity of life. I would often notice how
                differently individuals responded to similar experiences, and I
                became curious about what shapes our resilience, our emotions,
                and the ways we make sense of the world.
              </p>
              <p>
                <span className="text-2xl">I</span> grew up in Jordan, spent
                part of my teenage years in Dubai, then lived in Turkey, and
                eventually moved to Budapest, where I pursued my psychology
                degree. Over the past ten years, I’ve continued to move, live,
                and grow in different cultures, and I’m still doing so today.
                Each place has left its mark on me, offering new perspectives on
                identity, belonging, and what it means to find home within
                yourself. These experiences have given me a deep appreciation
                for human adaptability and the emotional layers that come with
                transition, uncertainty, and change.
              </p>
              <p>
                <span className="text-2xl">Alongside</span> my work as a
                psychologist, I also teach preschool children. Teaching has
                become a natural extension of my curiosity about emotional
                development and learning. Every day, I witness how children
                express emotions freely, communicate without pretense, and find
                joy in discovery. Their openness reminds me that growth, at any
                age, begins in an environment of safety and understanding.
                Working with children continually grounds me in empathy and
                presence, two qualities I bring into my therapeutic practice as
                well.
              </p>
              <p>
                <span className="text-2xl">My</span> therapeutic approach is
                empathetic, reflective, and person-centered. I believe healing
                begins with understanding: understanding our stories, our
                emotional patterns, and the protective mechanisms we develop
                through life. Whether someone is struggling with anxiety,
                cultural transitions, identity questions, or the quiet heaviness
                of burnout, I strive to offer a compassionate space where they
                can explore their emotions without judgment.
              </p>
              <p>
                <span className="text-2xl">I</span> see therapy as a
                collaborative process built on trust, curiosity, and respect for
                each person’s pace and individuality. I draw from my
                multicultural experiences to support people navigating
                cross-cultural identities, adjustment stress, and the emotional
                challenges of living abroad. My goal is to help clients
                reconnect with their sense of self, develop emotional awareness,
                and move toward a life that feels more authentic and balanced.
              </p>

              <p>
                <span className="text-2xl">I'm</span> continuously inspired by
                the resilience of the human mind, the way it adapts, protects,
                and heals. For me, psychology is not just a career but a
                lifelong exploration of what it means to be human: to think, to
                feel, to grow, and to find meaning in change. Whether I’m
                working with a child discovering their voice or an adult
                rediscovering their inner strength, or a family, I see every
                encounter as an opportunity to witness and support the quiet,
                powerful process of becoming.
              </p>

              <p>
                <span className="text-2xl">Today,</span> I offer online
                sessions, workshops, and consultations, providing accessible
                psychological support no matter where you are in the world.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="assets/videocall.jpg"
                alt="Counselling session environment - peaceful and supportive atmosphere"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/40 rounded-full blur-2xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
