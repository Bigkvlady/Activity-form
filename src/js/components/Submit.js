import React from 'react';
import { observer } from 'mobx-react';
import store from '../data/store';

@observer
export default class Preview extends React.Component {

  //  Submitting the form and displaying the final result in JSON format
  //  In our case, displaying to the console
  static submit(e) {
    e.preventDefault();
    console.log( JSON.stringify(store.activityDataAdd, null, 4) );
  }

  render() {

    return (
      <div className="flex-container-center submit">
        <button onClick={Preview.submit} disabled={!store.isSubmitEnable}>Submit</button>
      </div>
    );
  }
}


