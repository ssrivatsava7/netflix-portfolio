import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Manning College of Information and Computer Sciences",
    role: "Volunteer, CICStep",
    period: "Feb 2025 – Present",
    location: "Amherst, MA",
    image:
      "https://www.amherstindy.org/wp-content/uploads/2022/09/Screen-Shot-2022-09-23-at-8.16.42-AM.png",
    summary:
      "Built and deployed an AI-powered academic chatbot using GPT and FastAPI to automate student-faculty communication for 200+ students, cutting manual email load by 60% and improving response speed. Integrated secure JWT authentication and analytics dashboards to enhance transparency and performance tracking.",
  },
  {
    id: 2,
    company: "Tata Consultancy Services",
    role: "System Engineer",
    period: "Apr 2021 – Dec 2022",
    location: "Hyderabad, India",
    image:
      "https://www.equitybulls.com/equitybullsadmin/uploads/Tata%20Consultancy%20Services%20Limited%20-%20TCS%20-%20Logo%202.jpg",
    summary:
      "Developed scalable analytics solutions by migrating legacy systems to Python and PostgreSQL, improving throughput by 50%. Built real-time dashboards for 200+ analysts and automated anomaly detection pipelines using AWS Lambda, cutting alert response time by 66%.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Now Streaming: <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stories from my professional journey — crafted with code.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div
                  className="relative rounded-xl overflow-hidden cursor-pointer group 
                             hover:scale-105 transition-transform duration-300 
                             hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]"
                >
                  {/* Background Image with Zoom Effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${exp.image})`,
                    }}
                  ></div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                  {/* Text Overlay */}
                  <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-red-500 text-lg font-medium">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                      <Calendar size={14} />
                      <span>
                        {exp.period} · {exp.location}
                      </span>
                    </div>
                    <p className="mt-3 text-red-500 text-sm font-medium group-hover:underline">
                      ▶ Click for more info
                    </p>
                  </div>
                </div>
              </DialogTrigger>

              {/* Modal */}
              <DialogContent className="bg-black/90 backdrop-blur-md border border-gray-800 text-white max-w-lg">
                <DialogHeader>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="h-20 object-contain rounded-md"
                    />
                    <DialogTitle className="text-2xl font-bold">
                      {exp.company}
                    </DialogTitle>
                    <p className="text-red-500 font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-400">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </DialogHeader>
                <div className="mt-6 text-gray-300 leading-relaxed text-center">
                  {exp.summary}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
