import './App.css';
import InputCard from './InputCard.tsx';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CodedCard from './CodedCard.tsx';

function App() {
  const {t} = useTranslation();
  const [text,setText] = useState<string>('');

  return (
    <div className="App">
      <div className='container'>
      <h1 className='print-hidden mt-3'>{t('Create your secret message')}</h1>
      <br/>
      <div className='mb-3 print-hidden'>
        <InputCard text={text} setText={setText} />
      </div>
      {text.length > 0 && (
      <div className='mb-3 print-hidden'>
        <div className='alert alert-info mb-3'>{t('Use CTRL-P to print this code')}</div>
      </div>
      )}
      <CodedCard text={text} />
      </div>
    </div>
  );
}

export default App;
