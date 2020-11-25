import React, { useEffect, useState } from "react";
import { ErrorMessage } from "./components/ErrorMessage";
import { getGithubTopics } from "./actions/githubActions";
import { GithubTopicList } from "./components/GithubTopicList";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { Spinner } from "./components/Spinner";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  const {
    github,
    github: { currentPosition, repositoryCount, topics }
  } = useSelector((state) => state);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError("");
    setIsLoading(true);
    dispatch(getGithubTopics())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
        console.warn(error);
      });
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center pb-5">
      <h1 className="display-3 text-muted mt-5">Github Topic Explorer</h1>
      {error ? (
        <ErrorMessage message={error} setError={setError} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header
            currentPosition={currentPosition}
            repositoryCount={repositoryCount}
          />
          <GithubTopicList topics={topics} /> <Pagination github={github} />
        </>
      )}
    </div>
  );
};
