import { useContext } from "react"

import DatabaseContext from '../context/DatabaseProvider';

const useDatabase = () =>{
  return useContext(DatabaseContext);
}

export default useDatabase;