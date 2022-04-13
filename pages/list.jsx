import ListCard from "../components/ListCard";

const list = ({ list }) => {
  return (
    <div className="h-screen w-screen bg-black/95 p-4">
      <h1 className="text-center text-2xl text-white font-medium">
        Anime found{" "}
        <span className="text-red-600 font-bold">({list.length})</span>
      </h1>
      <li className="mt-5 md:w-2/4 mx-auto space-y-4">
        {list.map((item, index) => (
          <ul key={index}>
            <ListCard item={item} />
          </ul>
        ))}
      </li>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const title = query.title;
  try {
    const res = await fetch(
      `https://api.aniapi.com/v1/anime?title=${title}&status=0&nsfw=false&with_episodes=false`
    );
    const data = await res.json();

    return {
      props: {
        list: data?.data?.documents,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default list;
