export async function readTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to show todos");
  return await res.json();
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
  return id; // return id so we can remove it from cache
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

    await res.json(); // ignore actual response for fake API
    return id;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
