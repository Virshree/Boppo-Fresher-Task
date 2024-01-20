import axios from "axios";
import { JobApi } from "../api/Api";

export  function fetchDetails() {
const promise=  axios.get(JobApi)

const res=  promise.then((result)=>
        result
      )

      return res
    
    
  }