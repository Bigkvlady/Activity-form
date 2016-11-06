import { observable } from 'mobx';


export class Store {

  //  Setting observable variables for keep tracking of changing the STATE
  //  and then for re-rendering
  @observable errorOfferSumMessage = '';
  @observable isSubmitEnable = true;
  @observable activityDataAdd = {
    name: 'Josh Michel Smith',
    phone_id: '1',
    photo_file_name: null,
    activity_id: '1',
    contract: null,
    offer: null
  };
}

var store = new Store;

export default store;
