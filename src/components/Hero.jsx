import { motion } from 'framer-motion';

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-25 px-4  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold text-textDark mb-6 leading-tight">
              Hi, I'm Rachel.
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-6">
              Counselling Psychologist working online with adults, teens, and parents.
            </h2>
            <p className="text-lg text-textDark/80 mb-8 leading-relaxed">
              I help people understand themselves, calm their mind, and handle life with more stability.
              Therapy with me is direct, clear, and practical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-accent text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-all hover:shadow-lg text-center"
              >
                Book a Session
              </a>
              <a
                href="#about"
                className="bg-transparent border-2 border-accent text-gray-500 px-8 py-3 rounded-full font-medium hover:bg-accent hover:text-gray-700 transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="assets/rachel.jpg"
                alt="Rachel - Professional counselling psychologist in a warm, welcoming environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accentAlt/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
