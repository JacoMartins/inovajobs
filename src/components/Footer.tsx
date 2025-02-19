import Button from "./ui/Button"
import Input from "./ui/Input"
import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-[#262626] text-xl font-semibold">inova</span>
              <span className="text-[#0084d1] text-xl font-semibold">jobs</span>
            </Link>
            <p className="text-[#525252] text-sm">
              Conectando talentos a oportunidades extraordinárias. Encontre sua próxima grande oportunidade
              profissional.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#525252] hover:text-[#0084d1]">
                <FacebookLogo weight="regular" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#525252] hover:text-[#0084d1]">
                <XLogo weight="regular" className="h-5 w-5" />
                <span className="sr-only">x</span>
              </Link>
              <Link href="#" className="text-[#525252] hover:text-[#0084d1]">
                <InstagramLogo weight="regular" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#525252] hover:text-[#0084d1]">
                <LinkedinLogo weight="regular" className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#262626]">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Vagas em Destaque
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Empresas Parceiras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#262626]">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Guia de Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Mentoria
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Bolsas de Estudo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                  Para Empresas
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#262626]">Newsletter</h3>
            <p className="text-sm text-[#525252]">
              Receba as melhores oportunidades e novidades diretamente no seu email.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Seu email" className="w-full" />
              <Button>Inscrever-se</Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#e2e8f0] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#525252]">
              © {new Date().getFullYear()} inovajobs. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-[#525252] hover:text-[#0084d1]">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

