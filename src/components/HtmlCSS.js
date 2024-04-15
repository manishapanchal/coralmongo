import React, { useState, useEffect, useCallback } from "react";
import { UsersTable } from "./Users";
import axios from "axios";

import {
  Card,
  Container,
  ToggleButton,
  CardContainer,
  InnerContainer,
} from "./Style.style";

const HtmlCSS = () => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("table");

  const toggleView = () => {
    setView(view === "table" ? "card" : "table");
  };

  const getData = useCallback(async () => {
    try {
      const res = await axios.get("https://coralmango.com/api/react-test");
      if (res?.data) {
        setUsers(res?.data);
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

  return (
    <Container>
      <InnerContainer>
        <ToggleButton onClick={toggleView}>Toggle View</ToggleButton>
        {view === "table" ? (
          <UsersTable users={users} />
        ) : (
          <CardContainer>
            {users.map((person, index) => (
              <Card key={index}>
                <h2>{person.name}</h2>
                <p>Age: {person.age}</p>
                <p>Occupation: {person.occupation}</p>
              </Card>
            ))}
          </CardContainer>
        )}
      </InnerContainer>
    </Container>
  );
};

export default HtmlCSS;
