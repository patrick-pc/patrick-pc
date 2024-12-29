import { FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
      <div className="w-full max-w-xl flex flex-col">
        <section className="flex justify-between items-center fixed w-full max-w-xl px-6 pt-12">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">patrick pascual</h1>
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

        <section className="flex flex-col gap-4 justify-center items-center h-screen">
          <p>i got that dawg in me</p>
        </section>
      </div>
    </main>
  );
}
