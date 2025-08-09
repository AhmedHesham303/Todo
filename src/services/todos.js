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
    console.error("Error inserting a todo:", error);
    throw new Error(error.message);
  }

  return data[0];
}

export async function deleteTodos(id) {
  const { error } = await supabase.from("Todos").delete().eq("id", id);
  if (error) {
    console.error("Error deleting a todo:", error);
    throw new Error(error.message);
  }
  return id;
}

export async function toggleTodoCompleted(id) {
  // 1️⃣ Get the current completed value
  const { data: current, error: readError } = await supabase
    .from("Todos")
    .select("completed")
    .eq("id", id)
    .single();

  if (readError) {
    console.error("Error fetching todo:", readError);
    throw new Error(readError.message);
  }

  // 2️⃣ Toggle the value
  const { data, error } = await supabase
    .from("Todos")
    .update({ completed: !current.completed })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error toggling todo:", error);
    throw new Error(error.message);
  }

  return data[0];
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
  const { error } = await supabase.from("Todos").delete().neq("id", 0);
  if (error) {
    console.error("Error clearing todos:", error);
    throw new Error(error.message);
  }
}
