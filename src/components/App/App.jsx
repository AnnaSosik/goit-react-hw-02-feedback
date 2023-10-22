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

countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad; 
};

countPositiveFeedbackPercentage = () => {
  const { good} = this.state;
  const total = this.countTotalFeedback();
  return Math.round((good/total) * 100) || 0;
};




