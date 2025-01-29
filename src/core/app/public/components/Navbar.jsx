import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuShield, LuBook, LuFileVideo, LuHeadset, LuMenu, LuX } from "react-icons/lu";
import { ThemeControler } from '../../shared/themeControler';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Servicios', icon: <LuShield className="w-5 h-5" />, path: '/services' },
        { title: 'Capacitaciones', icon: <LuBook className="w-5 h-5" />, path: '/training' },
        { title: 'Videos Guía', icon: <LuFileVideo className="w-5 h-5" />, path: '/videos' },
        { title: 'Asesorías', icon: <LuHeadset className="w-5 h-5" />, path: '/consulting' },

    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-base-100 shadow-lg fixed w-full z-50"
        >
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost text-xl">
                        <LuShield className="w-6 h-6 mr-2" />
                        SEGIR
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        {menuItems.map((item) => (
                            <>
                                <li key={item.title}>
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-2 hover:bg-primary hover:text-primary-content rounded-lg"
                                    >
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                </li>

                            </>
                        ))}
                        <li>
                            <ThemeControler />
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="navbar-end lg:hidden">
                    <button
                        className="btn btn-ghost"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <LuX /> : <LuMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-base-100 lg:hidden shadow-lg"
                    >
                        <ul className="menu menu-vertical p-4">
                            {menuItems.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-2 hover:bg-primary hover:text-primary-content"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;