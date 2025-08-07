export async function readTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to show todos");
  const data = await res.json();
  return data;
}

export async function createTodos(title) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 11,
        title: title,
        completed: false,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Server error response:", errText);
      throw new Error("Failed to create a todo");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Mutation error:", err);
    throw err;
  }
}
