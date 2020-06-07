import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export const useHandleButtonClicked = () => {
  const history = useHistory();
  return useCallback(() => history.push("/home"), [history]);
};
