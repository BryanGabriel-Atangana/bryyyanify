"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [userPrompts, setUserPrompts] = useState([]);

  const handleEdit = (prompt) => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };

  const handleDelete = async (prompt) => {
    const hasConfirmed = confirm(
      "Êtes-vous sûr de vouloir supprimer votre prompts ?"
    );
    try {
      if (hasConfirmed) {
        await fetch(`api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPrompts = userPrompts.filter((p) => p._id !== prompt._id);
        setUserPrompts(filteredPrompts);
      }
    } catch (err) {
      console.log(err);
      alert("Un erreur s'est produite lors de la suppression de votre prompt");
    }
  };

  useEffect(() => {
    const fetchUserPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await response.json();
      setUserPrompts(data);
    };
    if (session?.user.id) fetchUserPrompts();
  }, [session?.user.id]);

  return (
    <Profile
      name="Mon profil"
      description="Tout vos prompts sont disponibles ci-dessous"
      data={userPrompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
