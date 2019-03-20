const d = document;

const addWrapper = (elem, className) => {
  const wrapperNode = d.createElement('div');
  wrapperNode.classList.add(className);

  const nodeCopy = elem.cloneNode(true);
  wrapperNode.appendChild(nodeCopy);

  elem.replaceWith(wrapperNode);

  return true;
}

const init = () => {
  /** Constants */
  const anim = {
    text: {
      leftRight: 'tr-lr',
      topBottom: 'tr-tb',
      topBottom2: 'tr-tb2',
      bottomTop: 'tr-bt',
    },
  };

  /** DOM Nodes */
  const bottomTop = d.querySelector(`[data-aos="${anim.text.bottomTop}"]`);
  const topBottom = d.querySelector(`[data-aos="${anim.text.topBottom}"]`);
  const topBottom2 = d.querySelector(`[data-aos="${anim.text.topBottom2}"]`);

  addWrapper(bottomTop, 'wrapper-bt');
  addWrapper(topBottom, 'wrapper-tb');
  addWrapper(topBottom2, 'wrapper-tb2');
};

document.addEventListener("DOMContentLoaded", init);
