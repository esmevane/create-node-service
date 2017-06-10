"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.HooksMetadata = Symbol.for("hooks:start:before");
exports.BeforeStart = (metadata) => (target) => {
    const state = Reflect.getMetadata(exports.HooksMetadata, target) || {};
    const nextState = Object.assign({}, state, metadata);
    Reflect.defineMetadata(exports.HooksMetadata, nextState, target);
};
//# sourceMappingURL=index.js.map