import { useEffect, useState } from "react";
import Link from "next/link";
import translate from "translate";
import { MdDoubleArrow } from "react-icons/md";

const ListCard = ({ item }) => {
  const [desc, setDesc] = useState();
  console.log(item);

  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;

  useEffect(() => {
    async function getText() {
      const text = await translate(
        item.descriptions.jp || item.descriptions.en,
        {
          from: "japanese",
          to: "english",
        }
      );
      setDesc(text);
    }
    getText();
  }, []);

  return (
    <>
      <div className="text-white relative border-[1px] rounded-sm flex w-full space-x-2">
        <div className="w-[25%]">
          <img
            src={item?.cover_image}
            alt="cover-img"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[60%] my-2">
          <div>
            <h1 className="text-lg md:text-2xl sm:text-xl font-semibold truncate">
              {item.titles.en || item.titles.rj}
            </h1>
            <p className="max-w-xl text-sm md:text-lg sm:text-base">
              {truncate(desc, 60)}
            </p>
          </div>
          <div className="flex items-center justify-start space-x-2 flex-wrap mt-2 ">
            {item.genres.slice(0, 3).map((genre, index) => (
              <div
                key={index}
                className="border-[1px] border-red-500 text-red-600 p-1 rounded-md mb-2"
              >
                <p className="text-white text-xs sm:text-base">{genre}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-normal sm:mt-2 md:mt-6 absolute bottom-2 right-2">
            Rating:{" "}
            <span className="text-green-500 font-medium">{item.score}%</span>
          </p>
          <Link href={`/details?id=${item.id}`}>
            <a className="text-base mt-4 bg-red-600  flex justify-center items-center w-fit py-1 px-2">
              Read more <MdDoubleArrow className="ml-1" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListCard;
