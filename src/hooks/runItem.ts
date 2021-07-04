import { reactive, toRefs } from '@vue/reactivity';

/**
 * Define our state
 *
 * This state is mutable in the function below,
 * but if we pass it to the component without `toRefs`
 * it will not mutate.
 */
const state = reactive({
  items: [],
});

export default () => {
  const addItem = (item = "item") => {
    state.items.push(item)
  };

  const deleteItem = () => {
    state.items.pop()
  }

  return {
    state: toRefs(state),
    addItem,
    deleteItem,
  };
};
