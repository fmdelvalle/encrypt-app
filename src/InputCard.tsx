import React from 'react';

type MyProps = {
    text: string,
    setText: (v: string)=>void
}

export default function InputCard( Props: MyProps ) : JSX.Element {
    return <textarea className='form-control' rows={6} value={Props.text} onChange={(e:any) => Props.setText(e.target.value.toLocaleUpperCase())} />;
}