import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
const Statistics = (props) => {
  return (
    <>
    <table>
      <thead>
        <tr>
        <td></td>
        <td></td>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.all}/>
        <StatisticLine text="average" value={props.avg}/>
        <StatisticLine text="positive" value={props.pos}/>
      </tbody>
    </table>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    </>
)
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClickGood = value => setGood(value)
  const onClickNeutral = value => setNeutral(value)
  const onClickBad = value => setBad(value)

  let all = good + neutral + bad
  let avg = (good + neutral + bad) / 3
  let pos = good / all + '%'
    
  if (all > 0) {
    return (
    <>
      <h2>give feedback</h2>
      <div>
        <Button handleClick={() => onClickGood(good + 1)} text="good"/>
        <Button handleClick={() => onClickNeutral(neutral + 1)} text="neutral"/>
        <Button handleClick={() => onClickBad(bad + 1)} text="bad"/>
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}/>
    </>
  )
  }
  
  else {
    return (
      <>
        <h2>give feedback</h2>
        <div>
          <Button handleClick={() => onClickGood(good + 1)} text="good"/>
          <Button handleClick={() => onClickNeutral(neutral + 1)} text="neutral"/>
          <Button handleClick={() => onClickBad(bad + 1)} text="bad"/>
        </div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )

  }


  }
  

export default App