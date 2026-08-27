import { NextResponse } from "next/server";
import { z } from "zod";

import { sendLeadEmails } from "@/lib/email/service";
import { leadCaptureSchema } from "@/lib/validations/lead-capture";

const leadApiSchema = leadCaptureSchema.omit({ notRobot: true }).extend({
  phone: z.string().min(6).max(30),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = leadApiSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    const result = await sendLeadEmails({
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      helpType: parsed.data.helpType,
      businessType: parsed.data.businessType,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to send details. Please try again later.",
      },
      { status: 500 },
    );
  }
}
