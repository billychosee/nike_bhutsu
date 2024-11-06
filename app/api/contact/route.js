//Post Request to add email to database
//Next.js allows you to define API routes by creating JavaScript files inside the api folder (Can be any folder)

import { NextResponse } from "next/server";
const { connectDB } = require("@/app/lib/mongodb.js");
import mongoose from "mongoose";
import Contact from "@/app/models/contact.js";
import DiscountCode from "@/app/models/discountCode.js";

export async function POST(req) {
  const { email } = await req.json();
  console.log("Email (In Route):" + email);

  try {
    await connectDB();
    await Contact.create({ email });

    return NextResponse.json({
      msg: "success",
      success: true,
    }); //Response from API
  } catch (err) {
    console.log(err);

    if (err instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in err.errors) {
        errorList.push(e.message);
      }

      return NextResponse.json({ msg: errorList, success: false });
    } else
      return NextResponse.json({
        msg: "fail",
        success: false,
      });
  }
}

export async function GET(req) {
  try {
    await connectDB();

    // Find all discount codes
    const discountCodes = await DiscountCode.find({});

    if (discountCodes.length > 0) {
      return NextResponse.json({
        msg: "success",
        success: true,
        discountCodes: discountCodes,
      });
    } else {
      return NextResponse.json({
        msg: "No discount codes found",
        success: false,
      });
    }
  } catch (err) {
    console.error(err);

    return NextResponse.json({
      msg: "fail",
      success: false,
    });
  }
}
