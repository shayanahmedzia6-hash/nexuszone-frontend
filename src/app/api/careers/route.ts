import { NextResponse } from "next/server";

import { sendCareersEmails } from "@/lib/email/service";
import { careerApplicationSchema } from "@/lib/validations/careers";

const MAX_CV_BYTES = 5 * 1024 * 1024;

const ACCEPTED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isAcceptedCv(file: File): boolean {
  if (ACCEPTED_CV_TYPES.has(file.type)) return true;
  const lower = file.name.toLowerCase();
  return (
    lower.endsWith(".pdf") ||
    lower.endsWith(".doc") ||
    lower.endsWith(".docx")
  );
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? "") || undefined,
      position: String(formData.get("position") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = careerApplicationSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    const cvEntry = formData.get("cv");
    if (!(cvEntry instanceof File) || cvEntry.size === 0) {
      return NextResponse.json(
        { success: false, message: "CV file is required." },
        { status: 400 },
      );
    }

    if (!isAcceptedCv(cvEntry)) {
      return NextResponse.json(
        { success: false, message: "CV must be a PDF or Word document." },
        { status: 400 },
      );
    }

    if (cvEntry.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { success: false, message: "CV must be 5 MB or smaller." },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await cvEntry.arrayBuffer());

    const result = await sendCareersEmails(
      {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        position: parsed.data.position,
        message: parsed.data.message,
        cvFileName: cvEntry.name,
      },
      {
        filename: cvEntry.name,
        content: buffer,
        contentType: cvEntry.type || undefined,
      },
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to send application. Please try again later.",
      },
      { status: 500 },
    );
  }
}
