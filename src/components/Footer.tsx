const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-parchment-100">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} MySimpleStorefront - Powered by Next.js
        </div>
        <div className="flex gap-4 text-sm md:text-base">
          <a href="#about" className="hover:underline">
            Home
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
