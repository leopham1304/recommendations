import { useCallback } from "react";

export const useHandleSelect = ({ onSelect, suggestion }) =>
  useCallback(() => onSelect(suggestion), [onSelect, suggestion]);
