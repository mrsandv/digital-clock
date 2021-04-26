import styled from "styled-components";

const Top = styled.div`
  height: 200px;
  width: 200px;
  border-left: 10px solid ${(props) => (!props.left ? "#000" : "#fff")};
  border-right: 10px solid ${(props) => (!props.right ? "#000" : "#fff")};
  border-top: 10px solid ${(props) => (!props.top ? "#000" : "#fff")};
  border-bottom: 10px solid ${(props) => (!props.middle ? "#000" : "#fff")};
`;

const Bottom = styled.div`
  height: 200px;
  width: 200px;
  border-top: none;
  border-left: 10px solid ${(props) => (!props.leftB ? "#000" : "#fff")};
  border-bottom: 10px solid ${(props) => (!props.bottom ? "#000" : "#fff")};
  border-right: 10px solid ${(props) => (!props.rightB ? "#000" : "#fff")};
`;

const Number = ({ digit }) => {
  console.log(digit);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Top top={digit[0]} right={digit[1]} left={digit[2]} middle={digit[3]} />
      <Bottom leftB={digit[5]} rightB={digit[4]} bottom={digit[6]} />
    </div>
  );
};

export default Number;
