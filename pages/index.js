import Head from 'next/head';
import FeauteredPosts from '../components/home-page/featuredPosts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../helper/post-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Goran's Blog</title>
        <meta
          name="description"
          content="This blog is all about programming and javascript frameworks"
        />
      </Head>
      <Hero />
      <FeauteredPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
