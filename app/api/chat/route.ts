import { NextResponse } from "next/server";

import OpenAI from "openai";

import { SYSTEM_PROMPT } from "@/prompts/systemPrompt";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = body.message;

    const previousMessages =
      body.messages || [];

    const formattedMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },

      ...previousMessages.slice(-8).map(
        (msg: any) => ({
          role: msg.role,
          content: msg.content,
        })
      ),

      {
        role: "user",
        content: message,
      },
    ];

    const completion =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: formattedMessages,
      });

    const reply =
      completion.choices[0]?.message
        ?.content ||
      "Something went wrong.";

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply:
          "Failed to generate recipe.",
      },
      {
        status: 500,
      }
    );
  }
}