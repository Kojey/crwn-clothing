export interface IItem {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity?: number
}
export interface ISection {
  id: number
  title: string
  linkUrl: string
  imageUrl: string
  size?: string
}
export interface ICollection {
  id: number
  title: string
  linkUrl: string
  items: IItem[];
}
