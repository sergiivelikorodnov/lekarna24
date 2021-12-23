import { PostType } from '../../types/post-type';
import PostInfo from './post-info';

type PostProps = {
  post:PostType
}

function PostVimeo({ post: { title, vimeoId, categories }, post }: PostProps): JSX.Element {
  return (
    <div className={`mad-col mad-grid-item ${categories.map((category) => `mad-category-${category}` ).join(' ')}`}>
      {/* <!--================ Entity ================--> */}
      <article className="mad-entity">
        <div className="mad-entity-media">
          <div className="video_wrapper video_wrapper_full js-videoWrapper image-2">
            <iframe title={title} className="videoIframe js-videoIframe" allowFullScreen
              data-src={`https://player.vimeo.com/video/${vimeoId}?title=0&amp;byline=0&amp;portrait=0`}
            >
            </iframe>
            <button className="videoPoster js-videoPoster"></button>
          </div>
        </div>
        <PostInfo post={post}/>
      </article>
      {/* <!--================ End of Entity ================--> */}
    </div>
  );
}


export default PostVimeo;
