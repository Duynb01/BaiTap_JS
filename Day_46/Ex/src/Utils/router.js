import Navigo from "navigo";
const router2 = new Navigo("/");
let body = "";
export const router = (array, layout) => {
  array.forEach(({ path, component }) => {
    router2.on(path, function (params) {
      body = component(params);
      layout();
    });
  });
  router2.resolve();
};
