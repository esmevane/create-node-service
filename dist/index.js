"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Metadata = Symbol.for("Metadata");
const tastyDecorator = (name) => (target) => {
    const state = Reflect.getMetadata(Metadata, target) || {};
    const nextState = Object.assign({}, state, { [name]: 'tasty' });
    Reflect.defineMetadata(Metadata, nextState, target);
};
const chocolate = tastyDecorator('chocolate');
const nougat = tastyDecorator('nougat');
let Snickers = class Snickers {
    render() {
        const ingredients = Reflect.getMetadata(Metadata, this.constructor);
        for (let key in ingredients) {
            console.log(`🍫  ${key}y`);
        }
    }
};
Snickers = __decorate([
    chocolate,
    nougat,
    tastyDecorator('brain')
], Snickers);
const bar = new Snickers();
const render = (component) => component.render();
render(bar);
//# sourceMappingURL=index.js.map