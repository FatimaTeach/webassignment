'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything Possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            laudantium, odit itaque facilis possimus eligendi in tempore! Eaque
            fuga nisi, facilis numquam dolorum labore saepe enim sequi omnis,
            quaerat velit.
          </p>
          <div className="flex-col md:flex-row md:flow gap-5 space-x-2">
            <Link href="/my.skills" 
            className="rounded-[300px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            learn more
            </Link>

            <Link href="/my-projects" 
            className="rounded-[300px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            {/* <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"> */}
              My Projects
              
            </Link>
            <Link href="/contact-me" 
            className="rounded-[300px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] space-x-10">
              Contact me
          
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
            <Link href="/my.skills" 
            className="rounded-[200px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            learn more
            </Link>

            <Link href="/my-projects" 
            className="rounded-[200px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
           
              My Projects
              
            </Link>
            <Link href="/contact-me" 
            className="rounded-[200px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
  
              Contact me
              
            </Link>
          </div>

          <div className="absolute bottom-0 right-0 z-[10]">
            <Image
             src="/horse.png"
             alt="horse"
             height={300}
             width={300}
             className="absolute right-55 top-40"
             />
             <Image src="/cliff.webp" alt="cliff" width={400} height={400}/>
          </div>
          <div className="absolute bottom-0 z-[5] w-full h-full">
            <Image
             src="/trees.webp"
             alt="trees"
             height={2000}
             width={2000}
             className="w-full h-full"
             />
          </div>
          <Image
           src="/stars.png"
           alt="stars"
           height={300}
           width={300}
           className="absolute top-10 left-0 z-[10]"
           />
    </main>
  );
}
