import React, {useRef} from 'react';
import {inspect} from "util";
import styles from "../../styles/stylesAccountUser.module.css";

const AcceptedFileType = {
    Text: '.txt',
    Gif: '.gif',
    Jpeg: '.jpg',
    Png: '.png',
    Doc: '.doc',
    Pdf: '.pdf',
    AllImages: 'image/*',
    AllVideos: 'video/*',
    AllAudios: 'audio/*',
};
type CounterProps = {
    fileType: string;
}
const UploadTest = ({fileType}:CounterProps) => {
    const fileRef = useRef<HTMLInputElement>(null)
    // const acceptedFormats =
    //     typeof fileType === 'string'
    //         ? fileType
    //         : !Array.isArray(fileType) ? AcceptedFileType.Text : fileType?.join(',');

    const [selectedFiles, setSelectedFiles] = React.useState<File>();

    const handleFileSelect = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files){
            let file= event.target.files[0];
            setSelectedFiles(file);
        }

    };

    const onUpload = () => {
        console.log(selectedFiles);
    };

    const onClear = () => {
        setSelectedFiles(undefined);
    };


    return (
        <div className={styles.containerTest}>
            <input
                ref={fileRef}
                hidden
                type="file"
                accept='image/*,.png,.jpg,.web'
                onChange={handleFileSelect}
            />
            {!selectedFiles?.name && (
                <button
                    // variant="contained"
                    // component="label"
                    style={{ textTransform: 'none' }}
                    onClick={() => fileRef.current?.click()}
                >
                    Choose file to upload
                </button>
            )}
        </div>
    );
};

export default UploadTest;