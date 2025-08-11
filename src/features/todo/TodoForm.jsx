import { useFormik } from "formik";
import { createTodos } from "../../services/todos/createTodos";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

function TodoForm({ title, setIsFormOpen }) {
  const queryClient = useQueryClient();

  const createdTodo = useMutation({
    mutationFn: createTodos,
    onSuccess: () => {
      setIsFormOpen(false);

      queryClient.invalidateQueries(["todos"]);
    },
  });
  const formik = useFormik({
    initialValues: {
      authorId: "",
      taskTitle: "",
      taskDescription: "",
      completed: false,
    },
    onSubmit: (values) => {
      createdTodo.mutate(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg w-full space-y-6"
    >
      {/* Close icon & Title */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-gray-500 text-lg"
          onClick={() => setIsFormOpen(false)}
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div></div>
      </div>

      {/* Author ID */}
      <div>
        <label className="block text-sm font-medium mb-1">Author ID</label>
        <input
          type="text"
          name="authorId"
          placeholder="Enter author ID"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formik.values.authorId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      {/* Task Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Task Title</label>
        <input
          type="text"
          name="taskTitle"
          placeholder="Enter task title"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formik.values.taskTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      {/* Task Description */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Task Description
        </label>
        <textarea
          name="taskDescription"
          placeholder="Enter task description"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formik.values.taskDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows={4}
        />
      </div>

      {/* Toggle for Completed */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Mark as Complete</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="completed"
            checked={formik.values.completed}
            onChange={formik.handleChange}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
      >
        {title}
      </button>
    </form>
  );
}

export default TodoForm;
