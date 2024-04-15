import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  Button,
  SearchBox,
  Container,
  TableHead,
  TableRow,
  Table,
  TableCell,
  InnerContainer,
  TableHeaderCell,
  MainContainer,
} from "./Style.style";

export const UsersTable = ({ users }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Occupation</TableHeaderCell>
        </TableRow>
      </TableHead>
      <tbody>
        {users?.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{item?.name}</TableCell>
            <TableCell>{item?.age}</TableCell>
            <TableCell>{item?.occupation}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const getData = useCallback(async () => {
    try {
      const res = await axios.get("https://coralmango.com/api/react-test");
      if (res?.data) {
        setUsers(res?.data);
        setFilteredUsers(res?.data);
      }
    } catch (e) {
      console.log("error = ", e);
      alert(e);
    }
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterResults = (e) => {
    const value = e?.target?.value;
    const filteredUsers = users.filter((item) => {
      const { name = "", age = "", occupation = "" } = item;
      const userAge = `${age}`;
      return (
        name?.toLowerCase().includes(value.toLowerCase()) ||
        userAge?.toLowerCase().includes(value.toLowerCase()) ||
        occupation?.toLowerCase().includes(value.toLowerCase())
      );
    });
    if (filteredUsers?.length > 0) {
      setFilteredUsers(filteredUsers);
    }
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = () => {
    const sortableUsers = [...filteredUsers];
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  };

  return (
    <Container>
      <InnerContainer>
        <SearchBox>
          <input type='text' onChange={filterResults} />
          <Button>Search</Button>
        </SearchBox>
        <MainContainer>
          <UsersTable users={filteredUsers} />
        </MainContainer>
      </InnerContainer>
    </Container>
  );
};

export default Users;
