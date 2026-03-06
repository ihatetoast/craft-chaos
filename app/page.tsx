import Link from 'next/link';

import { CraftCatetoryType } from './types';

const craftCategories: CraftCatetoryType[] = [
  {
    id: 'knitting',
    title: 'Knitting',
    description: 'Knitting WIPs or yarns and patterns set aside for something planned.',
    href: '/knitting',
  },
  {
    id: 'crochet',
    title: 'Crochet',
    description: 'Crochet WIPs or yarns and patterns set aside for something planned.',
    href: '/crochet',
  },
  {
    id: 'needle-work',
    title: 'Needlework',
    description:
      'Various embroidery and hand-sewing projects that have already been started or need finishing/framing.',
    href: '/needle-work',
  },
  {
    id: 'misc',
    title: 'Miscellaneous Crafts',
    description:
      'WIPs from spinning, die-cutting, plushie making, anything under the sun.',
    href: '/misc',
  },
  {
    id: 'books',
    title: 'Books, Mags, and Other Media',
    description:
      'Books, magazines, printouts, iron-on transfers, and other media or references.',
    href: '/media',
  },
  {
    id: 'materials',
    title: 'Materials and Tools',
    description:
      'Knitting needles, hooks, straight needles, vinyl, doodads etc. A record of what I have and where it\'s stored.',
    href: '/materials',
  },
];

export default function Home() {
  return (
    <main className='grow  bg-white/50 p-4 sm:p-6 md:p-8'>
      <p>Mini intro blah blah blah</p>
      {craftCategories.map((cat) => (
        <Link key={cat.id} href={cat.href}>
          <div>
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
