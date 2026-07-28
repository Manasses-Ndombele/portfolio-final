import { useState, useEffect, FC } from "react";

// ─── Navbar ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contatos", href: "#contatos" },
];

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const hasSolidBg = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hasSolidBg
          ? "bg-[#111827]/90 backdrop-blur-md border-b border-[#60A5FA]/10 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-xl font-black tracking-tight text-[#60A5FA] cursor-pointer"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          MANASSES<span className="text-white">.dev</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV_LINKS.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                className="text-[#F5F5F5]/80 hover:text-[#60A5FA] text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-[2px] bg-[#60A5FA] rounded-sm transition-all duration-300"
              style={{
                transform:
                  open && i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : open && i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : open && i === 1
                        ? "scaleX(0)"
                        : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 border-t border-[#60A5FA]/15" : "max-h-0"
        } bg-[#111827]`}
      >
        {NAV_LINKS.map((n) => (
          <a
            key={n.label}
            href={n.href}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 text-[#F5F5F5] font-medium text-base border-b border-white/5 hover:text-[#60A5FA] transition-colors"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {n.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
