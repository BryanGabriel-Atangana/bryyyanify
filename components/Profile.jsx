import PromptCard from "./PromptCard";

const Profile = ({ name, description, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}</span>
      </h1>
      <p className="desc text-left">{description}</p>
      <div className="mt-16 prompt_layout">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            // hadleTagClick={handleTagClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
