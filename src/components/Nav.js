import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function nav() {
    return (
        <div >
            <nav className="shadow-lg">
                <div className="md:flex items-center z-50 justify-between py-2 px-8 md:px-12">
                    <div className="flex justify-between items-center">
                    
                        <div className="md:hidden">
                            <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                        <a href="https://github.com/thesheppard" className="text-yellow-300 rounded hover:bg-yellow-300 hover:text-black hover:font-medium py-2 px-2 md:mx-2">About</a>
                        <a href="#skills" className="text-yellow-300 rounded hover:bg-yellow-300 hover:text-black hover:font-medium py-2 px-2 md:mx-2">Services</a>
                        <a href="#contact" className="text-yellow-300 rounded hover:bg-yellow-300 hover:text-black hover:font-medium py-2 px-2 md:mx-2">Projects</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default nav
