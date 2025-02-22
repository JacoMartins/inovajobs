import { User } from "@phosphor-icons/react/dist/ssr";

interface PostProps {
    subject: string;
    title: string;
    description: string;
    user: string;
    date: string;
}

export default function Post({ subject, title, description, user, date }: PostProps) {
    return (
        <article className="overflow-hidden w-full max-w-[360px] cursor-pointer border border-neutral-300 bg-white rounded-xl shadow-md">
            <figure className="w-full rounded-t-xl aspect-[16/9] bg-neutral-300">
            </figure>
            <div className="flex flex-col gap-4 px-5 py-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-base tracking-tight text-neutral-500 font-semibold">{subject}</h3>
                    <h2 className="text-xl tracking-tight text-neutral-900 font-semibold">
                        {title}
                    </h2>
                    <p className="text-sm tracking-tight text-neutral-500 font-normal">
                        {description}
                    </p>
                </div>

                <div className="flex gap-2 items-center self-start whitespace-nowrap">
                    <div className="flex flex-row justify-center items-center w-9 h-9 bg-neutral-300 rounded-full">
                        <User
                            weight="regular"
                            className="object-contain w-6 h-6 text-neutral-500"
                        />
                    </div>
                    <div className="self-stretch rounded-none w-[42px]">
                        <p className="text-base font-semibold tracking-tight text-neutral-900">
                            {user}
                        </p>
                        <time className="mt-1.5 text-sm tracking-tight text-neutral-500 max-md:mr-1">
                            {date}
                        </time>
                    </div>
                </div>
            </div>
        </article>
    );
};
