import React, { Component } from 'react';

import './Quiz.css'

export default class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {

        let dragStart = (e) => {
            const target = e.target;
            e.dataTransfer.setData('card_id', target.id);
            setTimeout(() => {
                target.style.display = "none";

            }, 0);
        }

        let dragOver = (e) => {
            e.stopPropagation();

        }

        return (
            <div
                draggable={this.props.draggable}
                id={this.props.id}
                onDragStart={dragStart}
                onDragOver={dragOver}
                className={this.props.className}
            >
                {this.props.children}
            </div>

        );
    }
}


