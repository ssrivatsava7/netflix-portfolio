import {
  Code,
  Server,
  Globe,
  Cloud,
  Database,
  Shield,
  BarChart2,
} from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    items:
      "Python, Go, Java, C++, JavaScript (ES6+), TypeScript, SQL, Bash, PowerShell",
  },
  {
    icon: Server,
    title: "Backend & Frameworks",
    items:
      "FastAPI, Django, Spring Boot, Node.js, Flask, REST, gRPC, WebSockets, JWT, OAuth 2.0, NGINX",
  },
  {
    icon: Globe,
    title: "Frontend & UI Frameworks",
    items:
      "React, Next.js, Angular, Streamlit, HTML5, CSS3, Tailwind CSS, Dash",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items:
      "AWS, GCP, Azure, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, CI/CD, Spinnaker, Puppet, Packer",
  },
  {
    icon: Database,
    title: "Data, Databases & ML",
    items:
      "PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, Cassandra, Elasticsearch, Kafka, Snowflake, Pandas, NumPy, Scikit-learn, PyTorch, dbt, Airflow, Power BI, Tableau",
  },
  {
    icon: Shield,
    title: "Systems, Security & Monitoring",
    items:
      "Linux (Ubuntu, CentOS), TLS, RBAC, OAuth, Prometheus, Grafana, OpenTelemetry, ELK Stack, OSI Model, DNS, TCP/IP",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills <span className="text-red-500">& Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A versatile toolkit for software, data, and cloud engineering excellence.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col justify-center border border-gray-800 rounded-xl 
                         p-6 bg-gray-900/40 hover:bg-gray-900/70 
                         hover:shadow-[0_0_25px_rgba(255,0,0,0.4)] 
                         transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <skill.icon className="text-red-500" size={22} />
                <h3 className="text-xl font-bold">{skill.title}</h3>
              </div>
              <p className="text-gray-300">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
