const render = data => {
  if (data.length && typeof data !== "string") {
    let markup = "";
    data.forEach(item => {
      if (item && item.itemTitle) {
        markup += `<li class="listitem">
                        <h4>${item.itemTitle}</h4>
                        <div>${item.content}</div>
                    </li>`;
      }
    });
    return `<ul class="listview">${markup}</ul>`;
  } else {
    return `<section class="listview-no-results">${data}</section>`;
  }
};

export default { render };
