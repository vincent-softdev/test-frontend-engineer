import Link from 'next/link';

// ✅ SRP: HeaderNav only controls layout
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
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
