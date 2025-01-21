"use client";
import { useState } from "react";

export default function About() {
  const [showWork, setShowWork] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div>
      <h1>About Me</h1>
      <p>This is the About Me page for my personal website.</p>

      {/* Buttons to toggle sections */}
      <button onClick={() => setShowWork(!showWork)}>Toggle Work Experience</button>
      {showWork && (
        <div>
          <h2>Work Experience</h2>
          <p>I have worked at XYZ Company as a Software Developer.</p>
        </div>
      )}

      <button onClick={() => setShowEducation(!showEducation)}>Toggle Education</button>
      {showEducation && (
        <div>
          <h2>Education</h2>
          <p>I graduated with a degree in Computer Science from ABC University.</p>
        </div>
      )}

      {/* Add photo section */}
      <div>
        <h2>My Photos</h2>
        <img src="your-photo-url.jpg" alt="Your Photo" />
      </div>
    </div>
  );
}
