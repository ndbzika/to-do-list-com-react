import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from './Button';

import "./TaskDetails.css"

const TaskDetails = () => {
    const params  = useParams();

    return ( 
        <>
            <div className="back-button-container">
                <Link to={`/`}><Button>Voltar</Button></Link>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro debitis. Fugit dolorem tempore unde possimus aut magni vitae harum eum repellat! Minima aliquid excepturi, recusandae unde magni nemo commodi?
                </p>
            </div>
        </>
        
    );
}

export default TaskDetails;