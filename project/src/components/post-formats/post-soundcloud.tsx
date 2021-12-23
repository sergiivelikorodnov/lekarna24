import { PostType } from '../../types/post-type';
import PostInfo from './post-info';

type PostProps = {
  post:PostType
}

function PostSoundCloud({ post: { title, soundcloudId, categories }, post }: PostProps): JSX.Element {
  return (
    <div className={`mad-col mad-grid-item ${categories.map((category) => `mad-category-${category}` ).join(' ')}`}>
      {/* <!--================ Entity ================--> */}
      <article className="mad-entity">
        <div className="mad-entity-media">
          <div className="mad-fullwidth-iframe">
            <iframe title={title} width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}>
            </iframe>

          </div>
        </div>
        <PostInfo post={post}/>
      </article>
      {/* <!--================ End of Entity ================--> */}
    </div>
  );
}


export default PostSoundCloud;
