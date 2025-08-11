import supabase from "../supabase";

export async function createTodos({
  authorId,
  taskTitle,
  taskDescription,
  completed,
}) {
  const { data, error } = await supabase
    .from("Todos")
    .insert([
      {
        title: taskTitle,
        completed,
        authorId,
        description: taskDescription,
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting a todo:", error);
    throw new Error(error.message);
  }

  return data[0];
}
