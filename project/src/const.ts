export enum AppRoute {
  Main = '/',
  Login = '/login',
  ProductId = '/product/:id',
  Favorites = '/favorites',
  Blog = '/blog',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Currencies {
  USD = 'USD',
  RUB = 'RUB',
  CNY = 'CNY',
}

export enum Languages {
  English = 'English',
  France = 'France',
  Germany = 'Germany',
}

export enum PostFormat {
  FeaturedImage = 'FeaturedImage',
  Blockquote = 'Blockquote',
  Vimeo = 'Vimeo',
  SoundCloud = 'Soundcloud',
  Youtube = 'Youtube',
  Gallery = 'Gallery',
  Link = 'Link',
}

export const BlogFilterValues = {
  covid: 'COVID-19',
  immune: 'Immune',
  personalCare: 'Personal Care',
  mumandbaby: 'Mum and Baby',
  sexualhealth: 'SexualHealth',
  tips: 'Tips',
  wellness: 'Wellness',
};

export const TotalPosts = 6;
export const PostPerPage = 3;

export enum NotificationMessage {
  PostsError = 'We couldn\'t get Posts. Check your connection',
}

export enum APIRoute {
  Posts = '/posts',
}
