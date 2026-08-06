import { NextResponse } from "next/server";

import { generateProject } from "@/services/director";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const project = await generateProject(body);

    return NextResponse.json({
      success: true,
      project,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible generar el proyecto.",
      },
      {
        status: 500,
      }
    );

  }
}