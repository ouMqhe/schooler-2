import React from "react";
import ReactMarkdown from "react-markdown";

export default function ProfileViewer({ mainHeader, shortDesc, markdown }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <div className="mb-4 border-b pb-2">
        <h1 className="text-3xl font-bold">{mainHeader}</h1>
        <p className="text-lg text-gray-600">{shortDesc}</p>
      </div>
      <ReactMarkdown
        components={{
          img: ({node, ...props}) => (
            <div className="flex justify-center my-4">
              <img
                {...props}
                className="max-w-xs w-full h-auto rounded shadow"
                alt={props.alt || ""}
              />
            </div>
          ),
        }}
        children={markdown}
      />
    </div>
  );
}