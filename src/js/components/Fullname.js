import React from 'react';
import { observer } from 'mobx-react';
import store from '../data/store';

@observer
export default class Fullname extends React.Component {

  //  Changing fullname in the database
  static handleFullNameChange(e) {
      store.activityDataAdd.name = e.target.value;
  }

  render() {

    return (
        <div className="flex-container">
            <div className="flex-item-main-left">
                <span className="text">Full name:</span>
            </div>
            <div className="flex-item-main-right">
                <input className="edit-input"
                       onChange={Fullname.handleFullNameChange.bind(this)}
                       defaultValue={store.activityDataAdd.name} />

            </div>
        </div>
    );
  }
}


