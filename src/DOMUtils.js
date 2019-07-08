const render = (componentString) => {
    let root = document.querySelector("#root");
    let fragment = document.createDocumentFragment();
    
    root.innerHTML = componentString;
    console.log(componentString);
    fragment.appendChild(root);
    document.body.appendChild(fragment);  

}

export default { render };