import DOMUtils from "./DOMUtils";

const App = () => {
    // build root app
    return `<section class="search-section">
                <form action method="GET">
                    <input type="text" class="search-input" />
                </form>
            </section>
            `;
};

DOMUtils.render(App());

export default App;

// const callAPI = () => {
//     fetch("http://localhost:3000/api/v1/list")
//         .then(function(response) {          
//             return response.json();
//         })
//         .then((json) => {
//             console.log(json);
//         });
// };

// callAPI();