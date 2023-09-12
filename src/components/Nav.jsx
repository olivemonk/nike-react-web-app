import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
        <div className="max-lg:hidden">
            <button className="bg-coral-red text-white px-6 py-2 rounded-full font-montserrat text-lg">
                Sign In
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
