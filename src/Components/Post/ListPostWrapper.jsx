import React from "react";
import { useParams } from "react-router-dom";
import ListPost from "../ContainPost/ListPost";

const ListPostWrapper = () => {
  const { social } = useParams();
  return <ListPost socialMedia={social} />;
};

export default ListPostWrapper;
