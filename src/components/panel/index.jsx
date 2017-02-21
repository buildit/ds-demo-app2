import React from 'react';
import moment from 'moment';
import './style.less';

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="appPanel">
        <div className="mainContent">
          <label for="account">Account number</label>
          <input id="account"></input>
          <label for="sort">Sort code</label>
          <input id="sort"></input>
          <label for="amount">Amount</label>
          <input id="amount"></input>
          <button>Pay now</button>
        </div>
        <div className="sidebar">
          <button>My accounts</button>
        </div>
      </div>
    )
  }
}

export default Panel;
