import React from "react";

export const TopicsModal = ({ repoTopics, repoName }) => {
  const renderTopics = () =>
    repoTopics.map((item, index) => (
      <div className="list-group-item" key={index}>
        {item}
      </div>
    ));

  // TODO: Implement pagination
  return (
    <div
      className="modal fade"
      id="topics-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="topicsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="topicsModalLabel">
              {repoTopics.length === 15
                ? "First 15 topics for "
                : "Topics for " + repoName}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group list-group-flush">{renderTopics()}</ul>
          </div>
          <div className="d-flex justify-content-center modal-footer">
            <button
              type="button"
              className="btn btn-link text-muted"
              data-dismiss="modal"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
