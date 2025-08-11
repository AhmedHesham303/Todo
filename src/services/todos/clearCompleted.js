import supabase from "../supabase";

export async function clearCompleted() {
  const { error } = await supabase.from("Todos").delete().eq("completed", true);
  if (error) {
    console.error("Error deleting completed todo:", error);
    throw new Error(error.message);
  }
}
