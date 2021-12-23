import { PostFormat } from '../../const';
import { PostType } from '../../types/post-type';
import BlogFilter from '../blog-filter/blog-filter';
import BlogPagination from '../blog-pagination/blog-pagination';
import PostBlockquote from '../post-formats/post-blockquote';
import PostFeaturedImage from '../post-formats/post-featured-image';
import PostGallery from '../post-formats/post-gallery';
import PostLink from '../post-formats/post-link';
import PostSoundCloud from '../post-formats/post-soundcloud';
import PostVimeo from '../post-formats/post-vimeo';
import PostYoutube from '../post-formats/post-youtube';

type PostsProps = {
  posts: PostType[]
}

function BlogClassic({posts}:PostsProps): JSX.Element {
  return (
    <div className="mad-section">
      <div className="row justify-content-center">
        <main id="main" className="col-xl-9 col-lg-12">
          <BlogFilter/>
          <div
            data-isotope-layout="masonry"
            data-isotope-filter="#portfolio-filter"
            className="mad-entities type-3 mad-entities-big item-col-1 mad-grid--isotope"
          >
            <div className="mad-grid-sizer"></div>
            {posts.map((post) =>
            {
              switch (post.format) {
                case PostFormat.Blockquote:
                  return <PostBlockquote key={post.id} post={post} />;
                case PostFormat.Youtube:
                  return <PostYoutube key={post.id} post={post} />;
                case PostFormat.SoundCloud:
                  return <PostSoundCloud key={post.id} post={post} />;
                case PostFormat.Vimeo:
                  return <PostVimeo key={post.id} post={post} />;
                case PostFormat.Link:
                  return <PostLink key={post.id} post={post} />;
                case PostFormat.Gallery:
                  return <PostGallery key={post.id} post={post}/>;
                default:
                  return <PostFeaturedImage key={post.id} post={post}/>;
              }
            },
            )}
          </div>
          {/*  <!--================ End of Image Boxes ================--> */}
          <BlogPagination/>
        </main>
      </div>
    </div>
  );
}

export default BlogClassic;
