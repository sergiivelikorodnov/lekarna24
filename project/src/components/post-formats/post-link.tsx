import { PostType } from '../../types/post-type';

type PostProps = {
  post: PostType;
};

function PostLink({
  post: { link, excerpt, categories },
  post,
}: PostProps): JSX.Element {
  return (
    <div
      className={`mad-col mad-grid-item ${categories
        .map((category) => `mad-category-${category}`)
        .join(' ')}`}
    >
      <a
        href={link}
        className="mad-entity-link-element"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-link"></i>
        {excerpt}
      </a>
    </div>
  );
}

export default PostLink;
