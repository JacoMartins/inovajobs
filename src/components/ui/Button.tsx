interface ButtonProps {
  children: string;
}

export default function Button({ children }:ButtonProps) {
  return(
    <button className="flex flex-row justify-center items-center bg-sky-600 hover:bg-sky-700 active:bg-sky-600 rounded-lg text-normal text-white font-medium py-2.5 px-4 transition-bg duration-300">
      {children}
    </button>
  )
}