import React from 'react';
import './theme-basic.css';

type MyProps = {
    characters: string[],
    map: Record<string,string>
}


export default function SecretCard( Props: MyProps ) : JSX.Element {
    return <div className='card'>
        <div className='card-body' style={{minHeight: '300px', fontSize: '1.2em'}}>
            <div className='d-flex flex-wrap'>
                {Props.characters.map( (char,i) => {
                    return <div key={i} className='mb-3 px-2'>
                        {Props.map[char] ? 
                            <span className={`fas fa-${Props.map[char]}`} />
                            : <span>&nbsp;</span>
                        }
                        <div>
                            <b style={{fontSize: '1.5em'}}>{Props.map[char] ? '_' : char}</b>
                        </div>
                        </div>;
                })}
            </div>

        </div>
    </div>;
}