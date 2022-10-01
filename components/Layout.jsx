import React from 'react'
import Head from 'next/head';

import NavBar from './NavBar';
// import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Dazma Inc</title>
            </Head>

            <header>
                <NavBar />
            </header>

            <main className='main-container'>
                { children }
            </main>
        </div>
    )
}

export default Layout