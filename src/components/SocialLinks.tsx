import { FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6 ">
      <a
        href="https://github.com/vincent-softdev"
        target="_blank"
        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
      >
        <FiGithub size={20} /> GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/the-vinh-ly/"
        target="_blank"
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
      >
        <FiLinkedin size={20} /> LinkedIn
      </a>
      <a
        href="https://vincently.dev/"
        target="_blank"
        className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition"
      >
        <FiGlobe size={20} /> Portfolio
      </a>
    </div>
  );
};

export default SocialLinks;
