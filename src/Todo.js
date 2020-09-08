// Type rfce that stands for react functional component with import and hit enter..it will generate the template automatically
import React from 'react'
import { List, ListItem, ListItemText} from '@material-ui/core';

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem button>
                  <ListItemText primary={props.todo} secondary="ToDo"/>
                </ListItem>,
            </List>
            {/* <li>{props.todo}</li> */}
        </div>
    )
}

export default Todo
