import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';
import logo from '../../assets/react.svg';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const TopBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#projects', text: 'Projects' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center justify-between rounded-full bg-black/40 backdrop-blur-lg border border-white/10 shadow-lg px-6 py-3">
            <a href="#" className="flex items-center gap-x-3">
              <span className="sr-only">Dávid Szekeres Portfolio</span>
              <img className="h-6 w-auto" src={logo} alt="Logo" style={{ filter: 'brightness(0) invert(0.85)' }} />
              <div className="hidden sm:block">
                  <DecryptedText
                    text="Dávid Szekeres"
                    className="text-md font-bold text-gray-200 transition-colors hover:text-white"
                    encryptedClassName="#444550"
                    speed={30}
                    maxIterations={15}
                    sequential={false}
                    animateOn="hover"
                  />
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-0 z-50"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0A0318] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                   <span className="text-lg font-bold text-gray-100">SaynedBread</span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.text}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopBar;