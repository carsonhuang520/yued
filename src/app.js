import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";

Vue.component("y-button", Button);
Vue.component("y-icon", Icon);
Vue.component("y-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading: false,
  },
});

import chai from "chai";
const expect = chai.expect;
// 单元测试
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  // console.log(useElement);
  expect(href).to.eq("#i-settings");
  button.$el.remove();
  button.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      loading: true,
    },
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  // console.log(useElement);
  expect(href).to.eq("#i-loading");
  button.$el.remove();
  button.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  // console.log(useElement);
  expect(order).to.eq("1");
  button.$el.remove();
  button.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: "right",
    },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  // console.log(useElement);
  expect(order).to.eq("2");
  button.$el.remove();
  button.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const gButton = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  gButton.$mount();
  gButton.$on("click", function () {
    console.log(1);
  });
  let button = gButton.$el;
  button.click();
}
