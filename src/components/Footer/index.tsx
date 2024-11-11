export default function Footer() {
  return (
    <div className="w-full max-w-[1600] md:p-6 max-sm:p-2 max-sm:pb-8 flex flex-col justify-between items-center">
      <div className="flex gap-6 items-center">
        <div className="flex gap-6">
          <a href="#"><h1 className="md:text-xl max-sm:text-[14px] hover:underline">Termos e Condições</h1></a>
          <a href="#"><h1 className="md:text-xl max-sm:text-[14px] hover:underline">Sobre Nós</h1></a>
          <a href="#"><h1 className="md:text-xl max-sm:text-[14px] hover:underline">Contato</h1></a>
        </div>
      </div>
      <p className="pt-4 text-center text-neutral-500 md:text-base max-sm:text-[12px]">Copyright © 2024 store.folki.com.br LTDA.<br/>CNPJ n.º 12.345.678/9123-45 / Av. São Carlos, nº 1234, São Carlos/SP - CEP 13561-120</p>
    </div>
  )
}