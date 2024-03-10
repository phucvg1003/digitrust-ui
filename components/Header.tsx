import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/images/logo.png";
import Button from "./Button";

export default function Header() {
    return (
        <header className="font-feature-settings bg-white text-sm font-medium capitalize leading-normal xl:text-base">
            <div className="py-[18px] xl:container lg:px-16 xl:mx-auto xl:px-0">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="flex flex-1 justify-start">
                        <Link href="/">
                            <Image
                                className="h-auto w-32 xl:w-44"
                                src={Logo}
                                alt="logo"
                            ></Image>
                        </Link>
                    </div>
                    
                    {/* Navigations */}
                    <nav className="hidden lg:block">
                        <ul className="flex gap-x-10">
                            {[
                                ["Product", "/"],
                                ["Community", "/"],
                                ["Resources", "/"],
                                ["About Us", "/"],
                            ].map(([title, url]) => (
                                <li>
                                    <Link
                                        className="hover:text-blue-600"
                                        href={url}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Button */}
                    <div className="flex flex-1 justify-end">
                        <Button>Launch App</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
