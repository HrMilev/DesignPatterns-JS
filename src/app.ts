import { proxy } from './Proxy/proxy.js';

interface PatternWindow extends Window {
    proxyPattern(name: string) : void

}

declare let window: PatternWindow;

window.proxyPattern = proxy; // try with 'John'