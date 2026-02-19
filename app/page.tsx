import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <p>Mini intro blah blah blah</p>
      <ul>
        <li>
          <h2>
            <Link href='/knitting'>Knitting</Link>
          </h2>
          <p>What to expect in the knitting page. wip, ufo, planned</p>
        </li>
        <li>
          <h2>
            <Link href='/crochet'>Crochet</Link>
          </h2>
          <p>What to expect in the crochet page. wip, ufo, planned</p>
        </li>
        <li>
          <h2>
            <Link href='/knitting'>Needlework</Link>
          </h2>
          <p>What to expect in the needlework page: wip, ufo, planned; freestyle, crewel, blackwork, needle point, sewing etc </p>
        </li>
        <li>
          <h2>
            <Link href='/misc'>Miscellaneous</Link>
          </h2>
          <p>What to expect in the misc page: spinning, cricket, upcycling</p>
        </li>
        <li>
          <h2>
            <Link href='/books'>Books and References</Link>
          </h2>
          <p>What to expect in the books page. list of books, scanned patterns, links. </p>
        </li>
        <li>
          <h2>
            <Link href='/materials'>Materials</Link>
          </h2>
          <p>What to expect in the knitting page: yarns floss, vinyl, needles, hooks, and beads. not photos of all but gen. </p>
        </li>
      </ul>
    </main>
  );
}
