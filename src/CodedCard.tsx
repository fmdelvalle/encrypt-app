import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DictionaryCard from './DictionaryCard.tsx';
import SecretCard from './SecretCard.tsx';
import './theme-basic.css';

type MyProps = {
    text: string
}

const icons = ['smile text-darkorange', 'phone text-blue',
    'anchor text-darkblue', 'book text-mediumvioletred',
    'baby-carriage text-deeppink','award text-deeppink',
    'bath text-navy','bowling-ball text-teal',
    'car-side text-pomegranate', 'burn text-danger', 
    'bug text-olive', 'chess-knight text-darkgray', 
    'cloud text-lightskyblue', 'coffee text-chocolate', 
    'crown text-gold', 'crow text-graywoodsmoke', 
    'dice-six text-firebrick', 'cut text-darkolivegreen', 
    'frog text-darkolivegreen', 'heart text-red', 
    'ice-cream text-mediumpurple', 'key text-darkgoldenrod', 
    'meteor text-danger', 'plane text-mediumblue',
    'poo text-darkgoldenrod', 'robot text-lightslategray', 
    'skull text-midnightblue', 'socks text-purple', 
    'snowplow text-limegreen-700', 'umbrella text-peru', 
    'basketball-ball text-orange', 'bullhorn text-saddlebrown',
    'wind text-royalblue', 'user-secret text-palevioletred', 
    'sun text-darkorange', 'bus text-palevioletred',
    'campground text-yellowgreen-600', 'camera-retro text-steelblue',
    'cat text-sienna', 'dove text-rosybrown' ];

export default function CodedCard( Props: MyProps ) : JSX.Element {
    const [shuffle] = useState<number>(Math.floor(Math.random()*100));
    const {t}=useTranslation();
    if( Props.text.length === 0 ) {
        return <div className='alert alert-warning'>{t('Please enter some text')}</div>
    }
    // Ok, divide text into characters
    let characters = [...Props.text];
    // Get unique
    let uniquechars = [...new Set(characters)].sort();
    // Assign icons
    let map = {};
    uniquechars
        .filter( char => [' ',',','.',':',';','/','\\','[',']','(',')'].includes(char) === false )
        .forEach((char,i) => {
            map[char] = icons[ (i + shuffle ) % icons.length];
        });
    
    return <div className='row'>
        <div className='col-4'>
            <DictionaryCard map={map} />
        </div>
        <div className='col-8'>
            <SecretCard map={map} characters={characters} />
        </div>
    </div>;
}