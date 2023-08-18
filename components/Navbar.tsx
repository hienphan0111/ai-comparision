'use client'

const menu = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Contact'
  }
]
const Navbar = () => {
  return (
    <nav>
      <div>
        { menu.map((item, index) => (
          <a key={index} href={`/${item.name.toLowerCase()}`}>{item.name}</a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;
