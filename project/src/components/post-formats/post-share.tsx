type PostFooterType = {
  permalink: string,
  title: string,
}

function PostShare({ permalink, title }: PostFooterType): JSX.Element{
  const location = window.location.href;
  return (
    <div className="mad-entity-footer">
      <div className="mad-share-wrap">
        <span>Share:</span>
        <div className="mad-social-icons type-2">
          <ul>
            <li>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${location}${permalink}`} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href={`https://twitter.com/intent/tweet?url=${location}${permalink}&via=getboldify&text=${title}`} className="color-2"  target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={`mailto:?subject= I want to share this with you &amp;body= Hi there, Check out this site ${location}${permalink}. Thanks.`} className="color-3"  target="_blank" rel="noreferrer">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href={`http://pinterest.com/pin/create/button/?url=${location}${permalink}&description=${title}`} className="color-4"  target="_blank" rel="noreferrer">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostShare;
