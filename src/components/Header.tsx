"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TbMenu2 } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import minhafoto from "@/app/img/AL.png";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  // { name: "resume", path: "/resume" },
  // { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 -mt-4 relative">
          <Link href="/">
            <Image
              src={minhafoto}
              priority
              quality={100}
              alt="Minha Foto"
              className="object-contain rounded-md border-gray-500 -mt-6 w-full max-w-[60px] h-[70px] sm:w-[70px] sm:h-[90px] lg:max-w-[120px] lg:h-[140px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden xl:flex items-center gap-8 mt-10
        "
        >
          <nav className="flex gap-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`transition-delay-1s ${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden -mt-4">
          <Sheet>
            <SheetTrigger className="flex justify-center items-center">
              <TbMenu2 className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              <div className="mt-32 mb-40 text-center text-2xl">
                <nav className="flex flex-col justify-center items-center gap-8">
                  {links.map((link, index) => (
                    <Link
                      href={link.path}
                      key={index}
                      className={`${
                        link.path === pathname ? "text-accent" : ""
                      } text-xl capitalize hover:text-accent transition-all`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
