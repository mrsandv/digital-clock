import { useState } from "react";
import Number from "./components/Number";
import styled from "styled-components";

const ClockBorder = styled.div`
  border: 15px solid #000;
  width: 1400px;
`;

const ClockBox = styled.div`
  background-color: #000;
  display: flex;
  width: 1400px;
  justify-content: space-between;
`;

// [top, rigth, left, middle, rightB, leftB,bottom]
const transformDigit = (digit) => {
  console.log(digit);
  switch (digit) {
    case "0":
      return [1, 1, 1, 0, 1, 1, 1];
    case "1":
      return [0, 1, 0, 0, 1, 0, 0];
    case "2":
      return [1, 1, 0, 1, 0, 1, 1];
    case "3":
      return [1, 1, 0, 1, 1, 0, 1];
    case "4":
      return [0, 1, 1, 1, 1, 0, 0];
    case "5":
      return [1, 0, 1, 1, 1, 0, 1];
    case "6":
      return [1, 0, 1, 1, 1, 1, 1];
    case "7":
      return [1, 1, 0, 0, 1, 0, 0];
    case "8":
      return [1, 1, 1, 1, 1, 1, 1];
    case "9":
      return [1, 1, 1, 1, 1, 0, 1];
    default:
      return [0, 0, 0, 0, 0, 0, 0];
  }
};

function App() {
  const [time, setTime] = useState([0, 0, 0, 0, 0, 0, 0]);
  setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const result = `${hours}${minutes}${seconds}`;
    setTime(result);
  }, 1000);
  return (
    <ClockBorder>
      <ClockBox>
        <Number digit={transformDigit(time[0])} />
        <Number digit={transformDigit(time[1])} />
        <Number digit={transformDigit(time[2])} />
        <Number digit={transformDigit(time[3])} />
        <Number digit={transformDigit(time[4])} />
        <Number digit={transformDigit(time[5])} />
      </ClockBox>
    </ClockBorder>
  );
}

export default App;
