import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured Article */}
          <article className="md:col-span-2 space-y-4">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-neutral-300">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Featured article image"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sky-500 text-sm font-medium">Tópico</span>
              <h2 className="text-2xl font-bold text-neutral-800">Lorem Ipsum Dolor Met</h2>
              <p className="text-sky-500 text-sm">Autor / Data</p>
              <p className="text-neutral-600 line-clamp-2">
                Lorem Ipsum Dolor Amet Abis Nubiam Teriat Facium Accu-Umus Boratius Nepris
              </p>
            </div>
          </article>

          {/* Sidebar Article */}
          <article className="space-y-4">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-neutral-300">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Sidebar article image"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-sky-500 text-sm font-medium">Tópico</span>
              <h3 className="text-xl font-bold text-neutral-800">Lorem Ipsum Dolor Met</h3>
              <p className="text-sky-500 text-sm">Autor / Data</p>
              <p className="text-neutral-600 line-clamp-2">
                Lorem Ipsum Dolor Amet Abis Nubiam Teriat Facium Accu-Umus Boratius Nepris
              </p>
            </div>
          </article>
        </div>
      </main>
    
      <Footer />
    </div>
  );
}
