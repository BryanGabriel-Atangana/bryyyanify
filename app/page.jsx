import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Des meilleurs prompts pour
        <br />
        <span className="orange_gradient">de meilleurs résultats</span>
      </h1>
      <div className="p-4">
        <p className="text-center md:w-1/2 m-auto text-gray-600 ">
          Bryyyanify la plateforme pour chopper les meilleurs prompt dans le but
          de booster votre productivité et éfficacité lorsque vous travailler
          avec des ia génératives.
        </p>
      </div>
      <Feed />
    </section>
  );
};

export default Home;
