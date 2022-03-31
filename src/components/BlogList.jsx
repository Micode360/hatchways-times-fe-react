import React, { useState } from "react";
import blogs from "../data/blogs.json";
import Pagination from "./Pagination";
import BlogPost from "./BlogPost";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const currentPaginationData = () => {
    const startIndex = currentPage * pageSize - pageSize;
    const endIndex = startIndex + pageSize;
    return blogs.posts.slice(startIndex, endIndex);
  };

  const updateRowsPerPage = (newPageSizeValue) =>
    setPageSize(parseInt(newPageSizeValue, 10));

  const updatePage = (currentPageValue) => setCurrentPage(currentPageValue);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      {currentPaginationData().map((blog) => (
        <BlogPost
          key={blog.id}
          author={blog.author}
          title={blog.title}
          excerpt={blog.excerpt}
          featureImage={blog.image}
          readingTimeMinutes={blog.readingTimeMinutes}
        />
      ))}
    </div>
  );
}

export default BlogList;
