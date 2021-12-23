import { PostType } from '../../types/post-type';
import PostInfo from './post-info';

type PostProps = {
  post:PostType
}

function PostFeaturedImage({ post: { title, featuredImage, categories }, post }: PostProps): JSX.Element {
  return (
    <div className={`mad-col mad-grid-item ${categories.map((category) => `mad-category-${category}` ).join(' ')}`}>
      {/* <!--================ Entity ================--> */}
      <article className="mad-entity">
        <div className="mad-entity-media">
          <img src={featuredImage} alt={title} />
        </div>
        <PostInfo post={post}/>
      </article>
      {/* <!--================ End of Entity ================--> */}
    </div>
  );
}


export default PostFeaturedImage;
