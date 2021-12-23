import { Link } from 'react-router-dom';
import { BlogFilterValues } from '../../const';

function BlogFilter(): JSX.Element {
  return (
    <nav className="mad-filter-wrap">
      <ul id="portfolio-filter" className="mad-filter justify-content-center">
        <li>
          <Link to="#" data-filter="*" className="mad-active">
            All
          </Link>
        </li>
        {Object.entries(BlogFilterValues).map(([key, value]) => (
          <li key={key}>
            <Link to={`/blog/${key}`} data-filter={`.mad-category-${key}`}>
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BlogFilter;
