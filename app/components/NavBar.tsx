import Link from "next/link";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <nav className="container absolute left-0 right-0 top-0 z-50 flex h-32 w-full justify-center items-center mx-auto">
      <ul className="hidden gap-8 text-gold md:flex">
        <Link href="/" className="text-yellow text-xl font-display">
          EV7393
        </Link>
        <Link href="outreach" className="text-yellow text-xl font-display">
          OUTREACH
        </Link>
        <Link href="tech" className="text-yellow text-xl font-display">
          TECH
        </Link>
        <Link href="awards" className="text-yellow text-xl font-display">
          AWARDS
        </Link>
        {/* <Link href="team" className="text-yellow text-xl font-display">
          TEAM
        </Link> */}
        <Link href="sponsors" className="text-yellow text-xl font-display">
          SPONSORS
        </Link>
        <Link href="https://github.com/FTC7393/FtcRobotController" className="text-yellow text-xl font-display">
          GITHUB
        </Link>
        <Link href="https://www.flipcause.com/secure/cause_pdetails/MTk3Mzcy" className="text-yellow text-xl font-display">
          DONATE
        </Link>
      </ul>

      <MobileNav />
    </nav>
  );
};

export default NavBar;
