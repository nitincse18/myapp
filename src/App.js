import React from 'react';
import logo from './logo.svg';
import './App.css';
import S3 from 'react-aws-s3';

function App() {
  onAttacFilehChange = e => {
    let file = e.target.files[0];
    const config = {
      bucketName: 'mycomdb',
      dirName: 'chat-media', /* optional */
      region: 'us-east-1',
      accessKeyId: 'AKIAJIANMZEHO7RNQOLQ',
      secretAccessKey: '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'
    }

    const ReactS3Client = new S3(config);
    /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

    /* This is optional */
    const newFileName = 'test-file';

    ReactS3Client
      .uploadFile(file, newFileName)
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }
  return (
    <div className="App">
    <input 
    id="uploadFile"
    onChange={e => this.onAttacFilehChange(e)}
    onKeyDown={this._handleKeyDown}
    type="text" 
    value={this.state.msg}
    style={{width:"100%", float:"left", padding:"15px 10px", boxSizing:"border-box", borderRadius:"25px", border:"1px solid grey", marginBottom:"-20px", outline:"none"}}
    placeholder={this.props.chatMassengerStore.selectedUserOrGroupDetails.typeText !== undefined ? this.props.chatMassengerStore.selectedUserOrGroupDetails.typeText : "Type a message"}
/> 
    </div>
  );
}

export default App;
