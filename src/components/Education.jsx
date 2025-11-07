import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      title: 'Bachelor of Arts in Psychology',
      institution: 'ELTE University, Budapest',
      description: 'Comprehensive training in psychological theory, research methods, and clinical foundations.',
      icon: '🎓',
    },
    {
      title: 'Ongoing Clinical Training',
      institution: 'Counselling & Psychotherapy',
      description: 'Advanced training in therapeutic techniques, client assessment, and evidence-based interventions.',
      icon: '📚',
    },
    {
      title: 'Professional Workshops',
      institution: 'Specialized Training',
      description: 'Trauma-informed care, emotional regulation strategies, family systems theory, and cultural competence.',
      icon: '✨',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textDark mb-4">
            Education & Training
          </h2>
          <p className="text-lg text-textDark/70 max-w-2xl mx-auto">
            A commitment to continuous learning and professional excellence
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-textDark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-accent font-medium mb-3">{item.institution}</p>
                  <p className="text-textDark/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
