import React from 'react';

type MyProps = {
    map: Record<string,string>
}

export default function DictionaryCard( Props: MyProps ) : JSX.Element {

    return <div className='card'>
        <div className='card-body d-flex flex-wrap' style={{fontSize: '1.4em'}}>
            {Object.keys(Props.map).map( character => {
                return <div key={character} className='mb-2 mx-1 d-flex' style={{textAlign:'left', width: '55px'}}>
                    <div style={{width: '24px'}}>{character}  </div>
                    <span className={'pt-1 fas fa-'+Props.map[character]} style={{flexGrow: 1}} />
                    </div>
            })}
        </div>
    </div>;
}