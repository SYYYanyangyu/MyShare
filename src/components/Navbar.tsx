import React, { useEffect, useState } from 'react';
import '../assets/output.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCamera, faEnvelope,faCodeBranch} from '@fortawesome/free-solid-svg-icons';


interface NavItemProps {
    href: string;
    text: string;
}

const Navbar: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <nav className="p-4 shadow-lg"
            style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ul className="flex space-x-8" style={{ justifyContent: 'flex-end' }}>
                <NavItem href="/" text="Index" />
                <NavItem href="/about" text="Life" />
                <NavItem href="/contact" text="Contact" />
                <NavItem href="/https://github.com/SYYYanyangyu" text="GitHub" />
            </ul>
        </nav>
    );
};

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getContent = () => {
        if (isMobile) {
            switch (text) {
                case 'Index':
                    return <FontAwesomeIcon icon={faHome}  className="mobile-icon-large" />;
                case 'Life':
                    return <FontAwesomeIcon icon={faCamera}  className="mobile-icon-large" />;
                case 'Contact':
                    return <FontAwesomeIcon icon={faEnvelope}  className="mobile-icon-large" />;
                case 'GitHub':
                    return (
                        <a href="https://github.com/SYYYanyangyu">
                            <FontAwesomeIcon icon={faCodeBranch} className="mobile-icon-large" />
                        </a>
                    );
                default:
                    return null;
            }
        } else {
            return (
                <>
                    {text === 'Index' && <FontAwesomeIcon icon={faHome}  className="mobile-icon-large" />}
                    {text === 'Life' && <FontAwesomeIcon icon={faCamera}  className="mobile-icon-large" />}
                    {text === 'Contact' && <FontAwesomeIcon icon={faEnvelope}  className="mobile-icon-large" />}
                    {text === 'GitHub' && (
                        <a href="https://github.com/SYYYanyangyu">
                            <FontAwesomeIcon icon={faCodeBranch}  className="mobile-icon-large" />
                        </a>
                    )}
                    {text}
                </>
            );
        }
    };

    return (
        <li className="text-black hover:text-gray-300 font-bold text-lg p-2 flex items-center transition duration-300 ease-in-out transform hover:scale-110">
            <a href={href} style={{ marginRight: '16px' }}>
                {getContent()}
            </a>
        </li>
    );
};

export default Navbar;