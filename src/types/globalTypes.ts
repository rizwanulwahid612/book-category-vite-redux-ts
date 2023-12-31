export interface IBook {
  _id?: number;
  title: string;
  image: string;
  author: string;
  genre: string;
  publicationdate: string;
  rating: number;
  reviews?: string[];
  quantity?: number;
}
