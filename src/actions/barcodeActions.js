import axios from "axios";
import { GET_BARCODE } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/api/insertbarcode", project);
    history.push("/addBarcode");
  } catch (err) {
    dispatch({
      type: GET_BARCODE,
      payload: err.response.data
    });
  }
};
