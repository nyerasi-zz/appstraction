import React from 'react';
import PropTypes from 'prop-types';

// FILE POND
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';

import firebase from '../../data/firebase';

// register file pond image preview
registerPlugin(FilePondPluginImagePreview);

export default class FileUploader extends React.Component{

    state = {
        file: null
    };
    pond = null;

    onUpdateFile = (fileItems) => {
        let fileItem = fileItems[0];
        let pond = this.pond;
        if (fileItem){
            let file = fileItem.file;
            let extension = file.name.substring(file.name.lastIndexOf("."));
            let newFileName = this.props.fileType + extension;
            let storeDownloadLink = this.props.storeDownloadLink;

            // Create file metadata including the content type
            let metadata = {
                contentType: file.type,
            };

            // Upload the file and metadata
            let uploadTask = firebase.storage()
                .ref(this.props.savePath + "/" + newFileName)
                .put(file, metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function(snapshot) {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    let  progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                }, function(error) {

                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;

                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                        default:
                            break;
                    }
                }, function() {
                    // Upload completed successfully, now we can get the download URL
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        pond.removeFiles();
                        storeDownloadLink(downloadURL, newFileName);
                    });
                });
        }
    };

    render(){
        return (
            <FilePond
                onupdatefiles={this.onUpdateFile}
                ref={ref => this.pond = ref}
            />
        )
    }
}

FileUploader.propTypes = {
    savePath: PropTypes.string,
    fileType: PropTypes.string,
    storeDownloadLink: PropTypes.func
};
