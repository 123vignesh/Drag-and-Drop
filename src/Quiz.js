import React, { Component } from 'react';

import './Quiz.css'

export default class Quiz extends Component {


    render() {
        let count = 0

        let drop = (e) => {
            e.preventDefault();
            const card_id = e.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id)

            card.style.display = 'block';

            e.target.appendChild(card);
            count++


            if (count === 4) {


                let final = document.getElementById('board-2')
                if (final.children[1].innerHTML === "<p>Jawaharlal Nehru</p>" && final.children[2].innerHTML === "<p>Gulzarilal Nanda</p>" && final.children[3].innerHTML === "<p>Lal Bahadur Shastri</p>" && final.children[4].innerHTML === "<p>Indira Gandhi</p>" ||
                    final.children[1].innerHTML === "<p>Rajendra Prasad</p>" && final.children[2].innerHTML === "<p>Sarvepalli Radhakrishnan</p>" && final.children[3].innerHTML === "<p>Zakir Hussain</p>" && final.children[4].innerHTML === "<p>V. V. Giri</p>" ||
                    final.children[1].innerHTML === "<p>India</p>" && final.children[2].innerHTML === "<p>Australia</p>" && final.children[3].innerHTML === "<p>Pakistan</p>" && final.children[4].innerHTML === "<p>Srilanka</p>"
                ) {

                    final.style.backgroundColor = "green"
                    setTimeout(() => {
                        final.style.backgroundColor = "white"
                    }, 1000)
                } else {
                    final.style.backgroundColor = "red"
                    setTimeout(() => {
                        final.style.backgroundColor = "white"
                    }, 1000)
                }
                setTimeout(() => {
                    let First = document.getElementById('board-1')
                    First.appendChild(document.getElementById('card-2'))
                    First.appendChild(document.getElementById('card-4'))
                    First.appendChild(document.getElementById('card-1'))
                    First.appendChild(document.getElementById('card-3'))


                }, 2000)

            }
        }

        let dragOver = (e) => {
            e.preventDefault()

        }

        return (
            <section className="boardSection">
                <div
                    className={this.props.className}
                    id={this.props.id}
                    onDrop={drop}
                    onDragOver={dragOver}

                >

                    {this.props.children}

                </div>


            </section>

        );
    }
}


