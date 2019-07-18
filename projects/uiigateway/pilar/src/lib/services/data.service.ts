import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

    public sharedData: any;
    public sharedModulId: any;
    public sharedUrlResourceU: any;

    private dataSource = new BehaviorSubject<any>({});
    currentData = this.dataSource.asObservable();

    constructor(
        private httpClient: HttpClient
    ) { }

    changeData(data: any) {
        this.dataSource.next(data);
    }

    setData(data) {
        this.sharedData = data;
    }

    unsetData() {
        this.sharedData = null;
    }

    getData() {
        return this.sharedData;
    }

    downloadPDF(url, params): Observable<Blob> {
        // return this.http.get(url, {
        //     search: params,
        //     responseType: ResponseContentType.Blob
        // }).pipe(map((res) => {
        //     return new Blob([res.blob()], { type: 'application/pdf' });
        // }));

        let httpParams: HttpParams;
        if (params) {
            httpParams = Object.getOwnPropertyNames(params)
            .reduce((p, key) => p.set(key, params[key]), new HttpParams());
        }

        return this.httpClient.get(url, {
            params: httpParams,
            responseType: 'blob'
        });
    }

    setResourceUrl(urlResource) {
        this.sharedUrlResourceU = urlResource;
    }

    getResourceUrl() {
        return this.sharedUrlResourceU;
    }

    unsetResourceUrl() {
        this.sharedUrlResourceU = null;
    }
}
