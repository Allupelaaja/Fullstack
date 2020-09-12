import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercises={props.ex1} />
            <Part part={props.part2} exercises={props.ex2} />
            <Part part={props.part3} exercises={props.ex3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content 
            part1={part1} 
            part2={part2} 
            part3={part3}/>
            <Total 
            ex1={exercises1} 
            ex2={exercises2} 
            ex3={exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))