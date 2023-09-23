// TrainSchedule.js
import React, { Component } from 'react';
import axios from 'axios';

class TrainSchedule extends Component {
  constructor() {
    super();
    this.state = {
      trainSchedule: [],
    };
  }

  componentDidMount() {
    axios.get('http://20.244.56.144/train/register')
      .then((response) => {
        this.setState({ trainSchedule: response.data });
      })
      .catch((error) => {
        console.error('Error fetching train schedule:', error);
      });
  }

  render() {
    const { trainSchedule } = this.state;

    return (
      <div>
        <h1>Train Schedule</h1>
        <table>
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            {trainSchedule.map((train) => (
              <tr key={train.id}>
                <td>{train.name}</td>
                <td>{train.departureTime}</td>
                <td>{train.number}</td>
                <td>{train.arrivalTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TrainSchedule;
