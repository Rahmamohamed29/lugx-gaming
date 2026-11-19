import footerBgImg from "../assets/images/footer-bg.jpg";

export default function Footer() {
  return (
    <footer className="text-white mt-20 py-12 rounded-t-[150px] text-center relative overflow-hidden">
      <img
        src={footerBgImg}
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-sm">
          Copyright © 2048 LUGX Gaming Company. All rights reserved. &nbsp;&nbsp;
          <a href="#top" className="hover:underline">
            Design: TemplateMo
          </a>
        </p>
      </div>
    </footer>
  );
}