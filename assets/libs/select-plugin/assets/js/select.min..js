function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var getTemplate = function getTemplate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholder = arguments.length > 1 ? arguments[1] : undefined;
  var selectedId = arguments.length > 2 ? arguments[2] : undefined;
  var text = placeholder !== null && placeholder !== void 0 ? placeholder : "Text if we don't have objec.placeholder";
  var items = data.map(function (item) {
    var cls = '';

    if (item.id === selectedId) {
      text = item.value;
      cls = 'selected';
    }

    return "\n        <li class=\"select__item \" >\n             <a target=\"_blank\" href=\"".concat(item.link, "\" class=\"select__link  ").concat(cls, "\" data-type = \"item\" data-id = \"").concat(item.id, "\">").concat(item.value, "</a>\n        </li>   \n        ");
  });
  return "\n    <div class=\"select__input\" data-type = \"input\">\n        <span class=\"select__input-text\" data-type = \"value\">".concat(text, "</span>\n        <img class=\"select__input-img select__input-img-down\" src=\"assets/libs/select-plugin/assets/img/select-arrow-up-down.svg\" alt=\"\" data-arrow = \"arrow\" data-type = \"input\">\n    </div>\n    <div class=\"select__dropdown\">\n         <ul class=\"select__list\">\n             ").concat(items.join(''), "    \n        </ul>\n    </div>\n    ");
};

var _render = new WeakSet();

var _setup = new WeakSet();

var Select = /*#__PURE__*/function () {
  "use strict";

  function Select(selector, options) {
    _classCallCheck(this, Select);

    _setup.add(this);

    _render.add(this);

    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;

    _classPrivateMethodGet(this, _render, _render2).call(this);

    _classPrivateMethodGet(this, _setup, _setup2).call(this);
  }

  _createClass(Select, [{
    key: "clickHandler",
    value: function clickHandler(event) {
      var type = event.target.dataset.type;

      if (type === 'input') {
        this.toggle();
      } else if (type === "item") {
        var id = event.target.dataset.id;
        this.select(id);
      }
    }
  }, {
    key: "select",
    value: function select(id) {
      this.selectedId = id;
      this.$value.textContent = this.current.value;
      this.$el.querySelectorAll('[data-type="item"]').forEach(function (el) {
        el.classList.remove('selected');
      });
      this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');
      this.close();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isOpen ? this.close() : this.open();
    }
  }, {
    key: "open",
    value: function open() {
      this.$el.classList.add('open');
      this.$arrow.classList.remove('select__input-img-down');
      this.$arrow.classList.add('select__input-img-up');
    }
  }, {
    key: "close",
    value: function close() {
      this.$el.classList.remove('open');
      this.$arrow.classList.add('select__input-img-down');
      this.$arrow.classList.remove('select__input-img-up');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$el.removeEventListener('click', this.clickHandler);
      this.$el.innerHTML = '';
    }
  }, {
    key: "isOpen",
    get: function () {
      return this.$el.classList.contains('open');
    }
  }, {
    key: "current",
    get: function () {
      return this.options.data.find(item => item.id === this.selectedId);
    }
  }]);

  return Select;
}();

var _render2 = function _render2() {
  const {
    placeholder
  } = this.options;
  const {
    data
  } = this.options;
  this.$el.classList.add('select');
  this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
};

var _setup2 = function _setup2() {
  this.clickHandler = this.clickHandler.bind(this);
  this.$el.addEventListener('click', this.clickHandler);
  this.$arrow = this.$el.querySelector('[data-arrow="arrow"]');
  this.$value = this.$el.querySelector('[data-type = "value"]');
};