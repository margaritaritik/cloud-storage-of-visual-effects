import React from 'react';
import CodeBar from '../CodeEditor/CodeBar/CodeBar'

const CodeDisplay = ({rep}) => {
    return (
        <>
            <CodeBar rep={rep} redactor={false}></CodeBar>
        </>
    );
};

export default CodeDisplay;