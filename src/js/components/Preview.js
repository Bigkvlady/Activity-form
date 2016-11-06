import React from 'react';
import { observer } from 'mobx-react';
import store from '../data/store';

@observer
export default class Preview extends React.Component {

  render() {

    return (
      <div className="main-container">
        <div className="json-preview">
          <h3>JSON preview</h3>
          <pre>{ JSON.stringify(store.activityDataAdd, null, 4) }</pre>
        </div>
      </div>
    );
  }
}


