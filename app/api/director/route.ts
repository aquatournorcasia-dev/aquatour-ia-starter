import { NextResponse } from "next/server";

import { generateProject } from "@/services/director";

export async function POST(req: Request) {

  const body = await req.json();

  const result = await generateProject(body);

  return NextResponse.json(result);

}