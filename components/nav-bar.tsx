import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/img/logo.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function NavBar() {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
      <Link href="/">
        <Image src={logo} alt="logo" width={40} />
      </Link>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-black">?</AvatarFallback>
      </Avatar>
    </div>
  );
}
