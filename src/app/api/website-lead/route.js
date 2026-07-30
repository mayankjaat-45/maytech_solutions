import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/*
 * Browser test:
 * GET /api/website-lead
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "MayTech website lead API is working",
  });
}

/*
 * Form submission:
 * POST /api/website-lead
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const crmApiUrl = process.env.CRM_API_URL?.replace(/\/+$/, "");

    if (!crmApiUrl) {
      console.error("CRM_API_URL is missing");

      return NextResponse.json(
        {
          success: false,
          message: "CRM_API_URL is not configured",
        },
        {
          status: 500,
        },
      );
    }

    const crmEndpoint = `${crmApiUrl}/api/leads/website`;

    console.log("Sending website enquiry to:", crmEndpoint);

    const response = await fetch(crmEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const responseText = await response.text();

    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      data = {
        success: false,
        message:
          responseText || `Invalid CRM response. Status: ${response.status}`,
      };
    }

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("WEBSITE LEAD PROXY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message || "Unable to submit enquiry. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
