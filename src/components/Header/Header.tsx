'use client';


import HeaderCartIcon from './HeaderCartIcon';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';  // Import Search Component

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <HeaderLogo />
        <HeaderNav />
        <div className="flex items-center gap-6">
          <HeaderSearch />  {/* Integrated Search */}
          <HeaderCartIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
