import { Injectable } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

export class ErrorEvent {
    constructor(public code: number, public message: string, public type?: string) {}
}

@Injectable()
export class ErrorService {

    private eventSource: Subject<ErrorEvent> = new Subject<ErrorEvent>();
    public events: Observable<ErrorEvent> = this.eventSource.asObservable();

    constructor() { }

    private emitEvent(event: ErrorEvent) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }

    public putError(code: number, message: string) {
        this.emitEvent(new ErrorEvent(code, message));
    }

    public handleError(response: any) {
        if (typeof response.info === 'string') {
            this.emitEvent(new ErrorEvent(400, response.info, response.type));
        } else if (typeof response.info === 'object') {
            for (const key in response.info) {
                if (response.info.hasOwnProperty(key)) {
                    for (const message of response.info[key]) {
                        this.emitEvent(new ErrorEvent(400, message, response.type));
                    }
                }
            }
        }
    }
}
