const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-content-bg py-6 border-t border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400">
          &copy; {currentYear} CoWorkIt TN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
