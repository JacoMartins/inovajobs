export default function Footer() {
  const links = ["Início", "Finanças", "Vagas", "Mentoria", "Bolsas de Estudo"];

  return (
    <footer className="flex flex-col gap-8 justify-center items-center py-8 text-black border-t bg-neutral-100 border-neutral-300">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-6xl max-md:max-w-full">
        <div className="flex flex-col gap-4 w-[20rem]">
          <h2 className="text-xl font-semibold tracking-tight uppercase">
            inovajobs
          </h2>
          <p className="text-sm tracking-tight">
            Conectando talentos a oportunidades extraordinárias. Encontre sua
            próxima grande oportunidade profissional.
          </p>
        </div>
        <nav className="flex flex-col gap-2 justify-center text-sm tracking-tight">
          <h3 className="font-semibold">Links Rápidos</h3>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-cyan-700 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-row justify-between items-center pt-4 w-full max-w-6xl text-base tracking-tight border-t border-neutral-400 max-md:max-w-full">
        <p>
          © 2025 inovajobs. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-6 items-center min-w-60">
          <a
            href="#"
            className="hover:text-cyan-700 transition-colors"
          >
            Termos de Uso
          </a>
          <a
            href="#"
            className="hover:text-cyan-700 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}

