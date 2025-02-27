'use client';


import HeaderCartIcon from '../components/Header/HeaderCartIcon';
import HeaderLogo from '../components/Header/HeaderLogo';
import HeaderNav from '../components/Header/HeaderNav';
import HeaderSearch from '../components/Header/HeaderSearch';  // Import Search Component

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
