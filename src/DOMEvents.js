const bind = (element, handlerTypes, handler) => {
  handlerTypes.forEach(type => {
    element.addEventListener(
      type,
      event => {
        if (type === "keydown" && !(event.keyCode === 13)) {
          return;
        }

        event.preventDefault();
        handler.call(handler, event);
      },
      false
    );
  });
};

export default { bind };
