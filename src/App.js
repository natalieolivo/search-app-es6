import DOMUtils from "./DOMUtils";
import DOMEvents from "./DOMEvents";
import ListView from "./ListView";
import SearchView from "./SearchView";

const callAPI = event => {
  const FORM = event.target.form;
  const TEXT_FIELD_SELECTOR = ".search-input";
  const TEXT_FIELD = FORM && FORM.querySelector(TEXT_FIELD_SELECTOR);

  fetch("http://localhost:3000/api/v1/list", {
    method: "POST"
    // body: { query: TEXT_FIELD.value }
  })
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      checkQueryForMatch(TEXT_FIELD.value, json);
    });
};

const checkQueryForMatch = (query, listResults) => {
  let matchList = [];
  listResults.forEach(item => {
    let title = item.itemTitle || "";
    title = title && title.toLowerCase();

    if (title.indexOf(query) !== -1 && query !== "") {
      matchList.push(item);
    }
  });

  if (matchList.length) {
    renderChildView(ListView, listResults);
  } else {
    renderChildView(ListView, "No Results");
  }
};

const renderChildView = (view, data) => {
  // rerender ListView as child of App with new data
  DOMUtils.render(App.replace(ListView.render([]), view.render(data)));
  DOMEvents.bind(
    document.querySelector(".search-button"),
    ["click", "keydown"],
    callAPI
  );
};

const App = (() => {
  // build root app
  // make template strings components
  // add saves to local storage
  // make it pretty
  return `
            ${SearchView.render("Search")}
            ${ListView.render([])}
            `;
})();

DOMUtils.render(App);
DOMEvents.bind(
  document.querySelector(".search-button"),
  ["click", "keydown"],
  callAPI
);

export default App;
