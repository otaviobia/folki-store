import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Carrinho() {
  return (
    <div className="flex flex-col justify-center items-center bg-folki-dark-grey gap-3 p-2">
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}