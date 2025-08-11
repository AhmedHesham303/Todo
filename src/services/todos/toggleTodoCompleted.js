import supabase from "../supabase";

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
