import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-folki-purple rounded-lg w-full max-w-[1600] p-6 flex justify-between">
      <div className="flex gap-6 items-center">
        <a href="/"><h1 className="font-bold text-3xl">FØLKI STORE</h1></a>
        <div className="max-sm:hidden flex gap-6">
          <Link href={`/categoria/camisetas`}><h1 className="text-xl hover:underline">Camisetas</h1></Link>
          <Link href={`/categoria/canecas`}><h1 className="text-xl hover:underline">Canecas</h1></Link>
          <Link href={`/categoria/acessorios`}><h1 className="text-xl hover:underline">Acessórios</h1></Link>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <a href="#"><img src="/profile.svg" alt="Perfil" className="w-8 h-8 inline-block rounded-full hover:brightness-75" /></a>
        <a href="#"><img src="/cart.svg" alt="Carrinho" className="w-8 h-8 inline-block hover:brightness-75" /></a>
      </div>
    </div>
  )
}