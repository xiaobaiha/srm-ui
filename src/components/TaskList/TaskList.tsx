import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Empty from '../Empty/Empty';

const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

interface TaskItem {
    id: string;
    content: string;
    subContent?: string;
    onClick?: (task: TaskItem) => void;
}

interface TaskListProps{
    tasks: TaskItem[];
}

interface TaskListState {
    currentTask?: TaskItem;
}

class TaskList extends React.Component<TaskListProps, TaskListState> {
    constructor(props: TaskListProps){
        super(props);
        this.state = {
            currentTask: undefined
        }
    };

    handleClick = (task: TaskItem) => {
        this.setState({currentTask: task});
        task.onClick && task.onClick(task);
    };

    render(){
        const {tasks} = this.props;

        return <div style={{width: "100%", border: '1px solid rgba(0,0,0,.1)'}}>
            {tasks.length !== 0?<List>
                {tasks.map(task => {
                    return <ListItem key={task.id} button onClick={()=>this.handleClick(task)} 
                        className="flex"
                        style={{
                            height: "50px", 
                            justifyContent: "space-between",
                            background: this.state.currentTask === task ? "#EEE" : 'transparent'
                        }}>
                        <span style={{fontSize: "1.2rem"}}>{task.content}</span>
                        <span style={{fontSize: "0.8rem", alignSelf: "flex-end"}}>{task.subContent}</span>
                    </ListItem>
                })}
            </List>:
            <Empty message="任务列表为空" />}
        </div>;
    };
}

export default TaskList;