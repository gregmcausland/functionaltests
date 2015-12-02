import h                from 'virtual-dom/h';
import createElement    from 'virtual-dom/create-element';
import diff             from 'virtual-dom/diff';
import patch            from 'virtual-dom/patch';

/** @jsx hJSX */

function createVDOMNode(element) {
    let tree;
    let rootNode;

    function render(newTree) {
        const patches = tree
            ? diff(tree, newTree)
            : undefined;

        rootNode = patches
            ? patch(rootNode, patches)
            : firstTimeRender(newTree);

        tree = newTree;
        return tree;
    }

    function firstTimeRender(newTree) {
        const newTreeElement = createElement(newTree);
        element.parentNode.replaceChild(newTreeElement, element);
        return newTreeElement;
    }

    return { render, rootNode };
}

function hJSX(el, props, ...children) {
  return h(el, props, children);
}

export { hJSX, createVDOMNode };
