import { Observable } from 'rxjs';
export declare type IpcListener = (event: any, ...args: any[]) => void;
export declare type ObservableFactoryFunction = (...args: any[]) => Observable<any>;
export interface Receiver {
    send(channel: string, ...args: any[]): void;
}
