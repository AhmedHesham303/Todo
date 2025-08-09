import supabase from "./supabase";
export async function readTodos() {
  let { data: Todos, error } = await supabase.from("Todos").select("*");
  if (error) {
    console.log(error);
    throw "Todos could not be loaded";
  }
  return Todos;
}

export async function createTodos(title) {
  const { data, error } = await supabase
    .from("Todos")
    .insert([
      {
        title: title,
        completed: false,
        authorId: 1,
        description: "new",
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting todo:", error);
    throw new Error(error.message);
  }

  return data[0];
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
