import { connectToDB } from "@/libs/mongodb";
import ProductModel from "@/models/ProductModel";
import {NextResponse} from "next/server";


export const GET = async() =>{
    await connectToDB();
    const products = await ProductModel.find({});
    return NextResponse.json({products});
}

export const POST = async(request)=>{
    const {name, image, price, category} = await request.json();
    await connectToDB();
    await ProductModel.create({name,image,price,category});
    return NextResponse.json({message:"Created successfully"},{status:201});
}

export const DELETE = async(request)=>{
    const id = request.nextUrl.searchParams.get('id');
    await connectToDB();
    await ProductModel.findByIdAndDelete({_id:id});
    return NextResponse.json({message:"Deleted successfully"},{status:200});
}