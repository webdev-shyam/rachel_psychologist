import { motion } from 'framer-motion';

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
                I completed my Bachelor's degree in Psychology at ELTE University in Budapest,
                where I developed a strong foundation in psychological theory and practice.
                My education gave me the tools to understand human behavior, emotional patterns,
                and the complexities of the mind.
              </p>
              <p>
                During my studies and beyond, I gained valuable experience working with preschool
                children, which taught me patience, the importance of early emotional development,
                and how to communicate with care and clarity.
              </p>
              <p>
                I've also lived and worked abroad, which deepened my understanding of cultural
                differences, identity struggles, and the unique challenges faced by expats and
                individuals navigating life transitions.
              </p>
              <p>
                I am currently pursuing ongoing clinical training in counselling and psychotherapy,
                staying committed to professional growth and evidence-based practice.
              </p>
              <p>
                My approach is grounded in empathy, honesty, and practicality. I believe in meeting
                people where they are and helping them build the inner resources they need to thrive.
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
