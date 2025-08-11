import supabase from "../supabase";
export async function readTodos() {
  let { data: Todos, error } = await supabase
    .from("Todos")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) {
    console.log(error);
    throw "Todos could not be loaded";
  }
  return Todos;
}
