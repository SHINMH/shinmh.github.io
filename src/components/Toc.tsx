// components/Toc.tsx
import React from 'react';

const Toc = () => {
    return (
        <aside className="toc">
            <nav>
                <h2>Table of Contents</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="#section1" style={{ textDecoration: 'none', color: '#333' }}>Section 1</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="#section2" style={{ textDecoration: 'none', color: '#333' }}>Section 2</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="#section3" style={{ textDecoration: 'none', color: '#333' }}>Section 3</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Toc;