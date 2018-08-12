import React, { Component } from 'react';

export class FetchExampleData extends Component {
  displayName = FetchExampleData.name

  constructor(props) {
    super(props);
    this.state = { upcomingWeek: [], loading: true };

    fetch('api/Example/UpcomingWeek')
      .then(response => response.json())
      .then(data => {
        this.setState({ upcomingWeek: data, loading: false });
      });
  }

  static renderUpcomingWeekTable(upcomingWeek) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Day of Week</th>
          </tr>
        </thead>
        <tbody>
          {upcomingWeek.map(item =>
            <tr key={item.date}>
              <td>{item.date}</td>
              <td>{item.dayOfWeek}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchExampleData.renderUpcomingWeekTable(this.state.upcomingWeek);

    return (
      <div>
        <h2>Upcoming Week</h2>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
