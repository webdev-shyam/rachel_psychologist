import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Tajane Rokaj",
      role: "Client, Rachel Psychologist",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      text: "Rachel’s compassionate and insightful approach creates a safe and supportive environment for personal growth. Her professionalism and empathy are truly invaluable.",
    },
    {
      name: "Hm Hanna",
      role: "Client, Rachel Psychologist",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      text: "Thank you for offering an amazing service. Keep it up 🙏",
    },
    {
      name: "Massimo Jordan",
      role: "Local Guide & Client",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
      text: "Thank you, Rachel, for your help and great results 🙏",
    },
    {
      name: "Faten Handal",
      role: "Client, Rachel Psychologist",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200",
      text: "I’ve seen Rachel for 5 sessions so far and she’s amazing! Thank you Rachel 🥰🙏",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-gradient-to-b from-white/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Client{" "}
          <span className="bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#7A3EF0]/50 hover:shadow-[0_0_40px_rgba(122,62,240,0.3)] transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 fill-[#3AA0FF] text-[#3AA0FF]"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#7A3EF0]/50"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
