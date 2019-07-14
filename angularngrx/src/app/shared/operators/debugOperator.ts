import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

const debuggerOn = true;

export const debug = (message: string) =>
  <T>(source: Observable<T>): Observable<T> =>
    Observable.create((observer: Observer<T>) =>
      source.subscribe({
        next(value: T) {
          if (debuggerOn) {
            console.log(`Observable next --- ${message}`, value);
          }
          observer.next(value);
        },
        error(err) {
          if (debuggerOn) {
            console.log(`Observable error --- ${message}`, err);
          }
          observer.error(err);
        },
        complete() {
          if (debuggerOn) {
            console.log(`Observable completed --- ${message}`);
          }
          observer.complete();
        }
      })
    );

export const logger = (message: string) =>
  <T>(source: Observable<T>) =>
    new Observable((observer: Observer<T>) =>
      source.subscribe({
        next(value: T) {
          if (debuggerOn) {
            console.log(`Observable next ${message}`, value);
          }
          observer.next(value);
        },
        error(err) {
          if (debuggerOn) {
            console.log(`Observable error ${message}`, err);
          }
          observer.error(err);
        },
        complete() {
          if (debuggerOn) {
            console.log(`Observable completed --- ${message}`);
          }
          observer.complete();
        }
      })
    );
