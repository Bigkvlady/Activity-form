import React from 'react';
import Select2 from 'react-select2';
import store from '../data/store';
import { observer } from 'mobx-react';


@observer
export default class ActivitySelect extends React.Component {

  constructor() {
    super();
    this.activityOfferFormSum = '';
    this.activityOfferFormButton = '';
    this.activityContractForm = '';
  }

  //  Getting file id
  uploadOfferFile(e) {
    e.preventDefault();
    store.activityDataAdd.offer.file_id = Date.now();
  }

  //  Validating entered value and changing it in database
  handleSumChange(e) {

    //  Changing ',' to '.' to have valid number
    if (e.target.value.indexOf(',') !== -1) {
      e.target.value = replaceChar(e.target.value, e.target.value.indexOf (','), '.');
    }

    //  Checking is value is a Number
    if (isNumeric(e.target.value)) {
      store.activityDataAdd.offer.sum = e.target.value;
        store.errorOfferSumMessage = '';
        store.isSubmitEnable = true;
    } else {
      store.errorOfferSumMessage = <span className="error-message">Entered value is not a number!!!</span>;
      store.isSubmitEnable = false;
    }

    /**
     *  Checking is it a number
     *  @return boolean
     **/
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
    *   Replacing char in the string
    *   @param {string} str The string to change in
    *   @param {number} num Is a position of char needs to be changed
    *   @param {string} char Is a char replaced for
    *   @return {string} replaced string
    **/
    function replaceChar (str, num, char) {
      return str.slice(0, num) + char + str.slice(num + 1);
    }
  }

  validateSumValue(e) {

    //  Checking if there is a '.' is the entered value
    if (e.target.value.indexOf('.') == -1) {
      store.errorOfferSumMessage = <span className="error-message">Has to be at least 2 numbers after the "."</span>;
      store.isSubmitEnable = false;
    } else {
      store.errorOfferSumMessage = '';

      //  Checking if there is minimum 2 numbers after the '.' is the entered value
      if (e.target.value.split (".")[1].length < 2) {
        store.errorOfferSumMessage = <span className="error-message">Less then 2 numbers after the "."</span>;
        store.isSubmitEnable = false;
      } else {
        store.errorOfferSumMessage = '';
        store.activityDataAdd.offer.sum = e.target.value;
        store.isSubmitEnable = true;
      }
    }
  }

  handleContractNumberChange(e) {
    store.activityDataAdd.contract.number = e.target.value;
  }

  handleContractDateChange(e) {
    let tempDate = e.target.value.split('.');
    store.activityDataAdd.contract.date = tempDate[2] + '-' + tempDate[1] + '-' + tempDate[0];
  }
  activitySelectChange(e) {

    if (e.target.value == 3) {
      store.activityDataAdd.offer = {
        sum: 50.44,
        file_id: null
      };
      this.activityOfferFormSum =
        <span>Sum:{' '}
          <input className="edit-input"
                 onChange={this.handleSumChange.bind(this)}
                 onBlur={this.validateSumValue.bind(this)}
                 defaultValue={store.activityDataAdd.offer.sum} />
        </span>;
      this.activityOfferFormButton = <button className="upload-offer-file"
                                             onClick={this.uploadOfferFile.bind(this)}
                                     >Upload file</button>;

    } else store.activityDataAdd.offer = null;

    if (e.target.value == 4) {
      store.activityDataAdd.contract = {
        number: '4214',
        date: '2016-11-04'
      };
      let tempDate = store.activityDataAdd.contract.date.split('-');
      let userShownDate = tempDate[2] + '.' + tempDate[1] + '.' + tempDate[0];

      this.activityContractForm =
        <div>
          <span>Contract #{' '}
            <input className="edit-input"
                   onChange={this.handleContractNumberChange.bind(this)}
                   defaultValue={store.activityDataAdd.contract.number} />
          </span>
          <span>Contract sign date:{' '}
            <input className="edit-input"
                   onChange={this.handleContractDateChange.bind(this)}
                   defaultValue={userShownDate} />
          </span>
        </div>;

    } else store.activityDataAdd.contract = null;

    store.activityDataAdd.activity_id = e.target.value;
  }

  render() {

    return (
      <div className="phone-select">
        <div>
        <Select2
          ref="activityTypeSelector"
          onChange={this.activitySelectChange.bind(this)}
          data={[
            { text: 'Phone call', id: 1 },
            { text: 'Meeting', id: 2 },
            { text: 'Commercial offer', id: 3 },
            { text: 'Contract', id: 4 },
          ]}
          options={{
            placeholder: 'search by phone number',
          }}
        />
        </div>
        <div className="activity-form">
          {store.activityDataAdd.activity_id == 3 ? this.activityOfferFormSum : null}
          {store.errorOfferSumMessage ? store.errorOfferSumMessage : null}
          {store.activityDataAdd.activity_id == 3 ? this.activityOfferFormButton : null}
          {store.activityDataAdd.activity_id == 4 ? this.activityContractForm : null}
        </div>
      </div>
    );
  }
}


