import Image from "next/image";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const projects = [
  {
    name: "quickcast",
    description: "boost your efficiency with hotkeys and ai",
    link: "https://quickcast.lol/",
  },
  {
    name: "chatgenie",
    description:
      "text and chat with any character, dead or alive, real or made up",
    link: "https://chatgenie.xyz/",
  },
  {
    name: "is your shot broke",
    description: "check if your basketball shot is broken",
    link: "https://huggingface.co/spaces/patrickpc/isyourshotbroke",
  },
  {
    name: "readingmood",
    description:
      "create a spotify playlist that matches the vibe of your favorite book",
    link: "https://readingmood.xyz/",
  },
  {
    name: "spidersona",
    description: "turn your portrait into a spider-man character",
    link: "https://spidersona.vercel.app/",
  },
  {
    name: "ethpasskit",
    description: "a react component library for generating mobile passes",
    link: "https://ethpasskit.vercel.app/",
  },
  {
    name: "mintibbl",
    description: "draw, guess, and mint with your friends on the blockchain",
    link: "https://mintibbl.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 py-12">
      <div className="w-full max-w-xl flex flex-col gap-8">
        <section className="">
          <Image
            className="rounded-full select-none object-cover"
            src="/killua.jpeg"
            alt="Killua"
            width={75}
            height={75}
            priority
          />
        </section>

        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">patrick pascual</h1>
            <p className="text-sm text-[#71717A]">fullstack dev</p>
          </div>

          <div className="flex items-center justify-center gap-4 text-xl">
            <a href="https://twitter.com/_patrickpc" target="_blank">
              <AiOutlineTwitter />
            </a>
            <a href="https://github.com/patrick-pc" target="_blank">
              <AiOutlineGithub />
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-mono text-lg tracking-tighter">projects</h2>

          {projects.map((project) => (
            <a
              className="flex flex-col gap-2 mt-2 text-sm"
              href={project.link}
              target="_blank"
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
