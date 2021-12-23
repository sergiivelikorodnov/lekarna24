import { PostFormat } from '../const';
import { PostType } from '../types/post-type';

export const blogPosts: PostType[] = [
  {
    title:
      'Herbs and Supplements May Protect You From the Coronavirus Epidemic',
    excerpt:
      'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend,elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.',
    categories: ['covid', 'tips', 'tricks'],
    format: PostFormat.FeaturedImage,
    permalink: 'blog_single_sidebar.html',
    featuredImage: 'images/974x656_img1.jpg',
    id: 1,
    comments: 0,
    date: '2021-05-08T14:13:56.569Z',
    tags: [
      'COVID-19',
      'Immune',
    ],
  },

  {
    title: 'Blockquote Post',
    blockquote:
      'Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim.',
    author: 'Patrik Smith',
    city: 'Los Angeles, CA',
    categories: ['tips'],
    format: PostFormat.Blockquote,
    permalink: 'blog_single_sidebar.html',
    id: 2,
    comments: 0,
    date: '2021-05-08T14:13:56.569Z',
  },

  {
    title:
      '5 Essential Natural Stress Relief Products for That Help Calm You Down',
    youtubeId: 'Hx02rTTO_oE',
    excerpt:
      'Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede.',
    categories: ['wellness'],
    format: PostFormat.Youtube,
    permalink: 'blog_single_sidebar.html',
    id: 3,
    comments: 1,
    date: '2021-05-08T14:13:56.569Z',
    tags: [
      'Wellness',
    ],
  },

  {
    title:
      'This Music is Scientifically Proven to Help You Relax and Stay Calm',
    soundcloudId: '672986156',
    excerpt:
      'Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipisMauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis.',
    categories: ['covid'],
    format: PostFormat.SoundCloud,
    permalink: 'blog_single_sidebar.html',
    id: 4,
    comments: 1,
    date: '2021-09-19T14:13:56.569Z',
    tags: [
      'COVID-19',
    ],
  },

  {
    title:
      '5 Tips to Improve Your Fever Symptoms',
    vimeoId: '228076739',
    excerpt:
      'Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipisMauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in,auctor ut, ligula. Aliquam dapibus tincidunt metus.',
    categories: ['immune'],
    format: PostFormat.Vimeo,
    permalink: 'blog_single_sidebar.html',
    id: 5,
    comments: 3,
    date: '2021-10-19T14:13:56.569Z',
    tags: [
      'Immune',
    ],
  },

  {
    title:
      'Link Post',
    excerpt:
      'Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.',
    categories: ['immune'],
    format: PostFormat.Link,
    permalink: 'blog_single_sidebar.html',
    id: 6,
    comments: 3,
    date: '2021-11-19T14:13:56.569Z',
    link:'https://facebook.com',
    tags: [
      'Immune',
    ],
  },

  {
    title:
      'Herbs and Supplements May Protect You From the Coronavirus Epidemic',
    excerpt:
      'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend,elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi.',
    categories: ['care'],
    format: PostFormat.Gallery,
    permalink: 'blog_single_sidebar.html',
    gallery: [
      'images/974x656_img2.jpg',
      'images/974x656_img3.jpg',
      'images/974x656_img4.jpg',
    ],
    id: 7,
    comments: 1,
    date: '2021-06-08T14:13:56.569Z',
    tags: [
      'Care',
    ],
  },
];
