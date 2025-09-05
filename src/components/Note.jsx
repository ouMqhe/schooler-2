import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
// import ImageRenderer from "./ImageRenderer";
import PrimaryOutlineSemiRoundedButtonWithIcon from "./OutlineBtn";

export default function Notes({ markdown }) {
    console.log("Markdown content:", markdown);
 
  // Custom renderer for images to handle relative paths
  const renderers = {
    image: ({ src, alt }) => {
      // If it's a relative path to the pictures folder, resolve it properly
      if (src.startsWith('./pictures/')) {
        const imageName = src.split('/').pop();
        
        // Method 1: If images are in the public folder
        const publicImageUrl = process.env.PUBLIC_URL + `/pictures/${imageName}`;
        console.log("Public Image URL:", publicImageUrl);
        return (
          <div className="image-container">
            <img src={publicImageUrl} alt={alt} className="blog-image" />
            {alt && !alt.startsWith('*') && <p className="image-caption">{alt}</p>}
          </div>
        );
      }
      
      // Handle absolute URLs (external images)
      return (
        <div className="image-container">
          <img src={src} alt={alt} className="blog-image" />
          {alt && !alt.startsWith('*') && <p className="image-caption">{alt}</p>}
        </div>
      );
    },}
  return (
    <div 
    
    className="max-w-2xl mx-auto p-6 bg-red rounded shadow prose prose-lg">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        // escapeHtml={false}
        // renderers={{ "image":  ImageRenderer }}
        // components={renderers}
      />
<PrimaryOutlineSemiRoundedButtonWithIcon
 title={"Got It"}/>
    </div>
  );
}