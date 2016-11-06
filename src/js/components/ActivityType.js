import React from 'react';
import { observer } from 'mobx-react';
import ActivitySelect from './ActivitySelect';


@observer
export default class Preview extends React.Component {

  render() {

    return (
        <div className="flex-container">
            <div className="flex-item-main-left">
                <span className="text">Activity type:</span>
            </div>
            <div className="flex-item-main-right">

                <ActivitySelect />
            </div>
        </div>
    );
  }
}


