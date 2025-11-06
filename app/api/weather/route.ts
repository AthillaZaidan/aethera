import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city") || "Bandung";
  const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Store your key in .env

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${apiKey}`;

  const resp = await fetch(url);
  if (!resp.ok) {
    return NextResponse.json({ error: "Failed to fetch weather" }, { status: resp.status });
  }
  const data = await resp.json();
  return NextResponse.json(data);
}
