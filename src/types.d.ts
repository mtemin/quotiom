export type Category = {
  categoryTitle:string,
  categoryDescription?:string
}

export type FamousPeople = {
  name:string,
  title:string | string[],
  aliases?: string | string[],

}
