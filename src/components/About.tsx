const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-black text-white flex flex-col items-center text-center"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Now Streaming: <span className="text-red-500">My Story</span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hi there 👋 I’m <span className="text-red-500 font-semibold">Snigdha Srivatsava</span> — 
          a curious engineer who believes clean architecture and clever automation 
          can solve almost anything (except maybe a flaky Wi-Fi connection).  
          I build software that connects systems, simplifies data, and scales ideas.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          With over three years of experience {" "}
          in <span className="text-red-500 font-medium">systems and software engineering, 
          </span>I’ve worked on everything from distributed data pipelines to real-time monitoring platforms.  
          My toolkit includes{" "}
          <span className="text-red-500 font-medium">
            Python, Go, Java, FastAPI, React, AWS, Docker, Kubernetes, and PostgreSQL
          </span>, and my code’s mission is always the same — make systems faster, cleaner, and just a little smarter.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I completed my{" "}
          <span className="font-semibold">Master’s in Computer Science</span> at{" "}
          <span className="font-semibold">University of Massachusetts Amherst</span>, 
          where I explored distributed computing, machine learning, and intelligent systems.  
          Whether it’s designing backend APIs, building scalable data infra, or 
          teaching models to think, I love bridging reliability with innovation.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          When I’m not debugging code, you’ll probably find me debugging life — 
          with coffee, curiosity, and a healthy respect for semicolons. ☕💻
        </p>
      </div>
    </section>
  );
};

export default About;
