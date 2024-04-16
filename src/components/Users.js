import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Banner,
  TableRow,
  SearchBox,
  Container,
  TableHead,
  TableCell,
  MainContainer,
  InnerContainer,
  TableHeaderCell,
} from "./Style.style";

export const UsersTable = (props) => {
  const { users, ageDirection, nameDirection, sortByAge, sortByName } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell onClick={sortByName}>
            Name {nameDirection === "ascending" ? "↑" : "↓"}
          </TableHeaderCell>
          <TableHeaderCell onClick={sortByAge}>
            Age {ageDirection === "ascending" ? "↑" : "↓"}
          </TableHeaderCell>
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
        {users.length === 0 && (
          <TableRow>
            <TableCell colSpan={4}>No records</TableCell>
          </TableRow>
        )}
      </tbody>
    </Table>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isSearchData, setSearchData] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [ageDirection, setAgeDirection] = useState("ascending");
  const [nameDirection, setNameDirection] = useState("ascending");

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
    setSearchData(false);
    if (value) {
      setSearchData(true);
    }
    const filteredUsers = users.filter((item) => {
      const { name = "", age = "", occupation = "" } = item;
      const userAge = `${age}`;
      return (
        name?.toLowerCase().includes(value.toLowerCase()) ||
        userAge?.toLowerCase().includes(value.toLowerCase()) ||
        occupation?.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredUsers(filteredUsers);
  };

  const sortByName = () => {
    const direction =
      nameDirection === "ascending" ? "descending" : "ascending";
    setNameDirection(direction);
    const sortableUsers = [...filteredUsers];
    sortableUsers.sort((a, b) => {
      if (a["name"] < b["name"]) {
        return nameDirection === "ascending" ? -1 : 1;
      }
      if (a["name"] > b["name"]) {
        return nameDirection === "ascending" ? 1 : -1;
      }
      return 0;
    });
    // console.log("sortableUsers = ", sortableUsers);
    setFilteredUsers([...sortableUsers]);
  };

  const sortByAge = () => {
    const direction = ageDirection === "ascending" ? "descending" : "ascending";
    setAgeDirection(direction);
    const sortableUsers = [...filteredUsers];
    sortableUsers.sort((a, b) => {
      if (a["age"] < b["age"]) {
        return ageDirection === "ascending" ? -1 : 1;
      }
      if (a["age"] > b["age"]) {
        return ageDirection === "ascending" ? 1 : -1;
      }
      return 0;
    });
    // console.log("sortableUsers = ", sortableUsers);
    setFilteredUsers([...sortableUsers]);
  };

  return (
    <Container>
      <InnerContainer>
        <SearchBox>
          <div>
            <input type='text' onChange={filterResults} />
            <Button type='button'>Search</Button>
          </div>
          {isSearchData && <Banner>You are viewing filtered results!</Banner>}
        </SearchBox>
        <MainContainer>
          <UsersTable
            users={filteredUsers}
            sortByAge={sortByAge}
            sortByName={sortByName}
            ageDirection={ageDirection}
            nameDirection={nameDirection}
          />
        </MainContainer>
      </InnerContainer>
    </Container>
  );
};

export default Users;
