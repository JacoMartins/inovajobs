import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center">
      <div className="max-w-7xl px-4 py-8 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link href="/" className={`flex items-center font-bold text-2xl text-neutral-800 uppercase tracking-tight`}>
              inovajobs
            </Link>
          </div>

          <nav className="hidden flex-col md:flex md:flex-row justify-between items-center gap-6">
            <div className="flex-col md:flex md:flex-row items-center gap-6">
              <Link href="#" className="text-cyan-700 font-semibold hover:text-cyan-600 transition-all duration-300">
                Início
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-cyan-600 transition-all duration-300">
                Finanças
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-cyan-600 transition-all duration-300">
                Vagas
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-cyan-600 transition-all duration-300">
                Mentoria
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-cyan-600 transition-all duration-300">
                Bolsas de Estudo
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}