export const PORTFOLIO_CONFIG = Object.freeze({
  siteUrl: 'https://www.xyzus.my.id',
  githubUsername: 'Hessong888',
  // TODO: update the GitHub username and all social URLs from one place if the profile changes.
  socialLinks: {
    github: 'https://github.com/Hessong888',
    linkedin: 'https://www.linkedin.com/in/mahesa-tirtha-agung-permana',
    vercel: 'https://vercel.com/865tirthas-projects',
    portfolio: 'https://www.xyzus.my.id'
  }
});

if (typeof window !== 'undefined') {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
