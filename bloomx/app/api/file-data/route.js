// app/api/file-data/route.js

import { NextResponse } from "next/server";
import fs from "fs/promises"; // Node.js ka 'fs' module use ho raha hai

export async function GET() {
  try {
    // Yeh code Node.js environment mein chalega
    const data = await fs.readFile("/path/to/your/file.txt", "utf8");

    return NextResponse.json({ success: true, fileContent: data });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("Failed to read file", { status: 500 });
  }
}
