import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page, PagedData } from './../models';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(
        private httpClient: HttpClient
    ) { }

    private getPagedData(page: Page, response: any): PagedData<any> {
        const pagedData = new PagedData<any>();
        page.totalElements = response.count;
        page.totalPages = page.totalElements / page.size;

        pagedData.page = page;

        let number = (page.pageNumber * page.size) + 1;
        response.data.forEach(data => {
            data.number = number++;
            pagedData.data.push(data);
        });

        return pagedData;
    }

    get(url: string, params?: any) {
        let httpParams: HttpParams;
        if (params) {
            httpParams = Object.getOwnPropertyNames(params)
            .reduce((p, key) => p.set(key, params[key]), new HttpParams());
        }

        return this.httpClient.get(url, { params: httpParams });
    }

    post(url: string, body?: any, formDataMode?: boolean) {
        return this.httpClient.post(url, body);
    }

    put(url: string, body?: any) {
        return this.httpClient.put(url, body);
    }

    delete(url: string, params?: any) {
        // return this.httpClient.delete(url, body);

        let httpParams: HttpParams;
        if (params) {
            httpParams = Object.getOwnPropertyNames(params)
            .reduce((p, key) => p.set(key, params[key]), new HttpParams());
        }

        return this.httpClient.delete(url, { params: httpParams });
    }

    pagedCollection(url: string, page: Page, callback: (result: PagedData<any>) => void, params?: any) {
        const localParams: any = Object.assign({
            limit: page.size,
            offset: (page.pageNumber * page.size)
        }, params);

        if (page.keyword) {
            localParams.cari = page.keyword;
        }

        this.get(url, localParams).subscribe((response: any) => {
            if (response.result === 'false') {
                response.count = 0;
                response.data = [];
            }
            callback(this.getPagedData(page, response));
        });
    }

}
