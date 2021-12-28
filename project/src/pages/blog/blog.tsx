import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogClassic from '../../components/blog-classic/blog-classic';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Newsletter from '../../components/Newsletter/newsletter';
import { blogPosts } from '../../mocks/posts-mocks';
import { fetchOffersAction } from '../../store/api-actions';
import { getAllPosts } from '../../store/selectors';
import Footer1 from '../../ui/footers/footer1/footer1';
import Header1 from '../../ui/headers/header1/header1';

function Blog(): JSX.Element {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  // eslint-disable-next-line no-console
  console.log(posts);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <div id="mad-page-wrapper" className="mad-page-wrapper">
      <Header1 />
      <Breadcrumbs/>
      <div className="mad-content no-pd">
        <div className="container">
          <BlogClassic posts={ blogPosts}/>
          <Newsletter/>
        </div>
      </div>
      <Footer1/>
    </div>
  );
}

export default Blog;
