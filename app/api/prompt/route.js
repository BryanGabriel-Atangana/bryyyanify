import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
