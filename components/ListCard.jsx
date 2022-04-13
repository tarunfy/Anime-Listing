import { useEffect, useState } from "react";
import Link from "next/link";
import translate from "translate";

const ListCard = ({ item }) => {
  const [desc, setDesc] = useState();
  console.log(item);
  useEffect(() => {
    async function getText() {
      const text = await translate(item.descriptions.jp, {
        from: "japanese",
        to: "english",
      });
      setDesc(text);
    }
    getText();
  }, []);

  return (
    <>
      <Link href={`/details?id=${item.id}`}>
        <div className="text-white cursor-pointer border-[1px] rounded-sm flex w-full space-x-2">
          <div className="w-[25%]">
            <img
              src={item?.cover_image}
              alt="cover-img"
              className="h-full w-24"
            />
          </div>
          <div className="w-[60%] my-2">
            <div>
              <h1>{item.titles.rj}</h1>
              <p className="truncate max-w-xl">{desc}</p>
            </div>
            <div className="flex items-center justify-start space-x-1 flex-wrap mt-2">
              {item.genres.slice(0, 3).map((genre, index) => (
                <div key={index} className="bg-red-600 p-2 rounded-md mb-2">
                  <p className="text-white text-xs">{genre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListCard;
