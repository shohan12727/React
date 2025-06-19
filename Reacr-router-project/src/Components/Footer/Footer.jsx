import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 py-6 px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-sm">&copy; {new Date().getFullYear()} Ashraful Islam Shohan. All rights reserved.</p>

                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row gap-6 text-sm">
                        <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
                            aishohan001@gmail.com
                        </a>
                        <a href="mob:01887104758" className="hover:text-white transition-colors">
                            +880 1234 567 89
                        </a>
                        <a href="https://www.linkedin.com/in/ashraful-islam-shohan-094b6530b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://github.com/shohan12727" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;