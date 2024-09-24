import React from "react";
import PostsTable from "@/components/posts/post-table";
import BackButton from "@/components/back-button";
import PostPagination from "@/components/posts/post-pagination";

function PostPage() {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
}

export default PostPage;
