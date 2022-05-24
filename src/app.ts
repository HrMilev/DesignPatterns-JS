import { proxy } from './Proxy/proxy.js';
import { decorator } from './Decorator/decorator.js';

interface PatternWindow extends Window {
    proxyPattern(name: string) : void
    decoratorPattern(from: string, text: string, instructions: string[]) : void
}

declare let window: PatternWindow;

window.proxyPattern = proxy; // try with 'John'

window.decoratorPattern = decorator; // try with 'John', 'Hello!', ['E', 'B', 'E']