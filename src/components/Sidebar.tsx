// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className={"sidebar"}>
            <nav>
                <ul style={{listStyleType: 'none', padding: 0}}>
                    <li style={{marginBottom: '10px'}}>
                        <Link href="/" style={{textDecoration: 'none', color: '#333'}}>
                            Home
                        </Link>
                    </li>
                    <li style={{marginBottom: '10px'}}>
                        <Link href="/about" style={{textDecoration: 'none', color: '#333'}}>
                            About
                        </Link>
                    </li>
                    <li style={{marginBottom: '10px'}}>
                        <Link href="/posts" style={{textDecoration: 'none', color: '#333'}}>
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" style={{textDecoration: 'none', color: '#333'}}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;