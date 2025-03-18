import { get } from "../main";
import { prayAll } from "../NetworkUrl";

const allPray = body => {
    const TodosUrl = prayAll + body;
    return get(TodosUrl);
  };
  export default {allPray};