import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
// import ImageRenderer from "./ImageRenderer";
import { Button } from "@mui/material";
import remarkGfm from 'remark-gfm';
import { useState } from "react";
import Quizzer from "../pages/Quizzer";
import Drawer from '@mui/material/Drawer';

export default function Notes({ title, markdown, linkto }) {
    // console.log("Markdown content:", markdown);
      const [open, setOpen] = useState(false);
    
   const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);

  };

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
    <h1>{title}</h1>

      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        remarkRehypeOptions={{ passThrough: ['link'] }}

        components={renderers}
      />
{/* <PrimaryOutlineSemiRoundedButtonWithIcon
 title={"Got It"}/> */}
 <Button variant="outlined" color="primary"
  onClick={toggleDrawer(true)}
 >I Got It. Quiz Me</Button>
    <Drawer open={open} 
    anchor='bottom'
    onClose={toggleDrawer(false)}
    
    >            
    <Quizzer />
          
</Drawer>
    </div>
  );
}