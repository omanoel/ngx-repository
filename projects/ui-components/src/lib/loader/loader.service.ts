import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  private _loaderSubject = new BehaviorSubject<boolean>(false);

  public get loader$(): Observable<boolean> {
    return this._loaderSubject.asObservable();
  }

  public loaderOn(): void {
    this._loaderSubject.next(true);
  }

  public loaderOff(): void {
    this._loaderSubject.next(false);
  }

  public showLoaderUntilComplete$<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.loaderOn()),
      concatMap(() => obs$),
      finalize(() => this.loaderOff())
    );
  }
}
