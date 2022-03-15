import React from 'react'
import { Button, ButtonGroup} from 'reactstrap'
import {filterTask} from '../../store/actions/TaskAction';
import {connect } from 'react-redux'
const TopNav = (props) =>{
    let {filterTask} = props;
    return (
             <ButtonGroup style={{marginLeft:'90px'}}>
                <Button color="primary" onClick={() => filterTask('ALL')}>All</Button>
                <Button color="danger" onClick={() => filterTask('ACTIVE')} >Active</Button>
                <Button color="success" onClick={() => filterTask('COMPLETE')} >Done</Button>
             </ButtonGroup>
      
    )
}

export default connect(null, {filterTask})(TopNav);