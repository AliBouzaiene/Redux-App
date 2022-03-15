import React from 'react';
import { UncontrolledCollapse, CardBody, Card, Button, ListGroupItem } from 'reactstrap';

const first_style = {
  width: "40px",
  background: "#E100FF",
  height: "40px",
  display: "block",
  float: "left",
  textAlign: "center",
  borderRadius: "50%",
  padding: "7px",
  marginRight: "10px",
  textColor:'white',
}

const TaskItem = ({task, delet, mark}) => (
<ListGroupItem style={{background:"linear-gradient(to right,#4568dc, #b06ab3)"}}>
    <div className="row"  >
      <div className="col-md-7">
        <div className="first_chrac" style={first_style}>
            {task.title.charAt(0).toUpperCase()}
        </div>
      <span color="primary" className="d-flex" id={`toggler${task.id}`} style={{ marginBottom: '1rem' }}>
      {task.isComplete ? <p><strike>{task.title}</strike></p>: <p>{task.title}</p> }
      </span>
      <UncontrolledCollapse toggler={`#toggler${task.id}`}>
        <Card>
          <CardBody>
          {task.description}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      </div>
      <div className="col-md-5">
      <div className="ml-auto">
        <Button color="danger" onClick={() => delet(task.id)} style={{marginRight:'10px'}} className="ml-auto">Delete Task</Button>
        <Button color="primary" onClick={() => mark(task.id)} className="mr-auto">Add Done</Button>
      </div>
      </div>
    </div>
    </ListGroupItem>   
);

export default TaskItem;