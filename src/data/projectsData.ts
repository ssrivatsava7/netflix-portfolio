export const projects = [
  {
    title: "Titanic Survival Analysis",
    teaser:
      "What if data could have saved more lives that night? This analysis dives deep into survival odds aboard the Titanic.",
    description: `Analyzed historical Titanic passenger data using Snowflake SQL and Python, uncovering survival patterns across age, gender, and class.
Trained a Gradient Boosted Tree model in TensorFlow (~88% accuracy) to validate hypotheses and confirm key feature importance.
Created interactive Plotly visualizations enabling dynamic exploration of survival trends across 800+ passengers.`,
    tech: "Python, Pandas, Plotly, Snowflake, TensorFlow",
    image:
      "https://user-images.githubusercontent.com/110320717/196458805-ff6d976b-f649-4687-a480-ad59e2b5bd30.jpg",
  },
  {
    title: "Fault-Tolerant Distributed Data Storage System",
    teaser:
      "What if a node crashes mid-write? This system ensures your data never goes dark, even under failures.",
    description: `Built a 5-node distributed storage cluster handling 100k+ key-value records. Implemented Zookeeper-based leader election and GigaPaxos consensus to achieve totally ordered writes, automatic failover, and <100 ms latency under simulated crashes.`,
    tech: "Java, Cassandra, Zookeeper, GigaPaxos",
    image:
      "https://pandorafms.com/blog/wp-content/uploads/2023/04/Distributed-systems-features-and-best-practices.jpg",
  },
  {
    title: "Real-Time System Monitor",
    teaser:
      "Imagine watching 20 devices breathe in real time — CPU spikes, memory surges, all live.",
    description: `Developed a real-time monitoring platform with Go backend, Python agents, and Flutter dashboard streaming metrics via gRPC/WebSockets with <200 ms latency and 120 FPS visuals.`,
    tech: "Go, Python, Flutter, gRPC, WebSockets",
    image:
      "https://miro.medium.com/v2/da:true/resize:fit:612/0*1gFXUgX4IXPL4rav",
  },
  {
    title: "Elevation-Based Navigation System",
    teaser:
      "Ever wish Google Maps cared about hills? This app plots routes that respect your legs.",
    description: `Built a MERN-stack elevation-aware routing tool using Google Maps API, cutting elevation gain by 15% and travel time by 10% across 50 scenarios.`,
    tech: "MongoDB, Express.js, React, Node.js, Google Maps API",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AWS-Powered Breast Cancer Detection System",
    teaser:
      "What if early detection could scale infinitely? This serverless ML system makes it possible.",
    description: `Engineered a SageMaker-based classifier reaching 96% accuracy and 1,000+ predictions/s. Integrated Lambda + API Gateway for 200 ms model inference.`,
    tech: "AWS SageMaker, Lambda, API Gateway, S3, Python",
    image:
      "https://d2gr5kl7dt2z3t.cloudfront.net/blog/wp-content/uploads/2023/11/21033555/ICAD-insidermonkey-1700555753465.jpg",
  },
  {
    title: "Spotify Clone",
    teaser:
      "Recreating Spotify wasn’t the goal — matching its heartbeat was.",
    description: `Built a responsive Next.js music app with Supabase/PostgreSQL backend and Stripe integration. Achieved 95% usability satisfaction and 20% faster playlist retrieval.`,
    tech: "React.js, Next.js, Supabase, PostgreSQL, Stripe, Tailwind CSS",
    image:
      "https://nextbigtechnology.com/wp-content/uploads/2024/01/Advanced-Features-Spotify-Clone-Apps-Development.jpg",
  },
  {
    title: "Multiplayer UNO Game App",
    teaser:
      "What if UNO went online and never lagged?",
    description: `Developed a real-time multiplayer UNO game in React Native using WebSockets over TCP for <1% packet loss and 99.5% uptime; managed state with Redux.`,
    tech: "React Native, Redux, JavaScript, WebSockets",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202309/1415/cb6c132dd86efed36cd6ce8e52bfe1fdc0c5063f14121b72.jpg",
  },
];
