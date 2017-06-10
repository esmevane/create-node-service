declare const makeDecorator: (name: string) => (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) => void;
declare const chocolate: (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) => void;
declare const nougat: (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) => void;
declare class Snickers {
    eat(): string;
}
