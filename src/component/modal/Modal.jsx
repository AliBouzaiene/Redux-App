import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {addTask} from '../../store/actions/TaskAction'
class Modals extends React.Component {
    state = {
        modal: true,
        title:'',
        description:''
      };

  toggle = ()=> {
    this.setState({modal: !this.state.modal });
  }
  changeHandler = e => {
      this.setState({[e.target.name]:e.target.value})
  }
  submitHandle = e => {
        e.preventDefault()
        this.setState({modal: !this.state.modal });
        let id = parseInt(Date.now())
        const task = {
            title:this.state.title,
            description:this.state.description,
            isComplete:false,
            id:id
        }
        this.props.addTask(task)
        this.setState({
          modal:!this.state.modal,
          title:'',
        description:''
        })
        
  }

  render() {

    let {title, description}  = this.state
    return (
      <div>
        <Button style={{marginTop:'-67px'}} color="danger" onClick={this.toggle}>Add Task</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create new Task</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.submitHandle}>
            <FormGroup>
            <Label for="title">Title of Task</Label>
            <Input type="text" onChange={this.changeHandler} required value={title} name="title" id="title" placeholder="Task Title" />
            </FormGroup>
            <FormGroup>
            <Label for="description">Task Description</Label>
            <Input type="textarea" required onChange={this.changeHandler} value={description} name="description" id="description" placeholder="Task description" />
            </FormGroup>
            <Button color="primary">Submit</Button>
        </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


export default connect(null, {addTask}) (Modals);