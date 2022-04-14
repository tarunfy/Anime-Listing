import React, { useEffect, useState } from "react";
import translate from "translate";

const Details = ({ data }) => {
  const [desc, setDesc] = useState("");

  useEffect(() => {
    async function getText() {
      const text = await translate(
        data?.descriptions.jp || data?.descriptions.en,
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
    <div className="bg-black/95 h-screen w-full space-y-3">
      <div className="h-2/4 relative">
        <img
          src={data?.banner_image}
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="img-container !bg-black/35 p-4 w-full flex flex-col justify-end items-start">
          <div className="w-full space-y-3">
            <h1 className="text-white text-2xl  font-bold lg:text-3xl">
              {data?.titles.en || data?.titles.jp}
            </h1>
            <p className="text-white text-xs sm:text-sm lg:text-base">{desc}</p>
          </div>
        </div>
      </div>

      <div className="p-4 h-[48%]">
        <div className="h-[80%]">
          {data?.trailer_url ? (
            <>
              <h1 className="text-white text-2xl lg:text-3xl">Watch Trailer</h1>
              <iframe
                src={data?.trailer_url}
                className="w-full h-[80%]"
              ></iframe>
            </>
          ) : (
            <div className="flex justify-center items-center h-[80%]">
              <h1 className="text-white text-2xl italic">No Trailer Url</h1>
            </div>
          )}
        </div>
        <div className="flex justify-evenly items-center">
          <p className="text-white/80 text-lg">
            nsfw:{" "}
            <span
              className={`${data.nsfw ? "text-red-500" : "text-green-500"} `}
            >
              {data.nsfw ? "Yes" : "No"}
            </span>
          </p>
          <p className="text-white/80 text-lg">
            Rating: <span className="text-green-500">{data.score}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  try {
    const res = await fetch(`https://api.aniapi.com/v1/anime/${id}`);
    const data = await res.json();

    return {
      props: data,
    };
  } catch (err) {
    console.log(err);
  }
  console.log(id);
};

export default Details;
