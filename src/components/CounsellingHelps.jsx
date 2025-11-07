import { motion } from 'framer-motion';

const CounsellingHelps = () => {
  return (
    <section id="counselling-helps" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gray-800">
        <img 
          src="assets/beautiful-park.jpg"
          alt="Peaceful nature scene representing mental clarity and growth"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-accent/80"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Why Counselling Helps
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <p className="text-xl text-white leading-relaxed mb-6">
              You don't have to handle everything alone. Talking to someone trained, neutral,
              and steady helps you recognize your patterns, regulate your emotions, and build
              healthier habits — especially when life feels heavy or unstable.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Therapy provides a safe space to explore your thoughts without judgment, gain clarity
              on difficult situations, and develop the tools you need to navigate life with more
              confidence and peace.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CounsellingHelps;
