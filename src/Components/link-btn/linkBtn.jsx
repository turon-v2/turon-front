import Link from "next/link";

export const LinkBtn = ({ children, href, bgcolor: backgroundColor }) => {
  return (
    <Link className="linkbtn" rel="stylesheet" style={{ backgroundColor }} href={href} data-aos="zoom-in" data-aos-duration="1000">
      {children}
    </Link>
  );
}; 
