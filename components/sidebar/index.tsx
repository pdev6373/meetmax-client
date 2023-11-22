import Link from "next/link";
import { Logo } from "..";
import Image from "next/image";

const navs = [
  {
    name: "Hoem",
    route: "",
    icon: "/assets/home.svg",
  },
];

export default function Sidebar() {
  return (
    <aside className="">
      <Logo />
      <nav>
        <ul>
          {navs.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.route}>
                <Image src={nav.icon} alt="nav icon" width={24} height={24} />
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
