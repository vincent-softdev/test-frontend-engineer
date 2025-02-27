import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const HeaderNav = () => (
  <nav>
    <ul className="flex gap-6">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-gray-700">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderNav;
