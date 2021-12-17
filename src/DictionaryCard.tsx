import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type MyProps = {
    map: Record<string,string>
}

export default function DictionaryCard( Props: MyProps ) : JSX.Element {

    return <div className='card'>
        <div className='card-body row' style={{fontSize: '1.4em'}}>
            {Object.keys(Props.map).map( character => {
                return <div key={character} className='col-4 mb-2 d-flex' style={{textAlign:'left'}}>
                    <div style={{width: '30px'}}>{character}  </div>
                    <span className={'pt-1 fas fa-'+Props.map[character]} />
                    </div>
            })}
        </div>
    </div>;
}