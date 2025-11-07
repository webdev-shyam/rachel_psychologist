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
            <div className="space-y-4 text-textDark/80 leading-relaxed">
              <p>
                I’m a psychologist with a Bachelor’s degree from <span className="italic font-bold px-2">ELTE University</span> 
                 in Budapest. I have long-term experience teaching and supporting
                preschool children, which shaped my interest in emotional
                development and how people learn to navigate the world.
              </p>
              <p>
                Living abroad for more than ten years gave me firsthand insight
                into cultural differences, identity challenges, and the
                emotional weight of transitions.
              </p>
              <p>
                I’m currently advancing my training in counselling and
                psychotherapy. My approach is straightforward, empathetic, and
                practical. I focus on meeting clients where they are and helping
                them build strong inner resources that support real, lasting
                growth.
              </p>
            
            
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=800"
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
