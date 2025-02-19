import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center">
      <div className="max-w-7xl px-4 py-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link href="/" className={`flex items-center font-medium text-2xl`}>
              <span className="text-neutral-800">inova</span>
              <span className="text-sky-500">jobs</span>
            </Link>
          </div>

          <nav className="hidden flex-col md:flex md:flex-row justify-between items-center gap-6">
            <div className="flex-col md:flex md:flex-row items-center gap-6">
              <Link href="#" className="text-sky-600 font-semibold hover:text-sky-600 transition-all duration-300">
                Início
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-sky-600 transition-all duration-300">
                Finanças
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-sky-600 transition-all duration-300">
                Vagas
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-sky-600 transition-all duration-300">
                Mentoria
              </Link>
              <Link href="#" className="text-neutral-800 font-normal hover:text-sky-600 transition-all duration-300">
                Bolsas de Estudo
              </Link>
            </div>

            <Button>Entrar em contato</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}