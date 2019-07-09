import DOMEvents from "./DOMEvents";
import HTTPUtils from "./HTTPUtils";

const render = componentString => {
  let root = document.querySelector("#root");
  let fragment = document.createDocumentFragment();

  root.innerHTML = componentString;
  fragment.appendChild(root);
  document.body.appendChild(fragment);
};

const renderChildView = viewModel => {
  renderRoot(
    viewModel.parent.replace(
      viewModel.child.render([]),
      viewModel.child.render(viewModel.data)
    )
  );
};

const renderRoot = componentString => {
  // rerender root App, if a child view has been appended with new data
  render(componentString);
  DOMEvents.bind(
    document.querySelector(".search-button"),
    ["click", "keydown"],
    HTTPUtils.callAPI
  );

  // prevent form from submitting on enter
  DOMEvents.bind(document.querySelector("form"), ["keydown"]);
};

export default { render, renderChildView };
