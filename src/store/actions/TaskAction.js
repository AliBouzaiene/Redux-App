import { ADD_TASK, MARK_DONE,FILTER_TASK, EDITE_TASK, REMOVE_TASK } from "./actionType";

export const addTask = task => {
    return {type:ADD_TASK, payload:task}
}

export const markDone = id => {
    return {type:MARK_DONE, payload:id}
}

export const filterTask = activeFilter => {
    return {type:FILTER_TASK, payload:activeFilter}
}

export const editeTask = editeTod => {
    return {type:EDITE_TASK, payload:editeTod}
}

export const deleteTask = id => {
    return{type:REMOVE_TASK, payload:id}
}