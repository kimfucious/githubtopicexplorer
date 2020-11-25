/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { addCommas } from "../helpers";
import { Spinner } from "./Spinner";

export const GithubTopicListItem = ({ handleGetTopics, item, isSpinning }) => {
  return (
    <a
      className="d-flex align-items-center justify-content-between list-group-item list-group-item-action w-100"
      onClick={() => {
        handleGetTopics(item.node.name, item.node.owner.login);
      }}
      style={{ cursor: "pointer" }}
    >
      <div>
        <div className="d-flex align-items-center">
          {item.node.name}
          {isSpinning === item.node.name ? (
            <div className="ml-2">
              <Spinner color={"black"} size={18} type="moon" />
            </div>
          ) : null}
        </div>
      </div>
      <div>⭐ {addCommas(item.node.stargazers.totalCount)}</div>
    </a>
  );
};
