interface SuggestionProps {
    subject: string;
    title: string;
}

export default function Suggestion({ title, subject }: SuggestionProps) {
    return (
        <div className="flex flex-col gap-2 p-4 w-full font-semibold cursor-pointer">
            <h3 className="text-base tracking-tight text-neutral-500">{subject}</h3>
            <h2 className="text-base tracking-tight text-neutral-900">
                {title}
            </h2>
        </div>
    );
}