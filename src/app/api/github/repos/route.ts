import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hayato-shino05/repos?sort=updated&direction=desc", 
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Github repositories");
    }

    const repos = await response.json();
    return NextResponse.json(repos);
  } catch (error) {
    console.error("Error fetching Github repositories:", error);
    return NextResponse.json(
      { error: "Failed to fetch Github repositories" },
      { status: 500 }
    );
  }
} 