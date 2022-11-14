import { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'

// eslint-disable-next-line

function App() {
  const [openPicker, authResponse] = useDrivePicker();  
  //const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: "551927574877-2l5feumkvj0t2mcjga09larstgkbr3tj.apps.googleusercontent.com",
      developerKey: "AIzaSyAwblHi1F0v-ArQPlQxkkPjQbIOLNCnZK0",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        else if (data.action === 'picked') {
          const access_token = 'ya29.a0AeTM1icPjA1Rz_vZgUtAQ7_QQxCfRd_c7HOjHg_U5BvUkusjm4oeXGUii8V8h8IIeRu533zw6x_sJpaSdRhrx5ZlCVEuIAgSQJTJBE13HKBuNKLpM5KbtBBlGV2fuL-WDzf8ZvK5qUAVI-HI_6mV_osVf6rTaCgYKAUwSARASFQHWtWOmZOXJYGSPvxbu-sgka0yzCQ0163'
          var xhr = new XMLHttpRequest();
          let file = data.docs[0];
          console.log(file['id'])
          let fileId = file['id']

          //直接ダウンロード
          /*xhr.open('GET', `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&source=downloadUrl`)
          xhr.setRequestHeader("Authorization", "Bearer " + access_token);
          console.log(fileId)*/

          //ファイルのタブを開く
          window.open(file['url'])
          
        }
        console.log(data)
      },
    })
  }
  
  



  
  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Google Drive Picker起動</button>
    </div>
  );
}

export default App;
