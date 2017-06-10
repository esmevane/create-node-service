import "reflect-metadata"

export const HooksMetadata = Symbol.for("hooks:start:before")
export const BeforeStart = (metadata: object) =>
  (target: any) => {
    const state = Reflect.getMetadata(HooksMetadata, target) || {}
    const nextState = { ...state, ...metadata }

    Reflect.defineMetadata(HooksMetadata, nextState, target)
  }
