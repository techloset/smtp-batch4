import React from 'react'
import Button from './components/button/Button'
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import { cardData } from './constant/CardData'

const pi = 3.44

export default function App(props) {
  console.log(cardData);
  return (
    <div>
      <Header piValue={pi} flag={false}/>
      <Button customStyle={{ backgroundColor: 'red' }} />
      <p>App code</p>
      <Button abc="Play" customStyle={{ backgroundColor: 'blue' }} />

      {/* <Card data = {cardData[0]} />

      <Card  data = {cardData[1]} />

      <Card data = {cardData[2]}/>

      <Card  data = {cardData[3]}/>

      <Card  data = {cardData[4]}/> */}

     <Cards cardsArray={cardData}/>

    </div>
  )
}