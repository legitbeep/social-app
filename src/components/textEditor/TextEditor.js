import React from 'react'
import MUIRichTextEditor from 'mui-rte'


const TextEditor = () => {
    return (
        <div style={{margin:"30px 0 40px 0",width:"100%" ,border:"1px solid black",borderRadius:"10px"}}>
            <MUIRichTextEditor 
            fullWidth
                label="Blog content...."
               
              inlineToolbar
            />
        </div>
    )
}

export default TextEditor
