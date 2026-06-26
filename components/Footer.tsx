import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-xl">DSM Studio</h3>
          <p className="text-zinc-500 text-sm mt-1">
            Full Stack Developer & Digital Builder
          </p>
        </div>

        <div className="flex items-center gap-5 text-xl text-zinc-400">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}