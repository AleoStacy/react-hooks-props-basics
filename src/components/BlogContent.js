import React from "react";

function BlogContent(props) {
  return <div id="blog-content"> 
  <p>{props.articleText}</p>
  </div>;
}

export default BlogContent;
