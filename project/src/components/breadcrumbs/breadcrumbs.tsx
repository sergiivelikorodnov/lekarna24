import { Link } from 'react-router-dom';

function Breadcrumbs(): JSX.Element {
  return (
    <div className="mad-breadcrumb align-center">
      <div className="container">
        <nav className="mad-breadcrumb-path">
          <span>
            <Link to="index.html" className="mad-link">
              Home
            </Link>
          </span>{' '}
          / <span>Classic Blog Without Sidebar</span>
        </nav>
        <h1 className="mad-page-title">Classic Blog Without Sidebar</h1>
      </div>
    </div>
  );
}

export default Breadcrumbs;
