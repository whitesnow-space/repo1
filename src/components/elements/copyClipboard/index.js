import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CopyClipboard = ({ placeholder, type }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000); // Set timeout for 0.5 seconds

      // Cleanup the timer when the component unmounts or `copied` changes
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const notification = {
    general: "Copied!",
    address: "Email Address Copied!",
  };

  const copyText = async () => {
    try {
      await window.navigator.clipboard.writeText(placeholder);
      setCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };

  return (
    <span className="copyClipboard fw-bold" onClick={() => copyText()}>
      {!copied ? placeholder : notification[type]}
    </span>
  );
};

CopyClipboard.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["general", "address"]),
};

export default CopyClipboard;
