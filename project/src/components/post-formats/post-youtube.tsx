import { PostType } from '../../types/post-type';
import PostInfo from './post-info';

type PostProps = {
  post:PostType
}

function PostYoutube({ post: { title, youtubeId, categories }, post }: PostProps): JSX.Element {
  return (
    <div className={`mad-col mad-grid-item ${categories.map((category) => `mad-category-${category}` ).join(' ')}`}>
      {/* <!--================ Entity ================--> */}
      <article className="mad-entity">
        <div className="mad-entity-media">
          <div className="mad-responsive-iframe">
            <iframe title={title}
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&amp;showinfo=0&amp;autohide=2&amp;controls=0&amp;enablejsapi=1`}
            >
            </iframe>
          </div>
        </div>
        <PostInfo post={post}/>
      </article>
      {/* <!--================ End of Entity ================--> */}
    </div>
  );
}


export default PostYoutube;
