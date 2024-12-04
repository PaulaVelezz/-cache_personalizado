import { NextResponse } from "next/server";

export const config = {
    matcher: ["/"],
};

export default async function middleware(request) {
   const searchParams = request.nextUrl.searchParams;
   const visitor = searchParams.get("visitor");

   if (visitor) {
        request.nextUrl.searchParams.delete("visitor");
        const response = NextResponse.redirect(new URL("/", request.nextUrl));
        response.cookies.set("visitor", visitor);
        return response;
    }

   return NextResponse.next();
};