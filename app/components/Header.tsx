"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	return (
		<header className="p-4 flex gap-4 justify-center">
			  <Link href={"/"}>
				  <span className={styleLink("/")}>Home</span>
			  </Link>
			  <Link href={"/users"} className={styleLink("/users")}>Users</Link>
			  <Link href={"/about"} className={styleLink("/about")}>About</Link>
		</header>
	)
}

function styleLink(path: string) {
	const _path = usePathname()
	if (path === _path) {
		return "underline";
	}
	return "no-underline"
}
