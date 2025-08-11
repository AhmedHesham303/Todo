import supabase from "../supabase";

export async function clearAll() {
  const { error } = await supabase.from("Todos").delete().neq("id", 0);
  if (error) {
    console.error("Error clearing todos:", error);
    throw new Error(error.message);
  }
}
