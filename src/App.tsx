import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import {
	addTask,
	deleteTask,
	selectTasks,
	toggleTask,
} from "./slicers/taskSlice";

function App() {
	const tasks = useSelector(selectTasks); // Get tasks from the store
	const dispatch = useDispatch();

	const handleAdd = (task: string) => {
		// Add task to the store
		// where id is a current time(useful when sorting),
		// name is the task name,
		// and isComplete is the completion status of the task
		dispatch(addTask({ id: Date.now(), name: task, isComplete: false }));
	};

	return (
		<div className="px-2 py-8 md:px-8">
			<h1 className="text-center font-extrabold uppercase text-6xl mb-8">
				My TO-DO List
			</h1>
			<div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
				{/* Input to take new entries for task */}
				<TaskInput onAdd={handleAdd} />
				<div className="">
          <h2 className="text-2xl font-bold mb-4">Task list</h2>
          {/* List of tasks */}
          <TaskList>
            {/* Make a TaskList.Item component for each element in `tasks` variable  */}
						{tasks.map((task) => (
							<TaskList.Item
								key={task.id}
								id={task.id}
								name={task.name}
								isComplete={task.isComplete}
								onDelete={() => dispatch(deleteTask(task.id))}
								onToggle={() => dispatch(toggleTask(task.id))}
							/>
						))}
					</TaskList>
				</div>
			</div>
		</div>
	);
}

export default App;
