import React from 'react';
import '../../../node_modules/react-select2/css/select2.css';
import { observer } from 'mobx-react';

import Preview from './Preview';
import Fullname from './Fullname';
import ActivityType from './ActivityType';
import PhoneNumber from './PhoneNumber';
import Photo from './Photo';
import Submit from './Submit';


@observer
export default class Layout extends React.Component {

  render() {

    return (
      <div>
        <div className="main-container">
          <form>

            <Fullname />

            <PhoneNumber />

            <Photo />

            <ActivityType />

            <Submit />

          </form>
        </div>

      <Preview />

      </div>
    );
  }
}


