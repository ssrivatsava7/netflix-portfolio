import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Volunteer, CICStep",
    company: "Manning College of Information and Computer Sciences",
    period: "Feb 2025 – Present · Amherst, MA",
    highlights: [
      "Built an AI-powered academic chatbot using GPT and FastAPI, reducing faculty email load by 60%.",
      "Queried PostgreSQL databases to generate context-aware GPT responses for 200+ students.",
      "Implemented JWT-based authentication and Plotly Dash analytics dashboards, reducing manual reporting time by 40%.",
      "Wrote PyTest unit/integration tests (85% coverage) and automated CI validation with GitHub Actions.",
    ],
  },
  {
    id: 2,
    role: "System Engineer",
    company: "Tata Consultancy Services",
    period: "Apr 2021 – Dec 2022 · Hyderabad, India",
    highlights: [
      "Migrated legacy analytics tools to Python and PostgreSQL, boosting throughput by 50%.",
      "Developed Dash/Plotly dashboards for 200+ analysts, saving ≈1,500 hours/year of manual reporting.",
      "Designed and optimized ETL pipelines processing 10M+ records with Pandas and SQL, reducing batch time by 40%.",
      "Built AWS Lambda–based anomaly detection with CloudWatch, cutting alert response time from 45 to 15 minutes.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Now Streaming: <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey through engineering scalable systems and intelligent applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-red-600 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative animate-fade-in-slow transition-transform duration-500 ${
                index % 2 === 0 ? "translate-x-0" : "translate-x-0 md:ml-8"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-2 w-4 h-4 bg-red-600 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.6)]"></div>

              {/* Experience Card */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(255,0,0,0.4)] transition-all duration-300">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-red-500" />
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Calendar size={14} /> {exp.period}
                  </span>
                </div>

                <h4 className="text-lg font-medium text-gray-300 mb-3">{exp.company}</h4>

                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
