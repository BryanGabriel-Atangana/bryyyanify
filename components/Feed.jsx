"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          // hadleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [postData, setPostData] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPostData(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          value={searchText}
          onChange={handleSearchSubmit}
          type="text"
          className="search_input peer"
          placeholder="Write a prompt"
          required
        />
      </form>

      <PromptCardList data={postData} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
