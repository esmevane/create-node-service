import "reflect-metadata"

const Metadata = Symbol.for("Metadata")

interface HasRender {
  render(): void
}

interface MetaState {
  [key: string]: 'tasty' | 'not_tasty'
}


const tastyDecorator = (name: string) =>
  (target: any) => {
    const state: MetaState = Reflect.getMetadata(Metadata, target) || {}
    const nextState: MetaState = { ...state, [name]: 'tasty' }

    Reflect.defineMetadata(Metadata, nextState, target)
  }



const chocolate = tastyDecorator('chocolate')
const nougat = tastyDecorator('nougat')

@chocolate
@nougat
@tastyDecorator('brain')
class Snickers implements HasRender {
  render() {
    const ingredients = Reflect.getMetadata(Metadata, this.constructor)

    for (let key in ingredients) {
      console.log(`🍫  ${key}y`)
    }
  }
}


const bar = new Snickers()
const render = (component: HasRender) => component.render()

render(bar)