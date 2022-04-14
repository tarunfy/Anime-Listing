import { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [animeName, setAnimeName] = useState("");
  return (
    <Layout title="AnimeLand || Home">
      <div className="h-full w-full">
        <img
          src="./cover.jpeg"
          alt="Hero"
          className="h-full w-full object-cover relative"
        />
        <div className="img-container space-y-4 flex justify-center items-center flex-col px-3">
          <h1 className="text-4xl sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-white font-bold text-center xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl ">
            Single <span className="text-red-600">platform</span> for your
            favourite <span className="text-red-600">Anime</span> info.
          </h1>
          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              autoFocus={true}
              required
              className="p-2 focus:outline-none outline-none placeholder:text-lg w-2/4 md:p-4 sm:text-lg xl:text-xl"
              placeholder="Anime name"
              value={animeName}
              onChange={(e) => setAnimeName(e.target.value)}
            />
            <Link href={`/list?title=${animeName}`}>
              <button
                disabled={!animeName}
                className="bg-red-600 disabled:bg-red-500 disabled:text-white/60 disabled:cursor-not-allowed text-white p-2 flex items-center md:p-4 sm:text-lg xl:text-xl"
              >
                Find <IoIosArrowForward />
              </button>
            </Link>
          </div>
          <p className="text-2xl text-white font-medium">OR</p>
          <Link href={`/list`}>
            <button className="bg-red-600 disabled:bg-red-500 disabled:text-white/60 disabled:cursor-not-allowed text-white p-2 flex items-center md:p-4 sm:text-lg xl:text-xl">
              Get random animes <IoIosArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
