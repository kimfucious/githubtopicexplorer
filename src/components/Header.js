import React from "react";
import { addCommas } from "../helpers";

export const Header = ({ currentPosition, repositoryCount }) => {
  return (
    <div className="lead mt-4" style={{ fontSize: 24 }}>
      {`Items ${currentPosition} - ${currentPosition + 9} out of ${addCommas(
        repositoryCount
      )}
      repos`}
    </div>
  );
};
