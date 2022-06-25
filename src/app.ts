import { proxy } from './Proxy/proxy.js';
import { decorator } from './Decorator/decorator.js';
import { composite } from './Composite/composite.js';
import { adapter } from './Adapter/adapter.js';

interface PatternWindow extends Window {
    proxyPattern(name: string) : void
    decoratorPattern(from: string, text: string, instructions: string[]) : void
    compositePattern() : void
    adapterPattern(): void
}

declare let window: PatternWindow;

window.proxyPattern = proxy; // try with 'John'

window.decoratorPattern = decorator; // try with 'John', 'Hello!', ['E', 'B', 'E']

window.compositePattern = composite;

window.adapterPattern = adapter;