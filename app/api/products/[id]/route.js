import { connectToDB } from "@/libs/mongodb"
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";

export const GET = async (request,{params})=>{
    const { id } = params;
    await connectToDB();
    const product = await ProductModel.findOne({_id:id});
    return NextResponse.json({product},{status:200})
}

export const PUT = async(request,{params})=>{
    const { id } = params;
    const { newname:name, newimage:image, newprice:price, newcategory:category } =await request.json();
    await connectToDB();
    await ProductModel.findByIdAndUpdate(id,{name,image,price,category});
    return NextResponse.json({message:"update success"},{status:200})
}