import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./mobileNav";
import Image from "next/image";
import minhafoto from "@/app/img/AL.png";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 -mt-4 relative">
          <Link href={"/"}>
            <Image
              src={minhafoto}
              priority
              quality={100}
              alt="Minha Foto"
              className="object-contain rounded-md border-gray-500 -mt-6 w-full max-w-[60px] h-[70px] sm:w-[70px] sm:h-[90px] lg:max-w-[120px] lg:h-[140px]"
            />
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}></Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
