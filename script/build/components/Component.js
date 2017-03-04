"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = exports.Component = function () {
    function Component() {
        _classCallCheck(this, Component);

        this._handlers = [];
    }

    _createClass(Component, [{
        key: "subscribe",
        value: function subscribe(event, callback) {
            this._handlers.push({ event: event, callback: callback });
        }
    }, {
        key: "unsubscribe",
        value: function unsubscribe(target) {
            this._handlers.filter(function (handler) {
                return handler.event != target.event && handler.callback != target.callback;
            });
        }
    }, {
        key: "_notify",
        value: function _notify(event, options) {
            options = options || this;
            this._handlers.filter(function (handler) {
                return handler.event == event;
            }).forEach(function (handler) {
                return handler.callback(options);
            });
        }
    }]);

    return Component;
}();
//# sourceMappingURL=Component.js.map