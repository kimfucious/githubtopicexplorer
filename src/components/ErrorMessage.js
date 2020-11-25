import React from "react";
import { getGithubTopics } from "../actions/githubActions";
import { useDispatch } from "react-redux";

export const ErrorMessage = ({ message, setError }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <h1 className="display-4 text-muted mt-5" style={{ fontSize: 42 }}>
        There's been a problem
      </h1>
      <p className="lead text-muted mt-3">{message}</p>
      <button
        className="btn btn-outline-primary mt-3"
        onClick={() => {
          try {
            setError("");
            dispatch(getGithubTopics());
          } catch (error) {
            console.warn(error);
            setError(error.message);
          }
        }}
      >
        Try Again
      </button>
    </div>
  );
};
