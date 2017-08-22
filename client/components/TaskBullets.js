import React from 'react';

const TaskBullets = (props) => {
    const { tasks, day } = props;
    return (
        <div>
            {tasks.map((task, idx) => (
                    <span  key={idx}>{task.status === 'complete' ?

                            <span key={idx}  style={{ color: `${task.category.color.hex}`}} > &#x2613;</span>
                          :

                            <span key={idx}  style={{ color: `${task.category.color.hex}` }}>  &#x25CF;</span>
                    }
                </span>
            ))}
        </div>
    )
}

export default TaskBullets;
