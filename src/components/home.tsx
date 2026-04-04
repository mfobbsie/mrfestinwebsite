import hero from "../assets/hero.jpg";

export default function Home() {
  return (
    <section id="center">
      <img src={hero} alt="hero" className="hero-full" />

      <div className="title-block fade-on-scroll">
        <h1>mr. festin</h1>
      </div>
    </section>
  );
}
