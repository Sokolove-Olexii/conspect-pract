import styled from "styled-components";
import { Event } from "./Event";

const Back = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 10px;
  background-color: #e4e4e4;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const PageBoard = ({ events }) => {
  return (
    <Back>
      {events.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </Back>
  );
};
