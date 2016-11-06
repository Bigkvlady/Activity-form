import React from 'react';
import { observer } from 'mobx-react';
import PhoneSelect from './PhoneSelect';


@observer
export default class PhoneNumber extends React.Component {

  render() {

    return (
        <div className="flex-container">
            <div className="flex-item-main-left">
                <span className="text">Phone number:</span>
            </div>
            <div className="flex-item-main-right">
                <PhoneSelect />
            </div>
        </div>
    );
  }
}


