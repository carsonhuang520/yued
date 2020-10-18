// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"FIP2":[function(require,module,exports) {
// const expect = chai.expect
// import Vue from 'vue'
// import Col from '../src/col'
// Vue.config.productionTip = false
// Vue.config.devtools = false
// // describe it 是来自于 mocha 的库
// // 断言是来自 chai 库
// describe('Col', () => {
//   // BDD 行为驱动测试 mocha引入 describe 描述 Button 有哪些行为
//   it('存在.', () => {
//     expect(Col).to.exist
//   })
//   it('接收 span 属性', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Col)
//     const vm = new Constructor({
//       propsData: {
//         span: 1,
//       },
//     }).$mount(div)
//     const element = vm.$el
//     expect(element.classList.contains('y-col-1')).to.eq(true)
//     div.remove()
//     vm.$destroy()
//   })
//   it('接收 offset 属性', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Col)
//     const vm = new Constructor({
//       propsData: {
//         offset: 1,
//       },
//     }).$mount(div)
//     const element = vm.$el
//     expect(element.classList.contains('offset-1')).to.eq(true)
//     div.remove()
//     vm.$destroy()
//   })
//   it('接收 phone 属性', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Col)
//     const vm = new Constructor({
//       propsData: {
//         phone: { span: 2, offset: 2 },
//       },
//     }).$mount(div)
//     const element = vm.$el
//     expect(element.classList.contains('y-col-phone-2')).to.eq(true)
//     expect(element.classList.contains('offset-phone-2')).to.eq(true)
//     div.remove()
//     vm.$destroy()
//   })
//   it('接收 i-pad 属性', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Col)
//     const vm = new Constructor({
//       propsData: {
//         iPad: { span: 2, offset: 2 },
//       },
//     }).$mount(div)
//     const element = vm.$el
//     expect(element.classList.contains('y-col-i-pad-2')).to.eq(true)
//     expect(element.classList.contains('offset-i-pad-2')).to.eq(true)
//     div.remove()
//     vm.$destroy()
//   })
//   it('接收 narrow-pc 属性', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Col)
//     const vm = new Constructor({
//       propsData: {
//         narrowPc: { span: 2, offset: 2 },
//       },
//     }).$mount(div)
//     const element = vm.$el
//     expect(element.classList.contains('y-col-narrow-pc-2')).to.eq(true)
//     expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
//     div.remove()
//     vm.$destroy()
//   })
//   it('接收 pc 属性', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Col)
//     const vm = new Constructor({
//       propsData: {
//         pc: { span: 2, offset: 2 },
//       },
//     }).$mount(div)
//     const element = vm.$el
//     expect(element.classList.contains('y-col-pc-2')).to.eq(true)
//     expect(element.classList.contains('offset-pc-2')).to.eq(true)
//     div.remove()
//     vm.$destroy()
//   })
// })
},{}]},{},["FIP2"], null)
//# sourceMappingURL=/col.test.js.map