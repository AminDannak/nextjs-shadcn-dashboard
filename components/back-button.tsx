import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link: string;
}

export default function BackButton(props: Props) {
  return (
    <Link
      href={props.link}
      className="text-gray-500 hover:underline flex items-center gap-1 mb-5 font-bold"
    >
        <ArrowLeftCircle size={18}/>
      {props.text}
    </Link>
  );
}
