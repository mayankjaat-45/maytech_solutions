import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();

    const crmApiUrl = process.env.CRM_API_URL;

    if (!crmApiUrl) {
      console.error("CRM_API_URL is missing");

      return NextResponse.json(
        {
          success: false,
          message: "CRM API is not configured",
        },
        {
          status: 500,
        },
      );
    }

    const response = await fetch(`${crmApiUrl}/api/leads/website`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json().catch(() => ({
      success: false,
      message: "Invalid response received from CRM backend",
    }));

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("WEBSITE LEAD PROXY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit enquiry. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}
