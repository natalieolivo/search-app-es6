import DataUtils from "./DataUtils";

const API_ENDPOINT = "http://localhost:3000/api/v1/list";

const callAPI = event => {
  const FORM = event.target.form;
  const TEXT_FIELD_SELECTOR = ".search-input";
  const TEXT_FIELD = FORM && FORM.querySelector(TEXT_FIELD_SELECTOR);

  fetch(API_ENDPOINT, {
    method: "POST"
  })
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      DataUtils.checkQueryForMatch(TEXT_FIELD.value, json);
    });
};

export default { callAPI };
