import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import QLogo from "@/common/icons/QLogo";
import { Link } from "@tanstack/react-router";


const footerSections = [
  {
    titleKey: "title",
    links: [
      { key: "businessCards", href: "/products/business-cards" },
      { key: "flyers", href: "/products/flyers" },
      { key: "brochures", href: "/products/brochures" },
      { key: "packaging", href: "/products/packaging" },
      { key: "posters", href: "/products/posters" },
      { key: "banners", href: "/products/banners" },
    ],
  },
  {
    titleKey: "title",
    links: [
      { key: "customRfq", href: "/custom-rfq" },
      { key: "findPrinters", href: "/printers" },
      { key: "sampleApproval", href: "#" },
      { key: "orderTracking", href: "#" },
      { key: "bulkOrders", href: "#" },
    ],
  },
  {
    titleKey: "title",
    links: [
      { key: "about", href: "/who-we-are" },
      { key: "careers", href: "/careers" },
      { key: "blog", href: "/blog" },
      { key: "helpCenter", href: "/help-center" },
      { key: "trustSafety", href: "/trust-safety" },
    ],
  },
  {
    titleKey: "title",
    links: [
      { key: "becomeVendor", href: "#" },
      { key: "vendorDashboard", href: "#" },
      { key: "pricing", href: "#" },
      { key: "resources", href: "#" },
    ],
  },
];

const socials = [
  {
    icon: "X",
    href: "#",
    labelKey: "socials.twitter",
  },
  {
    icon: "Li",
    href: "#",
    labelKey: "socials.linkedIn",
  },
  {
    icon: "Ig",
    href: "#",
    labelKey: "socials.instagram",
  },
  {
    icon: "Fb",
    href: "#",
    labelKey: "socials.facebook",
  },
];

const legalLinks = [
  {
    labelKey: "legal.privacy",
    href: "/privacy-policy",
  },
  {
    labelKey: "legal.terms",
    href: "/terms-conditions",
  },
  {
    labelKey: "legal.cookies",
    href: "#",
  },
];

export default function Footer() {

  return (
    <footer className="bg-primary text-white">
      <div className="container px-6 py-16">
        <div className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-[320px_repeat(4,minmax(0,1fr))]">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link preload="intent" to="/" className="flex items-center gap-3">
              <QLogo />

              <div>
                <h2 className="font-semibold tracking-wide">PUNQT</h2>
                <p className="text-sm text-white/70 font-medium">
                  {("brand.tagline")}
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-base font-medium leading-7 text-white/40">
              {("brand.description")}
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map(({ icon, href, labelKey }) => (
                <Button
                  key={labelKey}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-lg border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <Link
                    preload="intent"
                    to={href}
                    className={`font-normal`}
                    aria-label={(labelKey)}
                  >
                    {icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {footerSections.map((section) => (
            <nav key={section.titleKey}>
              <h3 className="mb-5 text-sm font-semibold">
                {(section.titleKey)}
              </h3>

              <ul className="space-y-3">
                {section.links.map((linkKey) => (
                  <li key={linkKey.key}>
                    <Link
                      preload="intent"
                      to={linkKey.href}
                      className="text-sm text-white/40 font-medium transition-colors hover:text-white"
                    >
                      {(linkKey.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-white/25 md:flex-row font-medium">
          <p>{("legal.copyright")}</p>

          <div className="flex gap-8">
            {legalLinks.map(({ labelKey, href }) => (
              <Link
                key={labelKey}
                to={href}
                className="hover:text-white"
              >
                {(labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
