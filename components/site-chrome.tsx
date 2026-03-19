import Link from "next/link";

export function SiteChrome() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">EY</span>
            <span>
              Elite Yard Hygiene
              <small>Premium pet waste removal</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary">
            <Link href="/#services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#gallery">Before & After</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#quote" className="button button-primary header-cta">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      </header>

      <nav className="floating-nav" aria-label="Quick navigation">
        <Link href="/#top">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#gallery">Gallery</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/#quote" className="floating-nav-cta">
          Free Quote
        </Link>
      </nav>
    </>
  );
}
