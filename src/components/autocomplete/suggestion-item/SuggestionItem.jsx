import React, { memo } from "react";
import { useHandleSelect } from "./SuggestionItem.utils";

export const SuggestionItemComponent = ({ onSelect, suggestion }) => {
  const handleSelect = useHandleSelect({ onSelect, suggestion });
  return <li onClick={handleSelect}>{suggestion}</li>;
};

const SuggestionItem = memo(SuggestionItemComponent);
SuggestionItem.displayName = "SuggestionItem";

export default SuggestionItem;
