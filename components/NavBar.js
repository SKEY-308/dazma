import React from 'react'
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="nav">
            <h1>
                <Link href='/'>Dazma Inc</Link>
            </h1>
        </nav>
    )
}

export default NavBar