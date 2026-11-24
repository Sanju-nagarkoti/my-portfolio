export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f14] text-white">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-5 px-6 md:px-10 py-6">
        <h1 className="text-2xl font-bold text-purple-400">
          Portfolio.
        </h1>

       <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          <a href="#home" className="hover:text-purple-400 transition duration-300 hover:underline" >Home</a>
          <a href="#about" className="hover:text-purple-400 transition duration-300 hover:underline">About</a>
          <a href="#skills" className="hover:text-purple-400 transition duration-300 hover:underline">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition duration-300 hover:underline">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition duration-300 hover:underline">Contact</a>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20">
          <div className="mb-6">
    <span className="border border-purple-500/40 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm">
      ✦ Available for opportunities
    </span>
  </div>
       

       <h1 className="fade-up text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "} 
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Sanju Nagarkoti</span>
        </h1>

        <h2 className="fade-up text-3xl text-gray-400 mb-6">
          Exploring Web Development and Cybersecurity.
        </h2>

        <p className="fade-up text-gray-400 max-w-xl mb-8">
          I'm passionate about technology, web development and cybersecurity.
          I love learning new skills and building projects that solve real problems.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 hover:-translate-y-1"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:border-purple-400 hover:text-purple-400 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>

{/* About section */}
      <section id="about" className="px-6 md:px-20 py-16 md:py-24">
        <p className="text-purple-400 mb-3">WHO I AM?</p>

        <h2 className="text-4xl font-bold mb-8">About Me</h2>
         <div className="max-w-3xl text-gray-400 leading-8 space-y-4">
    <p>
      I'm a BCA student studying in Samriddhi College.
    </p>

    <p>
      I'm currently exploring web development and cybersecurity,
      improving my skills, and building projects to turn my
      knowledge into practical experience.
    </p>

    <p>
      My goal is to become a skilled developer, continuously improve my abilities, and gain practical experience by building real-world projects.
    </p>
    </div>
      </section>

      {/* skills */}

      <section id="skills" className="px-6 md:px-20 py-16 md:py-24">
  <p className="text-purple-400 mb-3">WHAT I WORK WITH</p>

  <h2 className="text-4xl font-bold mb-10">
    My Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-[#191920] border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Frontend</h3>
      <p className="text-gray-400">HTML, CSS, JavaScript, React, Next.js</p>
    </div>

    <div className="bg-[#191920] border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Backend</h3>
      <p className="text-gray-400">Python, Django, FastAPI</p>
    </div>

    <div className="bg-[#191920] border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Database</h3>
      <p className="text-gray-400">MySQL, SQLite, MongoDB</p>
    </div>

    <div className="bg-[#191920] border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">Tools</h3>
      <p className="text-gray-400">Git, GitHub, VS Code</p>
    </div>

  </div>
</section>

{/* projects section */}

<section id="projects" className="px-6 md:px-20 py-16 md:py-24">
  <p className="text-purple-400 mb-3">MY WORK</p>

  <h2 className="text-4xl font-bold mb-10">
    Featured Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="bg-[#191920] border border-gray-800 rounded-2xl p-7 hover:border-blue-500 transition duration-300">
      <p className="text-purple-400 text-sm mb-3">01 / WEB DEVELOPMENT</p>

      <h3 className="text-2xl font-bold mb-4">Grihalaya Sewa</h3>

      <p className="text-gray-400 leading-7 mb-5">
        A property rental platform where users can explore properties,
        connect with landlords, and share their experiences.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
          Django
        </span>
        <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
          Python
        </span>
        <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
          SQLite
        </span>
      </div>
    </div>

    <div className="bg-[#191920] border border-gray-800 rounded-2xl p-7 hover:border-blue-500 transition duration-300">
      <p className="text-purple-400 text-sm mb-3">02 / E-COMMERCE</p>

      <h3 className="text-2xl font-bold mb-4">Hello Bajar</h3>

      <p className="text-gray-400 leading-7 mb-5">
        An online marketplace project featuring product listings,
        search functionality, and product recommendations.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
          Django
        </span>
        <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
          Python
        </span>
        <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
          Machine Learning
        </span>
      </div>
    </div>

  </div>
</section>

{/* contact section */}

<section id="contact" className="px-6 md:px-20 py-16 md:py-24">
  <div className="bg-[#191920] border border-gray-800 rounded-2xl  p-6 md:p-10 text-center">
    <p className="text-purple-400 mb-3">GET IN TOUCH</p>

    <h2 className="text-4xl font-bold mb-5">
      Let's Connect!
    </h2>

    <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-7">
      I'm always interested in learning, collaborating, and
      connecting with people who love technology.
    </p>

    <a
      href="mailto:sanjunagarkoti44@gmail.com"
      className="inline-block bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
    >
      Send Me an Email →
    </a>
  </div>
</section>

<footer className="border-t border-gray-800 px-6 md:px-20 py-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <h2 className="text-xl font-bold text-purple-400">
      Portfolio.
    </h2>

    <p className="text-gray-500 text-sm">
      © 2026 Sanju. Built with Next.js & Tailwind CSS.
    </p>

    <a
      href="#home"
      className="text-gray-400 hover:text-purple-400 transition"
    >
      Back to top ↑
    </a>
  </div>
</footer>
    </main>
  );
}