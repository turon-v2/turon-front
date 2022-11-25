import Link from "next/link";

export const LinkBtn = ({ children, href, bgcolor: backgroundColor }) => {
    console.log(children, href, backgroundColor);
  return (
    <Link className="linkbtn" rel="stylesheet" style={{ backgroundColor }} href={href}>
      {children}
    </Link>
  );
}; 
