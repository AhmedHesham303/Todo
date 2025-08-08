import supabase from "./supabase";
export async function readTodos() {
  let { data: Todos, error } = await supabase.from("Todos").select("*");

  return Todos;
}

export async function createTodos(title) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 11,
      title,
      completed: false,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Server error response:", errText);
    throw new Error("Failed to create a todo");
  }

  return await res.json();
}

export async function deleteTodos(id) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Delete failed:", err);
  }
  return id;
}

export async function toggleTodoCompleted(id, completed) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !completed }),
      }
    );
    if (!res.ok) throw new Error("Failed to toggle");

    await res.json();
    return id;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function clearCompleted() {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: false }),
    });

    return true;
  } catch (err) {
    console.error("clearCompleted error:", err);
    throw err;
  }
}

export async function clearAll() {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    return true;
  } catch (err) {
    console.error("clearAll error:", err);
    throw err;
  }
}
