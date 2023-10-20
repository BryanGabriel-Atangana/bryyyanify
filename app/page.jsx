import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Créez et partagez vos prompts
        <br />
        <span className="orange_gradient">d'IA génératives</span>
      </h1>
      <div className="p-2">
        <p className="text-center md:w-1/2 m-auto text-gray-600 ">
          Bryyyanify est la plateforme faite pour inspirer les fans d'IA
          génératives. En un click vous pouvez copier et modifier un prompt qui
          boostera votre productivité.
        </p>
      </div>
      <Feed />
    </section>
  );
};

export default Home;
