import { FC } from "react";
import { client } from "../../libs/client";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";

type Props = {
  blog: string;
};

const Home: FC<Props> = ({ blog }) => {
  return (
    <div>
      <Header />
      <Blog blog={blog} />
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
