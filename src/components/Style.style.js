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
  border: 1px solid #dddddd;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const requestSort = (key) => {
//   let direction = "ascending";
//   if (sortConfig.key === key && sortConfig.direction === "ascending") {
//     direction = "descending";
//   }
//   setSortConfig({ key, direction });
// };

// const sortUsers = () => {
//   const sortableData = [...filterdUsers];
//   if (sortConfig !== null) {
//     sortableData.sort((a, b) => {
//       if (a[sortConfig.key] < b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? -1 : 1;
//       }
//       if (a[sortConfig.key] > b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? 1 : -1;
//       }
//       return 0;
//     });
//   }
//   return sortableData;
// };