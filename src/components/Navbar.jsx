const baseNavItems = [
  { href: './', icon: '/assets/icons/home.png', alt: 'Retro Computer Icon', text: 'Home' },
  { href: 'mari.html', icon: '/assets/icons/mari.png', alt: 'Retro Document Folder Icon', text: 'Mari' },
  { href: 'guestbook.html', icon: '/assets/icons/guestbook.png', alt: 'Retro Notepad Icon', text: 'Guestbook' },
  { href: 'about.html', icon: '/assets/icons/about.png', alt: 'Retro Question Mark Book Icon', text: 'About' },
];

const easterNavItem = {
  href: 'amandita.html',
  icon: '/assets/icons/amandita.png',
  alt: 'Retro Heart Icon',
  text: 'Amandita',
};

export default function Navbar({ showEasterItem = false }) {
  const navItems = showEasterItem ? [...baseNavItems, easterNavItem] : baseNavItems;

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navItems.map((item) => (
          <li className="nav-item" key={item.href}>
            <a className="nav-link" href={item.href}>
              <img src={item.icon} alt={item.alt} />
              <span className="link-text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
