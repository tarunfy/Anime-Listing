import Link from "next/link";
import ListCard from "../components/ListCard";
import Layout from "../components/Layout";

const List = ({ list }) => {
  return (
    <>
      <Layout title="AnimeLand || List">
        <div className="h-screen w-screen bg-black/95 p-4">
          {list.length <= 0 ? (
            <div className="h-full w-full flex flex-col space-y-3 justify-center items-center">
              <p className="text-white text-3xl">Anime not found</p>
              <Link href="/">
                <a className="p-2 rounded-sm bg-red-600 text-white text-lg">
                  Go Back
                </a>
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-white font-medium">
                Total Animes{" "}
                <span className="text-red-600 font-bold">({list?.length})</span>
              </h1>
              <ul className="mt-7 max-w-3xl mx-auto space-y-4 h-[90%] overflow-y-scroll">
                {list?.map((item, index) => (
                  <li key={index}>
                    <ListCard item={item} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const title = query.title;
  console.log("hidsicnsd");
  try {
    const res = await fetch(
      title
        ? `https://api.aniapi.com/v1/anime?title=${title}&status=0&nsfw=true&with_episodes=false`
        : "https://api.aniapi.com/v1/random/anime/5/true"
    );
    const data = await res.json();
    return {
      props: {
        list: title
          ? data?.data?.documents
            ? data?.data?.documents
            : []
          : data?.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default List;
