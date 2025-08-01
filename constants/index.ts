export const lngs = [
  { value: "en", label: "English" },
  { value: "uz", label: "O'zbek" },
  { value: "ru", label: "Русский" },
] as const;

export const navLinks = [
  { href: "/", label: "Home", isVisible: true },
  { href: "/about", label: "About", isVisible: true },
  { href: "/blog", label: "Blog", isVisible: true },
  { href: "/projects", label: "Projects", isVisible: true },
  { href: "/contact", label: "Contact", isVisible: true },
] as const;
