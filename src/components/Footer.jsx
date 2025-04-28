const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#home" className="text-2xl font-bold text-indigo-600">
                Portfolio<span className="text-gray-800 dark:text-gray-200">.</span>
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Crafting digital experiences with passion and precision.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Twitter</a>
                  </li>
                  <li>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Dribbble</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Santhosh T R. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Designed and Developed with ❤️ using React, Vite, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;