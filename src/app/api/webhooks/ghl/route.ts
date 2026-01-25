import { NextRequest, NextResponse } from "next/server";

// GHL Webhook Handler
// This endpoint receives webhooks from Go High Level

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log the incoming webhook for debugging
    console.log("GHL Webhook Received:", JSON.stringify(body, null, 2));

    // Extract relevant data from the GHL webhook
    const {
      contact_id,
      contact_email,
      contact_name,
      contact_first_name,
      contact_last_name,
      custom_fields,
      source,
      tags,
      // For orders
      order_id,
      order_value,
      order_status,
    } = body;

    // Look for referral code in custom fields or source
    let referralCode = null;

    // Check custom fields for referral code
    if (custom_fields) {
      referralCode =
        custom_fields.refferq_ref ||
        custom_fields.ref ||
        custom_fields.referral_code ||
        custom_fields.affiliate;
    }

    // Check source URL for ref parameter
    if (!referralCode && source) {
      try {
        const sourceUrl = new URL(source);
        referralCode = sourceUrl.searchParams.get("ref");
      } catch (e) {
        // Source might not be a valid URL
      }
    }

    // If no referral code found, log and return success
    if (!referralCode) {
      console.log("No referral code found in webhook data");
      return NextResponse.json({
        success: true,
        message: "Webhook received, no referral code found",
      });
    }

    // Process the referral
    console.log("Processing referral for code:", referralCode);

    // In production, you would:
    // 1. Look up the affiliate by referral code
    // 2. Create a referral record
    // 3. If this is an order, calculate and create a commission

    // Example response structure
    const result = {
      success: true,
      referralCode,
      contactId: contact_id,
      contactEmail: contact_email,
      orderId: order_id || null,
      orderValue: order_value || null,
      message: "Referral processed successfully",
    };

    console.log("Referral Result:", result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("GHL Webhook Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}

// Also handle GET for webhook verification
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "active",
    message: "Refferq GHL Webhook Endpoint",
    version: "1.0.0",
  });
}
