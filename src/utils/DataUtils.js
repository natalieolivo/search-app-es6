import DOMUtils from "./DOMUtils";
import App from "../App";
import ListView from "../components/ListView";

const checkQueryForMatch = (query, listResults) => {
  let matchList = [];

  listResults.forEach(item => {
    let title = item.itemTitle || "";
    title = title && title.toLowerCase();
    query = query && query.toLowerCase();

    if (title.indexOf(query) !== -1) {
      matchList.push(item);
    }
  });

  if (matchList.length) {
    DOMUtils.renderChildView({
      parent: App,
      child: ListView,
      data: matchList
    });
  } else {
    DOMUtils.renderChildView({
      parent: App,
      child: ListView,
      data: "No Results"
    });
  }
};

export default { checkQueryForMatch };
