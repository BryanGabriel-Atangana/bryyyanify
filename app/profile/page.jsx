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
    console.log(prompt);
  };

  const handleDelete = () => {};

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
