import {Quote} from "./Quote";

export type Movie = {
  id:number,
  title:string,
  year:number
  quotes?:Quote[],
}
