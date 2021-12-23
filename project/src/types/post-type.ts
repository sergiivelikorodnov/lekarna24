import { PostFormat } from '../const';

export type PostType = {
  title: string,
  categories: string[],
  format: PostFormat,
  featuredImage?: string,
  tags?: string[],
  permalink: string,
  id: number,
  date: string,
  comments: number,
  excerpt?: string,
  blockquote?: string,
  author?: string,
  city?: string,
  youtubeId?: string,
  soundcloudId?: string,
  vimeoId?: string,
  gallery?: string[],
  singlePost?: string,
  link?: string
}


