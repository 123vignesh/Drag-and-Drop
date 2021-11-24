import React, { Component } from 'react';
import Quiz from './Quiz'
import Card from './Card'
import { Questions, options } from './Questions.js'
import './Quiz.css'


export default class Quizbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            qId: Questions[0].id,
            question: Questions[0].Q,
            option: options,
            id: 0,
        }
    }



    render() {
        let handleNextClick = (e) => {

            if (this.state.qId === 1) {
                this.setState({
                    id: 0
                })
            } else if (this.state.qId === 2) {
                this.setState({
                    id: 1
                })
            } else if (this.state.qId === 3) {
                this.setState({
                    id: 2
                })
            }

            if (this.state.qId < 3) {
                this.setState({
                    qId: this.state.qId + 1,
                    question: Questions[this.state.qId - 1].Q
                })
            } else if (this.state.qId == 3) {
                this.setState({
                    qId: 4,
                    question: Questions[2].Q
                })
            }
        }


        return (
            <>
                <section className="WholeBoard">
                    <section className="QuestionPart">
                        {this.state.question}
                    </section>
                    <section className="QuizBoxes">

                        <section className="flexbox">

                            <Quiz id="board-1" className="board">
                                <div className="Header">
                                    <h2>Drag From Here</h2>
                                </div>
                                <Card id="card-1" className="card" draggable="true">
                                    <p>{this.state.option[this.state.id].O1}</p>
                                </Card>
                                <Card id="card-2" className="card" draggable="true">
                                    <p>{this.state.option[this.state.id].O2}</p>
                                </Card>
                                <Card id="card-3" className="card" draggable="true">
                                    <p>{this.state.option[this.state.id].O3}</p>
                                </Card>
                                <Card id="card-4" className="card" draggable="true">
                                    <p>{this.state.option[this.state.id].O4}</p>
                                </Card>
                            </Quiz>

                            <Quiz id="board-2" className="board">
                                <div className="Header">
                                    <h2>Drop Here</h2>
                                </div>
                            </Quiz>

                        </section>
                    </section>
                    <section className="Buttons">

                        <button
                            onClick={handleNextClick}
                        >
                            Next
                    </button>
                    </section>
                </section>
            </>
        );
    }
}


