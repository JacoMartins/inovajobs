import { User } from "@phosphor-icons/react/dist/ssr";

export default function Post() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <main className="max-w-6xl lg:px-0 md:px-4 sm:px-6 py-12">
                <div className="flex flex-wrap gap-4 items-start min-w-60 max-md:max-w-full">
                    <article className="flex flex-col gap-8 overflow-hidden py-8 bg-white rounded-xl border border-solid border-neutral-300 min-w-60 w-[880px] max-md:max-w-full">
                        <div className="flex flex-col gap-2 px-8 w-full max-md:px-5 max-md:max-w-full">
                            <h2 className="text-base font-semibold tracking-tight text-neutral-500">
                                Vagas
                            </h2>

                            <div className="flex flex-col gap-4 max-w-full w-[682px]">
                                <h1 className="text-3xl font-semibold tracking-tighter text-stone-900 max-md:max-w-full">
                                    Os 10 países mais fáceis para conseguir emprego como brasileiro
                                </h1>
                                <p className="text-base tracking-tight text-neutral-500 max-md:max-w-full">
                                    Este artigo mostra os 10 melhores países para você iniciar um
                                    projeto para melhorar de vida como um cidadão brasileiro.
                                </p>
                            </div>
                        </div>

                        <figure
                            className="object-contain w-full aspect-[1.78] max-md:max-w-full bg-neutral-300"
                        />

                        <section className="flex flex-col gap-2.5 px-8 w-full text-base tracking-tight text-black max-md:px-5 max-md:max-w-full">
                            <p>
                                Se você deseja <strong>trabalhar no exterior</strong>, escolher o
                                país certo faz toda a diferença. Alguns lugares enfrentam escassez
                                de mão de obra e oferecem{" "}
                                <strong>visto facilitado para estrangeiros</strong>, tornando-se
                                os <strong>países mais fáceis para trabalhar no exterior</strong>.
                            </p>
                            <p className="">
                                Descubra os 10 países mais fáceis para conseguir emprego como
                                brasileiro e como se candidatar!
                            </p>
                            <ol className="list-decimal pl-5">
                                <li>
                                    <h3 className="text-2xl font-semibold">Canadá</h3>
                                </li>
                            </ol>
                        </section>
                    </article>

                    <aside className="flex flex-col gap-4 w-64 min-w-60">
                        <div className="flex flex-col gap-2 p-4 w-full bg-white rounded-xl border border-neutral-300 max-w-64">
                            <h2 className="text-lg font-semibold tracking-tight text-stone-900">
                                Escrito por
                            </h2>

                            <div className="flex gap-2 items-center whitespace-nowrap">
                                <div className="flex flex-row justify-center items-center w-9 h-9 bg-neutral-300 rounded-full">
                                    <User
                                        weight="regular"
                                        className="object-contain w-6 h-6 text-neutral-500"
                                    />
                                </div>
                                <div className="self-stretch my-auto rounded-none w-[42px]">
                                    <p className="text-base font-semibold tracking-tight text-stone-900">
                                        Paulo
                                    </p>
                                    <time className="text-sm tracking-tight text-neutral-500 max-md:mr-1">
                                        20/02
                                    </time>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-64 max-w-full text-base tracking-tight whitespace-nowrap rounded-xl text-neutral-500 rounded-xl bg-zinc-300 h-[48rem]">
                            AD
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    )
}