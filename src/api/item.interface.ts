export interface IItem {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity?: number
}

export interface ICollectionItemProps {
  item: IItem
  addItem?: (item: any) => any
}

export interface ICollectionPreviewProps {
  title: string;
  routeName: string;
  items: IItem[];
}