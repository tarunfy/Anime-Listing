import Layout from "../components/Layout";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <Layout title="AnimeLand || Home">
      <div className="h-full w-full">
        <img
          src="./cover.jpeg"
          alt="Hero"
          className="h-full w-full object-cover relative"
        />
        <div className="img-container space-y-4 flex justify-center items-center flex-col px-3">
          <h1 className="text-4xl text-white font-bold text-center">
            Single <span className="text-red-500">platform</span> for your
            favourite <span className="text-red-500">Anime</span> info.
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              required
              className="p-2 focus:outline-none outline-none placeholder:text-lg"
              placeholder="Anime name"
            />
            <Link href="/list">
              <a className="bg-red-600 text-white p-2 flex items-center">
                Find <IoIosArrowForward className="text-white h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
