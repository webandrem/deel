import axios from "axios";
import { ENDPOINT } from "../components/Autocomplete/constants";
import { Hit } from "../types/Hit";
import exactMatch from "../util/exactMatch";

export const searchTodo = (searchTerm: string): Promise<Hit[]> => {
  return axios.get(ENDPOINT)
    .then(response => response.data as Hit[])
    .then(data => data.filter(({ title }) => exactMatch(title, searchTerm)))
    .catch(err => { 
      console.log(err); 
      return [] as Hit[];
    });
}

