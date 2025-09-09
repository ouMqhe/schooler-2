import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
// import ImageRenderer from "./ImageRenderer";
import PrimaryOutlineSemiRoundedButtonWithIcon from "./OutlineBtn";
import { Button } from "@mui/material";
export default function Notes({ markdown, linkto }) {
    console.log("Markdown content:", markdown);
 
  // Custom renderer for images to handle relative paths
     //ReactMarkdown accepts custom renderers
    const renderers = {
        //This custom renderer changes how images are rendered
        //we use it to constrain the max width of an image to its container
        image: ({
            alt,
            src,
            title,
        }) => (
            <img 
                alt={alt} 
                src={src} 
                title={title} 
                style={{ maxWidth: 475 }}  />
        ),
    };

  return (
    <div 
    
    className="max-w-2xl mx-auto p-6 bg-red rounded shadow prose prose-lg">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
{/* <PrimaryOutlineSemiRoundedButtonWithIcon
 title={"Got It"}/> */}
 <Button variant="outlined" color="primary"
  onClick={() => linkto()}
 >I Got It</Button>
    </div>
  );
}