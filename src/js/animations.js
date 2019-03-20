const addWrapper = (elem, className) => {
  const wrapperNode = document.createElement('div');
  wrapperNode.classList.add(className);

  const nodeCopy = elem.cloneNode(true);
  wrapperNode.appendChild(nodeCopy);

  elem.replaceWith(wrapperNode);

  return true;
}

const init = () => {
  /** Constants */
  const d = document;
  const elems = ['tr-tb', 'tr-tb2', 'tr-bt'];

  /** Nodes */
  const nodes = d.querySelectorAll(`[data-aos]`);

  /** Adding wrappers to elements */
  nodes.forEach(node => {
    const dataAttr = node.getAttribute('data-aos');

    if (elems.includes(dataAttr)) {
      addWrapper(node, `wrapper-${dataAttr}`);
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
