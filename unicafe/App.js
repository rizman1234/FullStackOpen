import { useState } from 'react'

const Display = ({counter, something}) => <table>{something} {counter}</table> 

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  let average = ((props.good * 1) + (props.bad * -1) + (props.neutral * 0)) / ((props.good) + props.bad + props.neutral)
  let positive = (props.good) / (props.good + props.bad + props.neutral)
  let waiting = props.good + props.bad + props.neutral;
  if (waiting) {
  return (
    <table>
    <tr>
    <Display something = {'good\n'} counter = {props.good}/>
    <Display something = {'neutral\n'}counter={props.neutral}/>
    <Display something = {'bad'} counter={props.bad}/>
    <Display something = {'all'} counter={props.good + props.neutral + props.bad}/>
    <Display something = {'average'}  counter = {average}/>
    <Display something = {'positive'} counter = {positive} />
    </tr>
    </table>
  )
  }
  return  (
  <div>No feedback given</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
   
    <div>
       <h1>give feedback</h1>
      <Button
          onClick={increaseGood}
          text = 'good'
          />

      <Button
          onClick={increaseNeutral}
          text = 'neutral'
          />

      <Button
          onClick={increaseBad}
          text = 'bad'
          />

      <h1>statistics</h1>


      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
      {/* <Display something = {'good'} counter={good}/>
      <Display something = {'neutral'}counter={neutral}/>
      <Display something = {'bad'} counter={bad}/>
      <Display something = {'all'} counter={good + neutral + bad}/>
      <Display something = {'average'}  counter = {((good * 1) + (neutral * 0) + (bad * -1))/ ( good + neutral + bad)}/>
      <Display something = {'positive'} counter = {good / (good + bad + neutral)} /> */}
    </div>
  )
}

export default App