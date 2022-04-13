import React from "react";

const list = ({ list }) => {
  console.log(list);
  return <div>list</div>;
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
