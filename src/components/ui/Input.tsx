export interface InputProps {
  className?: string;
  type?: string;
  ref?: any;
  placeholder?: string;
  props?: HTMLInputElement;
}

export default function Input({ className, type, ref, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#a0aec0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084d1] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
}
