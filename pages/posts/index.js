import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helper/post-util';

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All of my posts</title>
        <meta
          name="description"
          content="Here is the list of all my programming tutorials and posts."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
