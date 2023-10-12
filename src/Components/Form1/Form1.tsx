import { useState } from 'react';
import './Form1.scss'

type Props = {};

const Form1 = (props: Props) => {
  const [result, setResult] = useState<number | string>('');

  const clacX = () => {
    const sqrt6 = Math.sqrt(6); 
    const sqrt13 = Math.sqrt(13);
    const sqrt22 = Math.sqrt(22);
    const x = (sqrt6 + 6)/2 + (sqrt13 + 13)/2 + (sqrt22 + 22)/2; 
    setResult(x);
  }

  const clearResult = () => {
    setResult('');
  }


  return (
    <div className="box">
      <thead>
        <tr>
          <th id='X'>Розрахування значення Х</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>X =</th>
          <tr>
            <th className="th-up">√6+6</th>
          </tr>
          <tr>
            <th>2</th>
          </tr>
          <th>+</th>
          <tr>
            <th className="th-up">√13+13</th>
          </tr>
          <tr>
            <th>2</th>
          </tr>
          <th>+</th>
          <tr>
            <th className="th-up">√22+22</th>
          </tr>
          <tr>
            <th>2</th>
          </tr>
        </tr>

        <td></td>
      </tbody>
      <button className="button" onClick={clacX}>Обчислити</button>
      <button className="button" onClick={clearResult}>Очистити</button>

      <input className="result" type="text" name="result" id="1" placeholder="Результат" value={result} readOnly />
    </div>
  );
};

export default Form1;