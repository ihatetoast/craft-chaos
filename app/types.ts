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

export type MediaEntry = {
  id: number;
  title: string;
  author: Author | null;
  topics: Topic[];
  mediaType: 'book' | 'magazine' | 'printout';
  link: string | null;
  imageSrc: string;
  location: Location;
  notes?: string;
}