import React from 'react';
import Select2 from 'react-select2';
import { observer } from 'mobx-react';
import store from '../data/store';


@observer
export default class PhoneSelect extends React.Component {

  //  Changing phone id in the database
  phoneSelectChange(e) {
    store.activityDataAdd.phone_id = e.target.value;
  }

  render() {

    return (
      <div className="phone-select">
        <Select2
          onChange={this.phoneSelectChange.bind(this)}
          data={[
            { text: '206 123 4567', id: 1 },
            { text: '253 789 5588', id: 2 },
            { text: '206 567 7788', id: 3 },
            { text: '253 234 2222', id: 4 },
          ]}
          options={{
            placeholder: 'search by phone number',
          }}
        />
      </div>
    );
  }
}


