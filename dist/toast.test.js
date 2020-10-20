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
})({"jRN6":[function(require,module,exports) {
// const expect = chai.expect
// import Vue from 'vue'
// import Toast from '../src/toast'
// Vue.config.productionTip = false
// Vue.config.devtools = false
// // describe it 是来自于 mocha 的库
// // 断言是来自 chai 库
// describe('Toast', () => {
//   // BDD 行为驱动测试 mocha引入 describe 描述 Input 有哪些行为
//   it('存在.', () => {
//     expect(Toast).to.be.ok
//   })
//   describe('props', function() {
//     it('测试 autoClose 属性', (done) => {
//       // this.timeout(15000) // 可以设置超时时间，默认是 2000 ms
//       const div = document.createElement('div')
//       document.body.appendChild(div)
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           autoClose: true,
//           autoCloseDelay: 1,
//         },
//       }).$mount(div)
//       setTimeout(() => {
//         expect(document.body.contains(vm.$el)).to.eq(false)
//         done()
//       }, 1500)
//     })
//     it('接受 closeButton', () => {
//       const callback = sinon.fake()
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           closeButton: {
//             text: '关闭',
//             callback,
//           },
//         },
//       }).$mount()
//       const span = vm.$el.querySelector('.close')
//       expect(span.textContent.trim()).to.eq('关闭')
//       span.click()
//       expect(callback).to.have.been.called
//     })
//     it('接受 enableHtml', () => {
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           enableHtml: true,
//         },
//       })
//       vm.$slots.default = ['<strong id="test">hello</strong>']
//       vm.$mount()
//       expect(vm.$el.querySelector('#test')).to.exist
//     })
//     it('接受 position', () => {
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           position: 'bottom',
//         },
//       }).$mount()
//       expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
//     })
//   })
// })
},{}]},{},["jRN6"], null)
//# sourceMappingURL=/toast.test.js.map