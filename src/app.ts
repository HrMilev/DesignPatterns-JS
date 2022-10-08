import { proxy } from './Proxy/proxy.js';
import { decorator } from './Decorator/decorator.js';
import { composite } from './Composite/composite.js';
import { adapter } from './Adapter/adapter.js';
import { factoryMethod } from './FactoryMethod/factoryMethod.js';
import { mediator } from './Mediator/mediator.js';
import { bridge } from './Bridge/bridge.js';
import { singleton } from './Singleton/singleton.js';

interface PatternWindow extends Window {
    proxyPattern(name: string) : void
    decoratorPattern(from: string, text: string, instructions: string[]) : void
    compositePattern() : void
    adapterPattern() : void
    factoryMethodPattern(type: number, name: string) : void
    mediatorPattern() : void
    bridgePattern(place: string) : void
    singletonPattern() : void
}

declare let window: PatternWindow;

window.proxyPattern = proxy; // try with 'John'

window.decoratorPattern = decorator; // try with 'John', 'Hello!', ['E', 'B', 'E']

window.compositePattern = composite;

window.adapterPattern = adapter;

window.factoryMethodPattern = factoryMethod; // try with 0 (cheap), 'John'

window.mediatorPattern = mediator;

window.bridgePattern = bridge;

window.singletonPattern = singleton;