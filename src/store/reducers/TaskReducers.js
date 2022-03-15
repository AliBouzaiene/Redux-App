import { ADD_TASK, MARK_DONE, FILTER_TASK, REMOVE_TASK, } from "../actions/actionType";
const init = {
    tasks:""
}
const Tasks = (state=init, action) => {
    switch (action.type) {
        case ADD_TASK : {
            let tasks = [...state.tasks];
            tasks = [action.payload, ...tasks]
            return {
                ...state,
                tasks
            };
        }
        case MARK_DONE : {
            let tasks = [...state.tasks];
            tasks = tasks.map(task => {
                if(task.id === action.payload) {
                    task.isComplete=!task.isComplete
                }
                return task
            })
            return {
                ...state,
                tasks
            }
        }

        case FILTER_TASK  : {
            return {
                ...state,
                filter:action.payload
            }
        }

        case REMOVE_TASK  : {
            const tasks = removeTask(state.tasks, action.payload)
            return {
                ...state,
                tasks
            }
        }

        default: return state;
    }
}

export default Tasks;

function removeTask(tasks, id) {
    return tasks = tasks.filter(task => task.id !== id)
}