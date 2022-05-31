import { client } from "../../libs/client";
import Blog from "./components/Blog";

export default function Home({ blog }) {
  return (
    <div>
      <Blog blog={blog} />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
