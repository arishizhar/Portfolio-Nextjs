// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// import Spotlight from "./components/Spotlight";

// export default function Home() {
//   return (
//     <Spotlight>
//       <div className="flex items-center justify-center min-h-screen text-red-200">
//         <h1 className="text-4xl font-bold text-red-100">
//           Welcome to My Portfolio
//         </h1>
//         <h1 className="text-red-500 bg-green p-20">Red Text</h1>
//         <h1 className="text-red-500">Tailwind red works!</h1>
//         <h2 className="text-accent">Custom cyan accent works!</h2>
//       </div>
//     </Spotlight>
//   );
// }

import {
  MapPin,
  MapPinned,
  Mail,
  Linkedin,
  Github,
  Download,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    // <Spotlight
    //   spotlightColor="rgba(14, 165, 233, 0.15)" // Sky-400/aqua with transparency
    //   backgroundColor="#0b0f10" // Jet color
    //   spotlightSize={600} // Larger spotlight for better effect
    // >

    <>
      {/* Main overall div container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-12 lg:py-0">
        {/* div that contains the hero and main content section */}
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Header with the name position location logos and resume and nav in order */}
          <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-[48%] lg:justify-between lg:py-24">
            <div>
              <h1 className="text-5xl font-bold text-slate-200 sm:text-6xl tracking-tight">
                Arish Izhar
              </h1>

              <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">
                Full Stack Engineer
              </h2>
              {/* Location and pin icon  */}
              <div className="mt-2 flex items-center gap-2 text-slate-400 text-lg">
                <MapPin className="w-6 h-6 text-slate-400" />
                <span className="text-xl font-medium tracking-tight text-slate-400 sm:text-lg">
                  ON, Canada
                </span>
              </div>
            </div>

            {/* Logos and socials */}
            <ul
              className="ml-1 mt-10 flex items-center gap-6"
              aria-label="Social Media"
            >
              <li>
                <a
                  href="mailto:youremail@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                >
                  <Download className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:youremail@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  title="Email"
                  className="block rounded-2xl bg-slate-400 p-1 transition-colors hover:bg-slate-100"
                >
                  <Mail className="w-6 h-6 text-slate-800" />
                </a>
              </li>
            </ul>
          </header>
        </div>
      </div>
      {/* <div className="flex items-center justify-center min-h-screen">
        <div className="group relative z-10 max-w-xs rounded-xl p-6 text-center transition-all duration-300">
          <h2 className="mb-2 text-xl font-bold text-sky-400">My Portfolio</h2>
          <p className="mb-3 text-sm text-sky-200">Welcome to my work</p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-sky-400/20 px-4 py-1 text-sm font-medium text-sky-100 backdrop-blur-sm">
              React
            </span>
            <span className="rounded-full bg-sky-400/20 px-4 py-1 text-sm font-medium text-sky-100 backdrop-blur-sm">
              Tailwind
            </span>
          </div>
        </div>
      </div> */}
    </>
    //  </Spotlight>
  );
}
