import PostsGrid from '../../posts/posts-grid';
import classes from './feauteredPosts.module.scss';
const FeauteredPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeauteredPosts;
