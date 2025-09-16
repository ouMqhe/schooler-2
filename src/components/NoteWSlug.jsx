import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { generateSlug } from './Card';
// import {noteList} from './data/noteslist'
import Notes from './Note';

const noteList = [
  {"id": 1, "description": "E1.01 Basic Math to start with", "name": "BasicMath.md"},
  {"id": 2, "description": "E1.02 Number Theory", "name": "NumberTheory.md"},
  {"id": 3, "description": "E1.05 Sets1", "name": "Sets1.md"},
  {"id": 4, "description": "E1.08 Powers and Roots", "name": "PowersRoots.md"},
  {"id": 5, "description": "E1.09 Fractions 1", "name": "Fractions1.md"},
  {"id": 6, "description": "E1.11 Ratio and Proportion", "name": "E1.11 Ratio and Proportion.md"},
  {"id": 7, "description": "E1.12 Rates", "name": "E1.12 Rates.md"},
  {"id": 8, "description": "E1.13 Percentages", "name": "E1.13 Percentages.md"},
  {"id": 9, "description": "E1.15 Time", "name": "E1.15 Time.md"},
  {"id": 10, "description": "E1.17 Exponential Growth and Decay", "name": "E1.17 Exponential Growth and Decay.md"},
  {"id": 11, "description": "E2.1 Introduction to Algebra", "name": "E2.1 Introduction to Algebra.md"},
  {"id": 12, "description": "E2.3 Algebraic Fractions", "name": "E2.3 Algebraic Fractions.md"},
  {"id": 13, "description": "E2.4 Indices II", "name": "E2.4 Indices II.md"},
  {"id": 14, "description": "E2.5 Equations", "name": "E2.5 Equations.md"},
  {"id": 15, "description": "E2.6 Inequalities(NEEDSREWORK)", "name": "E2.6 Inequalities(NEEDSREWORK).md"},
  {"id": 16, "description": "E2.8 Proportion", "name": "E2.8 Proportion.md"},
  {"id": 17, "description": "E2.10 Graphs of Functions", "name": "E2.10 Graphs of Functions.md"},
  {"id": 18, "description": "E2.11 Sketching Curves", "name": "E2.11 Sketching Curves.md"},
  {"id": 19, "description": "E2.12 Differentiation", "name": "E2.12 Differentiation.md"},
  {"id": 20, "description": "E2.13 Functions", "name": "E2.13 Functions.md"},
  {"id": 21, "description": "E3.1 Coordinates", "name": "E3.1 Coordinates.md"},
  {"id": 22, "description": "E3.5 Equations of Linear Graphs", "name": "E3.5 Equations of Linear Graphs.md"},
  {"id": 23, "description": "E3.6 Parallel Lines", "name": "E3.6 Parallel Lines.md"},
  {"id": 24, "description": "E4.1 Geometrical Terms", "name": "E4.1 Geometrical Terms.md"},
  {"id": 25, "description": "E4.1 Geometrical Terms (Continued)", "name": "E4.1 Geometrical Terms (Continued).md"},
  {"id": 26, "description": "E4.2 Geometrical Constructions", "name": "E4.2 Geometrical Constructions.md"},
  {"id": 27, "description": "E4.4 Similarity", "name": "E4.4 Similarity.md"},
  {"id": 28, "description": "E4.6 Angles", "name": "E4.6 Angles.md"},
  {"id": 29, "description": "E4.7 Circle Theorems I", "name": "E4.7 Circle Theorems I.md"},
  {"id": 30, "description": "E5 Circles, Arcs, Sectors, Surface Area & Volume", "name": "E5 Circles, Arcs, Sectors, Surface Area & Volume.md"},
  {"id": 31, "description": "E5 Compound Shapes and Solids", "name": "E5 Compound Shapes and Solids.md"},
  {"id": 32, "description": "E5 Units, Area, and Perimeter", "name": "E5 Units, Area, and Perimeter.md"},
  {"id": 33, "description": "E5.3 Circles, Arcs and Sectors", "name": "E5.3 Circles, Arcs and Sectors.md"},
  {"id": 34, "description": "E6 Pythagoras' Theorem and Trigonometry", "name": "E6 Pythagoras' Theorem and Trigonometry.md"},
  {"id": 35, "description": "E6.3 Exact Trigonometric Values", "name": "E6.3 Exact Trigonometric Values.md"},
  {"id": 36, "description": "E6.5 Non-Right-Angled Transpics", "name": "E6.5 Non-Right-Angled Transpics.md"},
  {"id": 37, "description": "E7 Transformations and Vectors", "name": "E7 Transformations and Vectors.md"},
  {"id": 38, "description": "E7.1 Transformations", "name": "E7.1 Transformations.md"},
  {"id": 39, "description": "E7.3 Magnitude of a Vector", "name": "E7.3 Magnitude of a Vector.md"},
  {"id": 40, "description": "E8.1 Introduction to Probability", "name": "E8.1 Introduction to Probability.md"},
  {"id": 41, "description": "E8.3 Probability of Combined Events", "name": "E8.3 Probability of Combined Events.md"},
  {"id": 42, "description": "E9 Statistics", "name": "E9 Statistics.md"},
  {"id": 43, "description": "E9.3 Averages and Measures of Spread", "name": "E9.3 Averages and Measures of Spread.md"},
  {"id": 44, "description": "E9.6 Cumulative Frequency Diagrams", "name": "E9.6 Cumulative Frequency Diagrams.md"}
]


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
