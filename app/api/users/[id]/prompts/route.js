import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  console.log(params);
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
