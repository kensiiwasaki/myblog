import Link from "next/link";
import { FC } from "react";
import { client } from "../../../libs/client";
import styles from "./Blog.module.scss";

type Props = {
  blog: any;
};

const Blog: FC<Props> = ({ blog }) => {
  return (
    <div>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id} className={styles.blogList}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
