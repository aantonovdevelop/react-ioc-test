import {injectable} from "inversify";

@injectable()
abstract class ReactiveService {
    private _subscribers: Array<() => void> = [];

    protected changed() {
        for (const callback of this._subscribers) {
            callback();
        }
    }

    public onChange(callback: () => void) {
        this._subscribers.push(callback);
    }
}

@injectable()
export class DataService extends ReactiveService {
    private _value: number = 0;

    constructor() {
        super();

        setInterval(() => {
            this._value += 1;
            this.changed();
        }, 1000);

    }

    public get value() {
        return this._value;
    }
}
