"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";

const PromptCard = ({ prompt, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");
  const [rating, setRating] = useState(0);
  const [numberOfCopies, setNumberOfCopies] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.description);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-500">
              {prompt.creator.username}
            </h3>
            {/* rating */}
            <div className="flex flex-row items-center gap-3">
              <StarRatings
                rating={rating}
                starDimension="1.3rem"
                starSpacing="1px"
                starRatedColor="#0891b2"
                starHoverColor="#0891b2"
                changeRating={handleRating}
              />
              {/* number of reviews */}
            </div>
          </div>
          <div className="copy_btn flex flex-col gap-3" onClick={handleCopy}>
            <Image
              src={
                copied === prompt.prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt="copy_icon"
              width={20}
              height={20}
            />
            <p className="font-satoshi text-sm text-gray-500">
              ({numberOfCopies})
            </p>
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {prompt.description}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        // onClick={() => handleTagClick && handleTagClick(prompt.tag)}
      >
        #{prompt.tag}
      </p>
      {session?.user?.id === prompt.creator._id && pathname === "/profile" && (
        <div className="flex flex-row gap-5 items-center justify-center">
          <div
            className="flex flex-col cursor-pointer py-3 items-center justify-center"
            onClick={handleEdit}
          >
            <motion.div whileHover={{ scale: 1.5, transition: 1 }}>
              <MdEdit size={20} color="#686868" />
            </motion.div>
            <p className="font-inter text-sm green_gradient ">modifier</p>
          </div>
          <div
            className="flex flex-col cursor-pointer py-3 items-center justify-center"
            onClick={handleDelete}
          >
            <motion.div whileHover={{ scale: 1.5, transition: 1 }}>
              <RiDeleteBin2Fill size={20} color="#686868" />
            </motion.div>
            <p className="font-inter text-sm orange_gradient cursor-pointer">
              supprimer
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
