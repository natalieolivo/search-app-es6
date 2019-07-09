import HTTPUtils from "./HTTPUtils";
import DOMUtils from "./DOMUtils";
import DOMEvents from "./DOMEvents";
import ListView from "./ListView";
import SearchView from "./SearchView";

const initialListData = [];
const App = (() => {
  return SearchView.render("Search") + ListView.render(initialListData);
})();

DOMUtils.render(App);

DOMEvents.bind(
  document.querySelector(".search-button"),
  ["click", "keydown"],
  HTTPUtils.callAPI
);

// prevent form from submitting on enter
DOMEvents.bind(document.querySelector("form"), ["keydown"]);

export default App;
