import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const education = [
  {
    id: 1,
    institution: "University of Massachusetts Amherst",
    degree: "Master of Science in Computer Science",
    period: "Feb 2023 – Dec 2024",
    location: "Amherst, MA, USA",
    image: "https://logodix.com/logo/1188637.jpg",
    summary: (
      <>
        <p className="text-gray-300 mb-4">
          Focused on Artificial Intelligence, Machine Learning, and Data Systems.  
          Key graduate coursework includes:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-left space-y-1">
          <li>Algorithms for Data Science</li>
          <li>System Defense and Test</li>
          <li>Software Engineering Theory and Practices</li>
          <li>Machine Learning</li>
          <li>Data Science Fundamentals</li>
          <li>Intelligent Computer Vision</li>
          <li>Database Design and Implementation</li>
          <li>Business Intelligence and Analytics</li>
          <li>Distributed Computing & Systems</li>
          <li>Theory & Practice of Cryptography</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    institution: "Jawaharlal Nehru Technological University, Hyderabad",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2016 – Sep 2020",
    location: "Hyderabad, India",
    image:
      "https://inphd.com/wp-content/uploads/JNTU-Hyderabad-Logo.webp",
    summary:
      "Studied core computer science concepts including Data Structures, Algorithms, Operating Systems, and Databases. Developed strong fundamentals in programming, software design, and distributed systems through academic projects.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
             <span className="text-red-500">Education</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic foundation and learning journey.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                {/* Card with only logo (no text outside) */}
                <div
                  className="relative rounded-xl overflow-hidden cursor-pointer group 
                             hover:scale-105 transition-transform duration-300 
                             hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] 
                             h-64 sm:h-72 md:h-80"
                >
                  {/* Background Image with Zoom Effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${edu.image})`,
                    }}
                  ></div>
                </div>
              </DialogTrigger>

              {/* Modal */}
              <DialogContent className="bg-black/90 backdrop-blur-md border border-gray-800 text-white max-w-lg">
                <DialogHeader>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="h-20 object-contain rounded-md"
                    />
                    <DialogTitle className="text-2xl font-bold">
                      {edu.institution}
                    </DialogTitle>
                    <p className="text-red-500 font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-400">
                      {edu.period} · {edu.location}
                    </p>
                  </div>
                </DialogHeader>
                <div className="mt-6 text-gray-300 leading-relaxed text-center">
                  {edu.summary}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
