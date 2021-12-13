import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer1 from '../../ui/footers/footer1/footer1';
import Header1 from '../../ui/headers/header1/header1';

function Blog(): JSX.Element {
  return (
    <div id="mad-page-wrapper" className="mad-page-wrapper">
      <Header1 />
      <Breadcrumbs/>
      <div className="mad-content no-pd">
        <div className="container">

        </div>
      </div>
      <Footer1/>
    </div>
  );
}

export default Blog;
