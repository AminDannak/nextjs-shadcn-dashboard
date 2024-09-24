import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCaption,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";

interface Props {
  limit?: number;
  title?: string;
}

export default function PostsTable(props: Props) {
  // sort posts in descending order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // filter posts to the limit
  const filteredPosts = !props.limit
    ? sortedPosts
    : sortedPosts.slice(0, props.limit);

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {props.title ? props.title : "posts"}
      </h3>
      <Table>
        {/* <TableCaption>A list of recent posts</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
