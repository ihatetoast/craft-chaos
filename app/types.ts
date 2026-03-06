// home

export type CraftCatetoryType = {
  id: string;
  title: string;
  description: string;
  href:string
}


// media
export type Location = {
  onLoan: boolean;
  borrower: string | null;
  notes?: string;
}

export type Author = {
  lastName: string;
  firstName: string;
}

export type Topic = 'knitting' | 'crochet' | 'embroidery' | 'hand sewing' | 'machine sewing' | 'felt' | 'misc crafts';
export type MediaType = 'book' | 'magazine' | 'printout' | 'iron-on transfer';
export type MediaEntry = {
  id: number;
  title: string;
  author: Author[] | null;
  topics: Topic[];
  mediaType: MediaType;
  link: string | null;
  imageSrc: string | null;
  location: Location;
  notes?: string;
}