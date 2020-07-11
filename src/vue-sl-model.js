const wm = new WeakMap();

export default {
  install: function (Vue) {
    Vue.directive('sl-model', {
      bind (el, binding, vnode) {
        const inputHandler = event => Vue.set(vnode.context, binding.expression, event.target.value);
        wm.set(el, inputHandler);
        el.value = binding.value;
        el.addEventListener('input', inputHandler);
      },
      componentUpdated(el, binding) {
        el.value = binding.value;
      },      
      unbind(el) {
        const inputHandler = wm.get(el);
        el.removeEventListener(el, inputHandler);
      }
    })
  }    
};