import React, { Component } from 'react';
import { Container } from './App.styled';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';


export class App extends Component {
  state = {
    good: 0, 
    neutral: 0,
    bad: 0,
  }
};

onLeaveFeedback = state => {
  this.setState(prevState => ({[state]: prevState[state] +1}));
};







export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
