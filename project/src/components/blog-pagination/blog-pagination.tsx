import { Link } from 'react-router-dom';
import { PostPerPage, TotalPosts } from '../../const';

function BlogPagination(): JSX.Element {
  const numberPages:number = Math.ceil(TotalPosts / PostPerPage);
  const pages = [];

  for (let i = 1; i <= numberPages; i++) {
    pages.push(i);
  }

  const currentPage = 2;

  return (
    numberPages > 1 ?
      <ul className="mad-pagination justify-content-center" >
        { currentPage > 1 ?
          <li>
            <Link to={`/blog/${currentPage-1}`} className="prev mad-arrows"></Link>
          </li>
          :
          <>
          </>}
        {pages.map((page) => (
          <li key={page}>
            {
              currentPage === page ?
                <Link to="#" className="page-numbers current">
                  {page}
                </Link>
                :
                <Link to={`/blog/${page}`} className="page-numbers">
                  {page}
                </Link>
            }

          </li>
        ))}
        { currentPage !== numberPages ?
          <li>
            <Link to={`/blog/${currentPage+1}`} className="next mad-arrows"></Link>
          </li>
          :
          <>
          </>}

      </ul>
      :
      <>
      </>

  );
}

export default BlogPagination;
