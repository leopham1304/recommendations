import React, { memo } from "react";
import PropTypes from "prop-types";
import { useHandleSelect } from "./SuggestionItem.utils";

export const SuggestionItem = ({ onSelect, suggestion }) => {
  const handleSelect = useHandleSelect({ onSelect, suggestion });
  return <li onClick={handleSelect}>{suggestion}</li>;
};

SuggestionItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  suggestion: PropTypes.string.isRequired,
};

export default memo(SuggestionItem);
