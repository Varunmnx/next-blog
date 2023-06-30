import Link from "next/link";

interface NavItem{
     href:string,
     title:string,
     className:string
}


const NavItem = ( { href, title , className } : NavItem ) => {
  return (
    <Link href={href} className={className}>
              {title}
    </Link>
  )
}

export default NavItem