import { Link } from "react-router-dom";

export default function MenuItem({ children, active, to }) {
    return (
    <Link className={`p-2 ${ 
        active ? "text-[#FEC601]" : "text-[#808191]"
        }`} 
        to={to}
        >
        { children }
    </Link>
    )
}
