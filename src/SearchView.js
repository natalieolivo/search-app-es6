const render = data => {
  return `<section class="search-section">
            <form action method="GET">
                <input type="text" class="search-input" placeholder="Enter a city" />
                <button class="search-button" type="button">${data}</button>
            </form>
        </section>`;
};

export default { render };
