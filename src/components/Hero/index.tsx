type HeroProps = {
  heroTitle: string;
  heroText: string;
  heroImageUrl: string;
};

export default function Hero(props: HeroProps) {
  return (
    <div
      className="bg-cover bg-center p-16 rounded-lg w-full max-w-[1600]"
      style={{ backgroundImage: `url(${props.heroImageUrl})`}}
    >
      <div className="lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl font-semibold pb-6">{props.heroTitle}</h1>
        <p className="text-2xl">{props.heroText}</p>
      </div>
    </div>
  );
}