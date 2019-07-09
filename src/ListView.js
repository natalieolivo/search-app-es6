const render = data => {
  if (data.length && typeof data !== "string") {
    let markup = "";
    data.forEach(item => {
      markup += `<li class="listitem">${item.articleTitle}</li>`;
    });
    return `<ul class="listview">${markup}</ul>`;
  } else {
    return `<section class="listview-no-results">${data}</section>`;
  }
};

export default { render };
