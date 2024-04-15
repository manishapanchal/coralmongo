import React from "react";
import { Container, InnerContainer, CodeContainer } from "./Style.style";

const ES6Basics = () => {
  const code1 = `
    const a = [1, 3, 5, 2, 4];

    function getEvenIndexElements () {
     const newArr = [];
     for(let i=0;i<this?.length;i+= 2){
        newArr.push(this[i]);
     }
     return newArr;
    }

    Array.prototype.filterEvenIdx = getEvenIndexElements;
    const result1 =  a?.filterEvenIdx();
    console.log("result1 = ", result1);

  `;

  const code2 = `
  const a = [1, 3, 5, 2, 4];

  const result2 = a?.map(item => item * item);
  console.log("result2 = ", result2);
  `;

  const code3 = `
  const a = [1, 3, 5, 2, 4];

  function getSquareOfEvenIndices () {
    const newArr = [];
    for(let i=0;i<this?.length;i+= 2){
        newArr.push(this[i] * this[i] );
    }
    return newArr;
  }
  
  Array.prototype.filterEvenSquare = getSquareOfEvenIndices;
  const result3 = a?.filterEvenSquare();
  console.log("result3 = ", result3);
  `;

  return (
    <Container>
      <InnerContainer>
        <CodeContainer>{code1}</CodeContainer>
        <CodeContainer>{code2}</CodeContainer>
        <CodeContainer>{code3}</CodeContainer>
      </InnerContainer>
    </Container>
  );
};

export default ES6Basics;
