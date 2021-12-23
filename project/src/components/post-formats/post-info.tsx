import { Link } from 'react-router-dom';
import { PostType } from '../../types/post-type';
import { getHumanDate } from '../../utils/utils';
import PostShare from './post-share';

type PostInfoProps = {
  post: PostType;
};

function PostInfo({
  post: { title, tags, permalink, date, comments, excerpt },
}: PostInfoProps): JSX.Element {
  return (
    <div className="mad-entity-body">
      <div className="mad-entity-header">
        {tags ? (
          <div className="mad-entity-about">
            {tags.map((tag, index) =>
              index===tags.length-1 ? (
                <Link key={tag} to={tag}>
                  {tag}
                </Link>
              ) : (
                <Link key={tag} to={tag}>
                  {tag},{' '}
                </Link>
              ),
            )}
          </div>
        ) : null}
        <h3 className="mad-entity-title">
          <Link to={permalink}>{title}</Link>
        </h3>
        <div className="mad-entity-tags">
          <span>{getHumanDate(date)}</span>
          <span>&nbsp;|&nbsp;</span>
          <Link to="#" className="mad-link">
            {comments} {comments>1 ? 'Comments': 'Comment'}
          </Link>
        </div>
      </div>
      <p>{excerpt}</p>
      <div className="mad-entity-footer">
        <Link to={permalink} className="mad-read-more">
          Read More
        </Link>
        <PostShare permalink={permalink} title={title} />
      </div>
    </div>
  );
}

export default PostInfo;
