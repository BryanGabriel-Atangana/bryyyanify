import Link from "next/link";

const Form = ({ type, prompt, setPrompt, submitted, onCreatePrompt }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span>
      </h1>
      <p className="desc text-left max-w-md">
        Crée un prompt qui donne des résultats précis et qui aide à booster la
        productivité des fans des IA génératives
      </p>
      <form
        onSubmit={onCreatePrompt}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Votre prompt
          </span>
          <textarea
            value={prompt.prompt}
            onChange={(e) => setPrompt({ ...prompt, prompt: e.target.value })}
            placeholder="Exemple : Je suis étudiant et je recherche la meilleur façon d'apprendre"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            #Tag
          </span>
          <textarea
            value={prompt.tag}
            onChange={(e) => setPrompt({ ...prompt, tag: e.target.value })}
            placeholder="Exemple : #Cuisine, #Étude, #Voyage"
            required
            className="form_input"
          ></textarea>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Annuler
          </Link>
          <button
            type="submit"
            disabled={submitted}
            className="blue_gradient_btn text-white py-2 px-4 rounded-md"
          >
            {submitted ? "En cours..." : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
