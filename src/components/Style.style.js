import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #f9fafb;
`;

export const InnerContainer = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Inter;
  form {
    flex-grow: 1;
  }
`;

export const MainContainer = styled.div`
  height: 100%;
  margin-top: 32px;
  position: relative;

  .MuiTableRow-root,
  .MuiTableRow-head {
    th {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;

      .MuiSvgIcon-root,
      .MuiSvgIcon-fontSizeMedium {
        display: none;
      }
    }
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const NavBar = styled.div`
  display: flex;
  padding: 15px 0 16px;
  margin-top: 1px;
  background: #ffffff;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-around;
  width: 150px;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  bottom: auto;
  z-index: 2;
  box-sizing: border-box;
  box-shadow: 1px 0px 2px rgb(0 0 0 / 8%);
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  .menuItem {
    width: 110px;
    text-align: center;
    height: 36px;
    color: #6b7280;
    padding: 0px 8px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    line-height: 150%;
    font-family: Inter;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: auto 12px 8px;
    justify-content: flex-start;
  }

  .active {
    color: #000000;
    background: #ebf5ff;
    border-radius: 4px;
  }
`;

export const SearchBox = styled.div`
  display: flex;

  input {
    outline: none;
    padding: 6px;
    border: 1px solid #dbdbdb;
    border-radius: 4px 0px 0px 4px;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  background: none;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 12px;
  font-family: Inter;
  border-radius: 0px 8px 8px 0px;
  background: #1c64f2;

  ${(props) =>
    props.isLogin &&
    css`
      width: max-content;
      border-radius: 8px;
    `}
`;

export const TableContainer = styled.div`
  margin: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  .sorted {
    display: flex;
    justify-content: center;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #dddddd;
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  cursor: pointer;
  border: 1px solid #dddddd;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  top: 10%;
  right: 0;
  margin: 0px auto;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  z-index: 1000;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px;
`;

export const ToggleButton = styled.button`
  margin-bottom: 10px;
  width: max-content;
  cursor: pointer;
`;

export const CodeContainer = styled.pre`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #007bff;
  color: #333;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: start;
`;

export const Banner = styled.div`
  background: rgb(235, 245, 255);
  color: #0b57d0;
  padding: 12px;
  border-radius: 4px;
  margin: 0px 12px;
`;
