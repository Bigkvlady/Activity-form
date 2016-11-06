import React from 'react';
import { observer } from 'mobx-react';
import { observable} from 'mobx';
import store from '../data/store';

@observer
export default class Preview extends React.Component {

  @observable photoPreview;

  previewFile(e){
      let file = e.target.files[0];

        // Make new FileReader
      let reader = new FileReader();

        // Convert the file to base64 text
      reader.readAsDataURL(file);

      reader.onload = () => {
          this.photoPreview = <div className="photo-preview">
              <img src={reader.result} />
          </div>;
      };
      store.activityDataAdd.photo_file_name = file.name;
  }

  render() {

    return (
        <div className="flex-container">
            <div className="flex-item-main-left">
                <span className="text">Photo:</span>

            </div>
            <div className="flex-item-main-right">
                <div className="photo-file-button">
                    <input className="photo-file-input"
                           defaultValue=""
                           ref="inputFile"
                           onChange={ this.previewFile.bind(this) }
                           type="file" />
                </div>

                {this.photoPreview}
            </div>
        </div>
    );
  }
}


