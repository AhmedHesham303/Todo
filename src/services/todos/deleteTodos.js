import supabase from "../supabase";

export async function deleteTodos(id) {
  const { error } = await supabase.from("Todos").delete().eq("id", id);
  if (error) {
    console.error("Error deleting a todo:", error);
    throw new Error(error.message);
  }
  return id;
}
