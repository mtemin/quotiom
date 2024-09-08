export type Quote = {
  id: number,
  language:'tr' | 'en';
  text: string,
  description?:string,
  author: string,
  source?: string | string[],
  categories?: string | string[],
  likes: number,
}
