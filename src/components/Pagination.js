import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getNextGithubTopics,
  getPreviousGithubTopics
} from "../actions/githubActions";
import { Spinner } from "./Spinner";

export const Pagination = ({ github: { initialFirstCursor, pageInfo } }) => {
  const dispatch = useDispatch();

  const [isNextSpinning, setIsNextSpinning] = useState(false);
  const [isPreviousSpinning, setIsPreviousSpinning] = useState(false);

  const handleNextClick = async () => {
    try {
      setIsNextSpinning(true);
      await dispatch(getNextGithubTopics(pageInfo.endCursor));
      setIsNextSpinning(false);
    } catch (error) {
      setIsNextSpinning(false);
    }
  };

  const handlePreviousClick = async () => {
    try {
      setIsPreviousSpinning(true);
      await dispatch(getPreviousGithubTopics(pageInfo.startCursor));
      setIsPreviousSpinning(false);
    } catch (error) {
      setIsPreviousSpinning(false);
    }
  };

  return (
    <div className="d-flex mt-3">
      <button
        className="d-flex align-items-center justify-content-center btn btn-outline-primary mr-2"
        disabled={initialFirstCursor === pageInfo.startCursor || isNextSpinning}
        onClick={() => handlePreviousClick()}
        style={{ height: 38, width: 90 }}
      >
        {isPreviousSpinning ? (
          <div>
            <Spinner color="white" size={24} type="puff" />
          </div>
        ) : (
          "Previous"
        )}
      </button>
      <button
        className="btn btn-outline-primary ml-2"
        disabled={!pageInfo.hasNextPage || isPreviousSpinning}
        onClick={() => {
          handleNextClick();
        }}
        style={{ height: 38, width: 90 }}
      >
        {isNextSpinning ? (
          <div>
            <Spinner color="white" size={24} type="puff" />
          </div>
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};
