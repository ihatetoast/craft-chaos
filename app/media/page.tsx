import React from 'react';

// books, mags, etc are in a json file.
// export type MediaType = 'book' | 'magazine' | 'printout' | 'iron-on transfer';
// group by media type. link out books and mags together and printout/iron-on together
// do not fold because i will recognize a cover/image over a title. Rather just scroll. this is for me!


// - /media/books-and-mags
// - /media/patterns
const Media = () => {
  return (
    <>
      <section>
        <h2>books and mags</h2>
        <p>filter one for embroidery, knitting, crochet</p>
        <p>link out to see more (books and mags)</p>
      </section>
      <section>
        <h2>iron-on transfers, printouts, and patterns</h2>
        <p>filter one from 3-4</p>
        <p>link out to see more patterns</p>
      </section>
    </>
  );
};

export default Media;
