import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

// Get
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response({ status: 404, message: "Prompt pas trouvé" });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};

// Patch
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id).populate("creator");
    if (!existingPrompt) {
      return new Response({ status: 404, message: "Prompt pas trouvé" });
    }
    existingPrompt.description = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};

// Delete
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findByIdAndDelete(params.id);
    if (!prompt) {
      return new Response({ status: 404, message: "Prompt pas trouvé" });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
