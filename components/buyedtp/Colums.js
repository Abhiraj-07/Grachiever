const {  Col, Row ,Statistic } = antd;


import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import TaskList from "./TaskList";

const Column = ({ name, prgoress, rating }) => (

    <Statistic title={name} value={112893} loading />



);

Column.propTypes = {
  name: PropTypes.string,
  prgoress: PropTypes.number,
  rating: PropTypes.number,
};

export default Column;
