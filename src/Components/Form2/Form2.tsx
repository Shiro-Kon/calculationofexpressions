import React, { useState } from "react";

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
  {
    name: "Formula 3",
    calculate: () => {
      return Math.random() * 300;
    },
  },
];

interface ResultDisplayProps {
  result: number | null;
  onClose: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onClose }) => (
  <div className="result-window">
    <div className="result-container">
      <h3>Результат:</h3>
      <p>{result}</p>
      <button className="close-btn" onClick={onClose}>Закрити</button>
    </div>
  </div>
);

const Form2 = () => {
  const [result, setResult] = useState<number | null>(null);
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleFormulaChange = (selectedName: string) => {
    const formula = formulas.find((f) => f.name === selectedName) || null;
    setSelectedFormula(formula);
    if (!showResult) {
      setResult(null);
    }
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

  const handleShowResultChange = () => {
    setShowResult(!showResult);
  };

  const closeResultWindow = () => {
    setShowResult(false);
  };

  return (
    <div className="box">
      <div className="title">
        <h3 id="ind">Індивідульне завдання</h3>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={showResult} onChange={handleShowResultChange} />
          Show result
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            className="rad-btn"
            name="formula"
            value="Formula 1"
            checked={selectedFormula?.name === "Formula 1"}
            onChange={() => handleFormulaChange("Formula 1")}
          />
          Formula 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            className="rad-btn"
            name="formula"
            value="Formula 2"
            checked={selectedFormula?.name === "Formula 2"}
            onChange={() => handleFormulaChange("Formula 2")}
          />
          Formula 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            className="rad-btn"
            name="formula"
            value="Formula 3"
            checked={selectedFormula?.name === "Formula 3"}
            onChange={() => handleFormulaChange("Formula 3")}
          />
          Formula 3
        </label>
      </div>
      {selectedFormula && (
        <div className="center">
          <div className="title">Вибрана формула: {selectedFormula.name}</div>
          <button className="button" onClick={performCalc}>
            Виконайте розрахунок
          </button>
          <button className="button" onClick={clearResult}>
            Очистити результат
          </button>
          {showResult && result !== null && (
            <ResultDisplay result={result} onClose={closeResultWindow} />
          )}
        </div>
      )}
    </div>
  );
};

export default Form2;
