import Image from "next/image";
import myImage from "../image/me.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0F12] font-sans text-[#EAEAEA] selection:bg-[#BA5B55]/30 selection:text-[#EAEAEA]">
      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2A2C32] bg-[#17181C]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="cursor-pointer text-xl font-bold tracking-tight text-[#EAEAEA]">
            Rowshan Rubayet
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://github.com/rubayet-off"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#787878] transition-colors hover:text-[#BA5B55]"
              title="GitHub"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/rowshan-rubayet-off2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#787878] transition-colors hover:text-[#BA5B55]"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/share/1Db3Pci5sK/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#787878] transition-colors hover:text-[#BA5B55]"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/rubayet.off?stkn=MXVzNjFsNndvOTV3Yg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#787878] transition-colors hover:text-[#BA5B55]"
              title="Instagram"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6 pt-16">
        {/* Hero */}
        <section className="flex w-full flex-col-reverse items-center justify-between gap-10 py-14 md:flex-row md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[#EAEAEA] sm:text-5xl md:text-6xl">
              Rowshan Rubayet
            </h1>

            <h2 className="mb-4 text-lg font-semibold leading-relaxed text-[#787878] sm:text-xl md:text-2xl">
              Undergraduate Student in Computer Science and Engineering
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-7 text-[#787878] sm:text-base md:mx-0">
              I am an undergraduate CSE student at United International
              University with a strong interest in web development, database
              systems, machine learning, teaching, and research. I enjoy
              exploring new technologies, learning through practical projects,
              and working on solutions to real-world problems.
            </p>
          </div>

          {/* Profile Image — static, no hover effect */}
          <div className="flex shrink-0 justify-center">
            <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-[#2A2C32] sm:h-60 sm:w-60 md:h-72 md:w-72">
              <Image
                src={myImage}
                alt="Rowshan Rubayet"
                fill
                priority
                unoptimized // <-- Add this to serve the original, untouched image
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="achievements"
          className="flex w-full flex-col gap-16 border-t border-[#2A2C32] py-16"
        >
          {/* Academic Profile */}
          <div className="flex flex-col">
            <h3 className="mb-8 text-xl font-bold text-[#EAEAEA]">
              Academic Profile
            </h3>

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="border-l-2 border-[#2A2C32] pl-5">
                <p className="text-sm font-semibold text-[#BA5B55]">
                  Secondary School Certificate
                </p>
                <h4 className="mt-1 text-base font-bold text-[#EAEAEA]">
                  Dhanmondi Govt. Boys&apos; High School
                </h4>
                <p className="mt-1 text-sm text-[#787878]">Dhaka, Bangladesh</p>
                <p className="mt-4 text-3xl font-bold text-[#EAEAEA]">
                  4.67
                  <span className="ml-1 text-sm font-medium text-[#787878]">
                    GPA
                  </span>
                </p>
              </div>

              <div className="border-l-2 border-[#2A2C32] pl-5">
                <p className="text-sm font-semibold text-[#BA5B55]">
                  Higher Secondary Certificate
                </p>
                <h4 className="mt-1 text-base font-bold text-[#EAEAEA]">
                  Dhaka Imperial College
                </h4>
                <p className="mt-1 text-sm text-[#787878]">Dhaka, Bangladesh</p>
                <p className="mt-4 text-3xl font-bold text-[#EAEAEA]">
                  4.75
                  <span className="ml-1 text-sm font-medium text-[#787878]">
                    GPA
                  </span>
                </p>
              </div>

              <div className="border-l-2 border-[#2A2C32] pl-5">
                <p className="text-sm font-semibold text-[#BA5B55]">
                  Bachelor of Science
                </p>
                <h4 className="mt-1 text-base font-bold text-[#EAEAEA]">
                  Computer Science &amp; Engineering
                </h4>
                <p className="mt-1 text-sm text-[#787878]">
                  United International University
                </p>
                <p className="mt-4 text-3xl font-bold text-[#EAEAEA]">
                  3.85*
                  <span className="ml-1 text-sm font-medium text-[#787878]">
                    CGPA - 9th Trimester
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col">
            <h3 className="mb-8 text-xl font-bold text-[#EAEAEA]">Experience</h3>

            <div className="relative pl-8">
              <div className="absolute left-1.25 top-2.25 h-[calc(100%-8px)] w-px bg-[#2A2C32]" />
              <div className="absolute left-0 top-2.25 h-2.5 w-2.5 rounded-full bg-[#BA5B55] ring-4 ring-[#17181C]" />

              <div className="flex flex-col gap-1 sm:gap-4 sm:flex-row sm:items-center">
                <h4 className="text-lg font-bold text-[#EAEAEA]">
                  Undergraduate Assistant (UGA)
                </h4>
                <span className="text-sm font-medium text-[#BA5B55]">
                  July 2026 – Present
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-[#787878]">
                Database Management Systems · United International University
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#787878] sm:text-base">
                Serving as an Undergraduate Assistant for the Database
                Management Systems course, where I provide academic counseling
                to students, help them understand database concepts, and assist
                with resolving project-related issues.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="flex flex-col">
            <h3 className="mb-5 text-xl font-bold text-[#EAEAEA]">
              Technical Skills
            </h3>

            <p className="mb-8 max-w-3xl text-sm leading-7 text-[#787878] sm:text-base">
              I&apos;m familiar with several key programming languages and have
              hands-on experience with web development frameworks and databases.
              I&apos;m always looking to explore new tools and expand my
              technical abilities.
            </p>

            <div className="divide-y divide-[#2A2C32] overflow-hidden rounded-2xl border border-[#2A2C32]">
              {[
                {
                  label: "Programming Languages",
                  skills: ["C", "C++", "Java", "JavaScript", "Python"],
                },
                {
                  label: "Web Development",
                  skills: ["React.js", "Next.js"],
                },
                {
                  label: "Databases",
                  skills: ["PostgreSQL", "MySQL"],
                },
              ].map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-10"
                >
                  <h4 className="shrink-0 text-sm font-semibold text-[#EAEAEA] sm:w-52">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-[#1C1D22] px-3 py-1.5 text-sm font-medium text-[#EAEAEA] ring-1 ring-inset ring-[#2A2C32]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="flex flex-col">
            <h3 className="mb-5 text-xl font-bold text-[#EAEAEA]">
              Interests & Focus Areas
            </h3>
            
            <p className="mb-6 max-w-3xl text-sm leading-7 text-[#787878] sm:text-base">
I'm really interested in Artificial Intelligence and Machine Learning, especially working with Large Language Models (LLMs). Besides coding, I love doing research to find new solutions and teaching others what I've learned.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Artificial Intelligence", "Machine Learning", "LLMs", "Research", "Teaching"].map((interest) => (
                <span
                  key={interest}
                  className="rounded-md bg-[#1C1D22] px-3 py-1.5 text-sm font-medium text-[#BA5B55] ring-1 ring-inset ring-[#2A2C32]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>


        </section>

        {/* Contact */}
        <section id="contact" className="w-full border-t border-[#2A2C32] py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#EAEAEA] sm:text-4xl">
              Contact Me
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#787878] sm:text-base">
              Feel free to reach out if you would like to connect, collaborate,
              or discuss a project or research idea.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#2A2C32] bg-[#17181C] p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1C1D22] text-[#BA5B55]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p className="text-sm text-[#787878]">Phone</p>
              <p className="mt-0.5 font-semibold text-[#EAEAEA]">01301378341</p>
            </div>

            <div className="rounded-2xl border border-[#2A2C32] bg-[#17181C] p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1C1D22] text-[#BA5B55]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <p className="text-sm text-[#787878]">Email</p>
              <p className="mt-0.5 break-all font-semibold text-[#EAEAEA]">
                rubayet.off@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-[#2A2C32] bg-[#17181C] p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1C1D22] text-[#BA5B55]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-sm text-[#787878]">Based in</p>
              <p className="mt-0.5 font-semibold text-[#EAEAEA]">
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="rounded-2xl border border-[#2A2C32] bg-[#17181C] p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1C1D22] text-[#BA5B55]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V9l7-5 7 5v12" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </div>
              <p className="text-sm text-[#787878]">Hometown</p>
              <p className="mt-0.5 font-semibold text-[#EAEAEA]">
                Munshiganj, Bangladesh
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
