import Image from "next/image";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    name: "thoreo",
    description: "ai marketing agent",
    link: "https://thoreo.com/",
  },
  {
    name: "claude desktop",
    description: "faster access to claude",
    link: "https://claudedesktop.com/",
  },
  {
    name: "quickcast",
    description: "get instant access to chatgpt with a single shortcut key",
    link: "https://quickcastai.vercel.app/",
  },
  {
    name: "chatgenie",
    description: "chat with any character, dead or alive, real or made up",
    link: "https://chatgenie.vercel.app/",
  },
  {
    name: "is your shot broke",
    description: "check if your basketball shooting form is broken",
    link: "https://huggingface.co/spaces/patrickpc/isyourshotbroke",
  },
  {
    name: "readingmood",
    description:
      "create a spotify playlist that matches the vibe of your favorite book",
    link: "https://bookvibes.vercel.app/",
  },
  {
    name: "spidersona",
    description: "turn your selfie into a spider-man character",
    link: "https://spidersona.vercel.app/",
  },
  {
    name: "ethpasskit",
    description: "a react component library for generating mobile passes",
    link: "https://ethpasskit.vercel.app/",
  },
  {
    name: "mintibbl",
    description: "draw, guess, and mint your friends on the blockchain",
    link: "https://mintibbl.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 pt-12 pb-24">
      <div className="w-full max-w-xl flex flex-col gap-8">
        {/* <section className="">
          <Image
            className="rounded-full select-none object-cover shrink-0"
            src="/pfp.png"
            alt="Patrick Pascual"
            width={70}
            height={70}
            priority
          />
        </section> */}

        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">patrick pascual</h1>
            {/* <p className="text-sm text-[#71717A]">lvl 27</p> */}
          </div>

          <div className="flex items-center justify-center gap-4 text-xl">
            <a href="https://x.com/_patrickpc" target="_blank">
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#141413] h-4 w-4"
              >
                <path
                  d="M14.94 2h2.715l-5.93 6.777L18.7 18h-5.462L8.96 12.407 4.065 18H1.35l6.342-7.25L1 2h5.6l3.868 5.113L14.94 2Zm-.952 14.375h1.504L5.784 3.54H4.17l9.818 12.836Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="https://github.com/patrick-pc" target="_blank">
              <FiGithub className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-mono tracking-tighter">projects</h2>

          {projects.map((project, i) => (
            <a
              className="flex flex-col gap-2 mt-2 text-sm"
              href={project.link}
              target="_blank"
              key={i}
            >
              <h3 className="font-medium underline underline-offset-4">
                {project.name}
              </h3>
              <p className="text-[#71717A]">{project.description}</p>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
