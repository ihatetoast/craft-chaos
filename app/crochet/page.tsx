import Link from 'next/link'

const Crocheting = () => {
  return (
    <div>
      <h2>Current crochet projects</h2>
      <ul>
        <li><Link href="/waffle-blanket">Waffle blanket</Link></li>
      </ul>
    </div>

  )
}

export default Crocheting