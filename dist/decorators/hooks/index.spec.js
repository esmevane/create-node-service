"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const Hooks = require("./index");
describe("@BeforeStart", () => {
    it("creates `hooks:start:before` metadata", () => {
        const before = Symbol.for("hooks:start:before");
        let AnyGivenObject = class AnyGivenObject {
        };
        AnyGivenObject = __decorate([
            Hooks.BeforeStart({ stuff: true })
        ], AnyGivenObject);
        chai_1.expect(Reflect.hasMetadata(before, AnyGivenObject)).to.be.true;
    });
});
//# sourceMappingURL=index.spec.js.map