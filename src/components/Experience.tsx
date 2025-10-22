import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Manning College of Information and Computer Sciences",
    role: "Volunteer, CICStep",
    period: "Feb 2025 – Present",
    location: "Amherst, MA",
  },
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    period: "Apr 2021 – Dec 2022",
    location: "Hyderabad, India",
  },
  {
    company: "University of Massachusetts Amherst",
    role: "Graduate Research Assistant (Academic Project)",
    period: "Feb 2023 – Dec 2024",
    location: "Amherst, MA",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Now Streaming: <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A snapshot of my professional journey and contributions.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] 
                         transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{exp.company}</h3>
              <p className="text-red-500 font-medium mb-4">{exp.role}</p>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={14} />
                <span>
                  {exp.period} · {exp.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
