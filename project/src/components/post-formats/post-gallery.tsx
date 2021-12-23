import { PostType } from '../../types/post-type';
import PostInfo from './post-info';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

type PostProps = {
  post:PostType
}

function PostGallery({ post: { title, gallery, categories }, post }: PostProps): JSX.Element {
  return (
    <div className={`mad-col mad-grid-item ${categories.map((category) => `mad-category-${category}` ).join('')}`}>
      {/* <!--================ Entity ================--> */}
      <article className="mad-entity">
        <div className="mad-entity-media">
          <Swiper navigation className="mySwiper">
            {gallery ? gallery.map((image) =>
              <SwiperSlide key={image}><img src={image} alt={title}/></SwiperSlide>,
            ):''}
          </Swiper>
        </div>
        <PostInfo post={post}/>
      </article>
      {/* <!--================ End of Entity ================--> */}
    </div>
  );
}


export default PostGallery;
