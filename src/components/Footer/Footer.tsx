const GitHubIcon = () => (
  <svg fill="currentColor" width="24" height="24" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const GiteaIcon = () => (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
        <path d="M18.88 15.67c.73-.42 1.25-1.19 1.25-2.05V8.38c0-.86-.52-1.63-1.25-2.05l-5.4-3.12c-.73-.42-1.63-.42-2.36 0L5.69 6.33c-.73.42-1.25 1.19-1.25 2.05v5.24c0 .86.52 1.63 1.25 2.05l5.4 3.12c.73.42 1.63.42 2.36 0l5.43-3.12zM12.24 3.3c.24-.14.54-.14.78 0l5.39 3.12c.24.14.41.4.41.69v5.24c0 .29-.17.55-.41.69l-5.39 3.12c-.24.14-.54.14-.78 0l-5.39-3.12c-.24-.14-.41-.4-.41-.69V7.11c0-.29.17-.55.41-.69l5.39-3.12zM12 14.5a2.5 2.5 0 100-5a2.5 2.5 0 000 5zm0-1a1.5 1.5 0 110-3a1.5 1.5 0 010 3z"></path>
    </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-4 sm:p-6 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between rounded-full bg-black/40 backdrop-blur-lg border border-white/10 shadow-lg px-6 py-4">
          <p className="text-sm text-gray-400 mb-2 sm:mb-0">
            &copy; {currentYear} Dávid Szekeres. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6">
            <a href="https://github.com/CyntexMore" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <GitHubIcon />
            </a>
            <a href="https://gitea.nodesocial.org/SaynedBread" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">Gitea</span>
              <GiteaIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;