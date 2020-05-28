import React from 'react';
import './ToDoListItem.css';

type Props = {
    title: string;
    description: string;
};

export function ToDoListItem(props: Props) {
    const {
        title,
        description
    } = props;

    return (
        <div className="ToDoListItem">
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
        </div>
    );
}
