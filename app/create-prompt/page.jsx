"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitted, setSubmitted] = useState(false);
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: "",
  });

  const handleCreatePrompt = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt.prompt,
          userId: session?.user.id,
          tag: prompt.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <Form
      type="Créer"
      prompt={prompt}
      setPrompt={setPrompt}
      submitted={submitted}
      onCreatePrompt={handleCreatePrompt}
    />
  );
};

export default CreatePrompt;
