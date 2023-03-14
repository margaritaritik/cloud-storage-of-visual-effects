import React from 'react';
import {Box} from '@mui/material';
import {Controlled as ControlledEditor} from 'react-codemirror2';

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/lib/codemirror.css'

// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';


const Editor = () => {
    return (
        <Box>
            <Box>
                <Box>
                    <Box component="span">
                        /
                    </Box>
                </Box>
                HTML
                <ControlledEditor>

                </ControlledEditor>
            </Box>
        </Box>
    );
};

export default Editor;