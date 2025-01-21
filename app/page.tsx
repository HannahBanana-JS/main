"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

// Configure Amplify
Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Home() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Website!</h1>
      <p>This is my homepage.</p>

      {/* Add a link to the About Me page */}
      <Link href="/about">
        <button>About Me</button>
      </Link>
    </main>
  );
}



