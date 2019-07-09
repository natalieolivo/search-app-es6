import HTTPUtils from "./utils/HTTPUtils";
import DOMUtils from "./utils/DOMUtils";
import DOMEvents from "./utils/DOMEvents";
import ListView from "./components/ListView";
import SearchView from "./components/SearchView";

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
