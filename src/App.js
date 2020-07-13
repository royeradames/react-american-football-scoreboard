//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

export default function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //app variables
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const touchDown = 7
  const fieldGoal = 3
  const home = 'Lions'
  const away = 'Tigers'

  //bottomRow variables
  const [down, setDown] = useState(0)
  const [toGo, setToGo] = useState(0)
  const [ballOn, setBallOn] = useState(0)
  const [quarter, setQuarter] = useState(0)


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{home}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{away}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow down = {down} toGo = {toGo} ballOn = {ballOn} quarter = {quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {(e) => setHomeScore( homeScore + touchDown)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {(e) => setHomeScore( homeScore + fieldGoal)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {(e) => setAwayScore( awayScore + touchDown)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {(e) => setAwayScore( awayScore + fieldGoal)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

 
