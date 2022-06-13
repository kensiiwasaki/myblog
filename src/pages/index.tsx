import { userInfo } from "os";
import { FC, useCallback, useEffect, useState } from "react";
import { client } from "../../libs/client";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";

type Props = {
  blog: string;
};

const Home: FC<Props> = ({ blog }) => {
  const [posts, setPosts] = useState<any>([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://api.github.com/users/kensiiwasaki");
    const user = await res.json();
    setPosts(user);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts.name);

  return (
    <div>
      <Header />
      <Blog blog={blog} />
      <div>{posts.name}</div>
      <Footer />
    </div>
  );
};

export default Home;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
