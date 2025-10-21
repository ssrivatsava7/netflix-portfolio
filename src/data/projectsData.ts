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
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Fault-Tolerant Distributed Data Storage System",
    teaser:
      "What if a node crashes mid-write? This system ensures your data never goes dark, even under failures.",
    description: `Built a 5-node distributed storage cluster handling 100k+ key-value records. Implemented Zookeeper-based leader election and GigaPaxos consensus to achieve totally ordered writes, automatic failover, and <100 ms latency under simulated crashes.`,
    tech: "Java, Cassandra, Zookeeper, GigaPaxos",
    image:
      "https://images.unsplash.com/photo-1581090464777-4c2a0d47ad15?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Real-Time System Monitor",
    teaser:
      "Imagine watching 20 devices breathe in real time — CPU spikes, memory surges, all live.",
    description: `Developed a real-time monitoring platform with Go backend, Python agents, and Flutter dashboard streaming metrics via gRPC/WebSockets with <200 ms latency and 120 FPS visuals.`,
    tech: "Go, Python, Flutter, gRPC, WebSockets",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Spotify Clone",
    teaser:
      "Recreating Spotify wasn’t the goal — matching its heartbeat was.",
    description: `Built a responsive Next.js music app with Supabase/PostgreSQL backend and Stripe integration. Achieved 95% usability satisfaction and 20% faster playlist retrieval.`,
    tech: "React.js, Next.js, Supabase, PostgreSQL, Stripe, Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Multiplayer UNO Game App",
    teaser:
      "What if UNO went online and never lagged?",
    description: `Developed a real-time multiplayer UNO game in React Native using WebSockets over TCP for <1% packet loss and 99.5% uptime; managed state with Redux.`,
    tech: "React Native, Redux, JavaScript, WebSockets",
    image:
      "https://images.unsplash.com/photo-1607853200885-9c846bc8e22b?auto=format&fit=crop&w=1400&q=80",
  },
];
