import { useState } from "react";

type Formula = {
  name: string;
  calculate: () => number;
};

const formulas: Formula[] = [
  {
    name: "Formula 1",
    calculate: () => {
      return Math.random() * 100;
    },
  },
  {
    name: "Formula 2",
    calculate: () => {
      return Math.random() * 200;
    },
  },
];

const Form2 = () => {
  const [result, setResult] = useState<number | null>(null);
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);

  const randomFomula = () => {
    const randomIndex = Math.floor(Math.random() * formulas.length);
    const formula = formulas[randomIndex];
    setSelectedFormula(formula);
  };

  const performCalc = () => {
    if (selectedFormula) {
      const calcResult = selectedFormula.calculate();
      setResult(calcResult);

      if (calcResult > 100) {
        console.log("Високий результат - налаштуйте елементи керування");
      } else {
        console.log("Низький результат - налаштуйте елементи керування");
      }
    }
  };

  const clearResult = () => {
    setResult(null);
    setSelectedFormula(null);
  };

  return (
    <div className="box">
      <div className="title">
        <h3 id="ind">Індивідульне завдання</h3>
      </div>
      <button className="button" onClick={randomFomula}>
        Виберіть випадкову формулу
      </button>
      {selectedFormula  && (
        <div className="center">
          <div className="title">Вибрана формула: {selectedFormula.name}</div>
          <button className="button" onClick={performCalc}>
            Виконайте розрахунок
          </button>
          <button className="button" onClick={clearResult}>
            Очистити результат
          </button>
          {result !== null && (
            <div>
              <h3>Результат:</h3>
              <p>{result}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Form2;
