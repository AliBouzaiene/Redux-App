import React, { Component } from 'react'
import {ListGroup} from 'reactstrap'
import TaskItem from './item';
import {connect} from 'react-redux'
import {markDone, deleteTask} from '../../store/actions/TaskAction'
class TaskLists extends Component {

    state = {
        collapse: false,
        isopen:false
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }


    balControl = e => {
        console.log(e)
    }

    filterTask(tasks, status) {
        switch (status) {
            case 'ACTIVE':
                return tasks.filter(task => task.isComplete === false);
                
            case 'COMPLETE':
                return tasks.filter(task => task.isComplete === true);
                
            default: return tasks;
        }
    }
    render() {
        
        let {tasks, markDone, status, deleteTask} = this.props;
        if(tasks.length === 0) return <p>Ther are no Task</p>
      
       let filterTasks = this.filterTask(tasks,status )
        return (
        <ListGroup>
               {filterTasks.map(task => 
                    <TaskItem
                        colaspstate={this.state.collapse} 
                        task={task} key={task.id} 
                        collap={this.toggle} 
                        mark={markDone} 
                    delet={deleteTask} />)}
          </ListGroup>
        )
    }
}

const mapDispatchToProps = state => ({
    tasks:state.tasks.tasks,
   status:state.tasks.filter
})
export default connect(mapDispatchToProps, {markDone, deleteTask})(TaskLists);