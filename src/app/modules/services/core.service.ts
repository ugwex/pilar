import { Injectable } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private eventSource: Subject<any> = new Subject<any>();
  public events: Observable<any> = this.eventSource.asObservable();
  public growlEvents: Observable<any> = this.eventSource.asObservable();

  constructor() { }

  private emitEvent(event: any) {
      if (this.eventSource) {
          // Push up a new event
          this.eventSource.next(event);
      }
  }

  growl(type: string, message: string, callback: () => void, timeout?: number) {
      this.emitEvent({type: type, message: message, timeout: timeout});
      if (timeout) {
          setTimeout(() => {
              callback();
          }, timeout);
      }
  }

}
