export interface Product {
  _id: string,
  name: string,
  cost: number,
  category: string,
  img: {
    url: string,
    hdUrl: string
  }
}

export enum Filter {
  MostRecent = 'Most Recent',
  LowestPrice = 'Lowest Price',
  HighestPrice = 'Highest Price'
}
