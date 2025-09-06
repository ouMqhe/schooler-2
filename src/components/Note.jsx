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