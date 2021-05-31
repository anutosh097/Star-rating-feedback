import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Star = ({ selected }) => <FaStar color={selected ? "red" : "grey"} />;

export default Star;
