import React, { useState } from "react";
import $ from "jquery";
import { GithubTopicListItem } from "./GithubTopicListItem";
import { TopicsModal } from "./TopicsModal";
import { getRepoTopics } from "../actions/githubActions";
import { useDispatch } from "react-redux";

export const GithubTopicList = ({ topics }) => {
  const dispatch = useDispatch();
  const [isSpinning, setIsSpinning] = useState("");
  const [repoTopics, setRepoTopics] = useState([]);
  const [repoName, setRepoName] = useState("");

  const handleGetTopics = async (name, owner) => {
    try {
      setIsSpinning(name);
      setRepoName(name);
      const response = await dispatch(getRepoTopics(name, owner));
      const repoTopics = response.data.repository.repositoryTopics.edges.map(
        (item) => item.node.topic.name
      );
      setRepoTopics(repoTopics);
      $("#topics-modal").modal("show");
      setIsSpinning("");
    } catch (error) {
      setIsSpinning("");
      console.warn(error);
    }
  };

  const renderGitHubTopics = () =>
    topics.map((item, index) => (
      <GithubTopicListItem
        handleGetTopics={handleGetTopics}
        isSpinning={isSpinning}
        item={item}
        key={index}
      />
    ));

  return (
    <>
      <ul className="container list-group mt-3" style={{ maxWidth: 600 }}>
        {renderGitHubTopics()}
      </ul>
      <TopicsModal repoTopics={repoTopics} repoName={repoName} />;
    </>
  );
};
