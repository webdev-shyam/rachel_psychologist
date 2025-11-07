import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Adult Counselling',
      description: 'Navigate anxiety, depression, relationship issues, and life transitions with personalized support.',
    },
    {
      title: 'Teen Support',
      description: 'Help adolescents manage emotions, build confidence, and develop healthy coping mechanisms.',
    },
    {
      title: 'Parent Guidance',
      description: 'Support for parents facing challenges with child behavior, communication, and family dynamics.',
    },
    {
      title: 'Counselling for Expats',
      description: 'Specialized support for individuals dealing with cultural adjustment, isolation, and identity shifts.',
    },
    {
      title: 'Emotional Regulation Coaching',
      description: 'Learn practical techniques to manage stress, reduce reactivity, and build emotional stability.',
    },
    {
      title: 'Group Sessions',
      description: 'Facilitated group therapy for shared experiences, peer support, and collective healing.',
    },
    {
      title: 'Long-Term Growth Planning',
      description: 'Ongoing therapeutic relationship focused on sustainable personal development and self-awareness.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textDark mb-4">
            How I Can Help
          </h2>
          <p className="text-lg text-textDark/70 max-w-2xl mx-auto">
            Tailored therapeutic services to meet your unique needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="h-1 w-16 bg-accent rounded-full mb-4 group-hover:w-24 transition-all"></div>
              <h3 className="text-xl font-semibold text-textDark mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-textDark/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
