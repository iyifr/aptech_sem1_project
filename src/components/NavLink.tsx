import { Link } from "@tanstack/react-router"

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
    return <Link to={to} style={{ textDecoration: 'none' }}>
        {children}
    </Link>
}

export default NavLink
