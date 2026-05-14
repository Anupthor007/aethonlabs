import OpenAI from "openai";

import { NextResponse } from "next/server";

import { SYSTEM_PROMPT } from "@/prompts/systemPrompt";

const client = new OpenAI({
  apiKey: process.env.CEREBRAS_API_KEY,
  baseURL: "https://api.cerebras.ai/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const completion =
      await client.chat.completions.create({
        model: "llama3.1-8b",

        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: body.message,
          },
        ],
      });

    return NextResponse.json({
      reply:
        completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}