import HighlightPost from "@/components/HighlightPost";
import Post from "@/components/Post";
import Suggestion from "@/components/Suggestion";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <main className="max-w-6xl lg:px-0 md:px-4 sm:px-6 py-12">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-3xl font-semibold text-neutral-900">Destaques</h1>

          <div className="flex flex-row gap-10 w-full">
            <HighlightPost
              subject="Vagas"
              title="Vaga de Dev na Empresa X"
              description="A empresa X está em busca de um desenvolvedor para..."
              user="Fulano de Tal"
              date="1 de janeiro de 2022"
            />

            <div className="flex flex-col gap-8">
              <div className="flex flex-row justify-start items-center gap-4 w-full">
                <Sparkle className="w-8 h-8 text-cyan-600" />
                <h2 className="text-2xl font-[500] text-neutral-900">
                  Escolha dos Editores
                </h2>
              </div>

              <div className="flex flex-col gap-2">
                <Suggestion
                  subject="Vagas"
                  title="Canadá Enfrenta Escassez de Mão de Obra: Oportunidade?"
                />
                <Suggestion
                  subject="Vagas"
                  title="Canadá Enfrenta Escassez de Mão de Obra: Oportunidade?"
                />
                <Suggestion
                  subject="Vagas"
                  title="Canadá Enfrenta Escassez de Mão de Obra: Oportunidade?"
                />
                <Suggestion
                  subject="Vagas"
                  title="Canadá Enfrenta Escassez de Mão de Obra: Oportunidade?"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Posts
            </h2>

            <div className="flex flex-row flex-wrap gap-8 w-full">
              <Post
                subject="Finanças"
                title="Como Economizar Dinheiro"
                description="Dicas para economizar dinheiro no dia a dia."
                user="Fulano de Tal"
                date="1 de janeiro de 2022"
              />
              <Post
                subject="Finanças"
                title="Como Economizar Dinheiro"
                description="Dicas para economizar dinheiro no dia a dia."
                user="Fulano de Tal"
                date="1 de janeiro de 2022"
              />
              <Post
                subject="Finanças"
                title="Como Economizar Dinheiro"
                description="Dicas para economizar dinheiro no dia a dia."
                user="Fulano de Tal"
                date="1 de janeiro de 2022"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
