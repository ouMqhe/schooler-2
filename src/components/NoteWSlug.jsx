import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { generateSlug } from './Card';
import {noteList} from './data/noteslist'
import Notes from './Note';


export default function NoteWSlug() {
      const { slug } = useParams();
        const [markdown, setMarkdown] = useState("");
      
const notePost = noteList.find(post => generateSlug(post.description) === slug);
// console.log(generateSlug);
console.log(notePost);

  const [count, setCount] = useState(0);

  // This useEffect will run after every render where 'count' has changed.
  useEffect(() => {
          fetch(`/notes/${notePost.description}/${notePost.description}.md`)
      .then((res) => res.text())
      .then(setMarkdown)
      .then(() => console.log(title))
      // .then(() => console.log(markdown))
  }, [count])

  return (
        
        <Notes title={notePost.description} markdown={markdown}/>
    
  )
}