import React from 'react';

type MyProps = {
    text: string,
    setText: (v: string)=>void
}

export default function InputCard( Props: MyProps ) : JSX.Element {
    return <textarea className='form-control' rows={6} 
        style={{fontSize: '1.2em'}}
        value={Props.text} onChange={(e:any) => Props.setText(e.target.value.toLocaleUpperCase())} />;
}