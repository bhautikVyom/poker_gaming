"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm md:text-base font-semibold">

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <Link
              href="https://lalagaming.com/privacy-policy/"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://lalagaming.com/terms-and-conditions/"
              className="hover:underline"
            >
              Terms of Use
            </Link>
          </div>

          <div className="text-center md:text-right">
            © 2026 Lala Gaming. All Rights Reserved
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;