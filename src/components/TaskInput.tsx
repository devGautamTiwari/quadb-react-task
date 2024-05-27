
interface TaskInputProps {
    onAdd: (task: string) => void;
}

function TaskInput({ onAdd }: TaskInputProps) {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const form = event.target as HTMLFormElement; // Get the form element
        const input = form.elements.namedItem("new-task") as HTMLInputElement; // Get the input element
        if (!input.value.trim()) return; // If the input is empty, return, i.e, do nothing
        onAdd(input.value.trim()); // Call the onAdd function with the input value
        input.value = ""; // Clear the input value
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-2">
                <div className="flex flex-col flex-1">
                    <label htmlFor="new-task" className="text-sm opacity-80  pb-1">Task name</label>
                    <input type="text" id="new-task" name="new-task" className="px-1 py-1 border-2 text-green-900 border-green-100 rounded hover:border-green-200 focus:outline-none focus:border-green-400" placeholder="walk the dog"/>
                </div>
                <button type="submit" className="button rounded bg-green-700 text-green-50 tracking-wider">Add Task</button>
            </form>
        </div>
    );
}

export default TaskInput;