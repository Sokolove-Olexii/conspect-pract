import styled from "styled-components";
import { EventIcon } from "./EventIcon";
import PropTypes from "prop-types";
import { BsCalendar2Week } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Card = styled.div`
  background: #ffe3c2;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #d4a66a;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
  font-size: 14px;
`;

export const Event = ({ name, time, location, speaker }) => {
  return (
    <Card>
      <Title>{name}</Title>
      <Row>
        <BsFillPersonFill />
        {speaker}
      </Row>
      <Row>
        <BsGeoAltFill />
        {location}
      </Row>
      <Row>
        <BsCalendar2Week />
        {time.start}
      </Row>
      <Row>{}</Row>
    </Card>
  );
};
