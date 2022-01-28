export interface Product {
  // [x: string]: any;
  id: string,
  name: string,
  cost: number,
  category: string,
  img: {
    url: string,
    hdUrl: string
  }
}

export enum Filter {
  MostRecent = 'MostRecent',
  LowestPrice = 'LowestPrice',
  HighestPrice = 'HighestPrice'
}
