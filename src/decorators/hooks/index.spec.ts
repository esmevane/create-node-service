import "reflect-metadata"

import { expect } from "chai"
import * as Hooks from "./index"

describe("@BeforeStart", () => {
  it("creates `hooks:start:before` metadata", () => {
    const before = Symbol.for("hooks:start:before")
    @Hooks.BeforeStart({ stuff: true })
    class AnyGivenObject { }

    expect(Reflect.hasMetadata(before, AnyGivenObject)).to.be.true
  })
})