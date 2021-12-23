import { PostType } from '../../types/post-type';

type PostProps = {
  post:PostType
}

function PostBlockquote({ post: { categories, blockquote, author, city }}: PostProps): JSX.Element {
  return (
    <div className={`mad-col mad-grid-item ${categories.map((category) => `mad-category-${category}` ).join(' ')}`}>
      <div className="mad-testimonials">
        <div className="mad-testimonial-bg color-2">
          <div className="mad-testimonial">
            <div className="mad-testimonial-info">
              <blockquote>
                <p>{blockquote}</p>
              </blockquote>
            </div>
            <div className="mad-author">
              <div className="mad-author-info">
                <span className="mad-author-name">{author}</span>
                <cite>{city}</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default PostBlockquote;
