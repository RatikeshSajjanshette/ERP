import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(private _http: HttpClient) { }

	get<T>(url: string): Observable<T> {
		return this._http.get<T>(url);
  }

	post<T>(url: string, body: Object): Observable<T> {
		return this._http.post<T>(url, body);
  }

	delete<T>(url: string): Observable<T> {
		return this._http.delete<T>(url);
  }

	put<T>(url: string, body: Object): Observable<T> {
		return this._http.put<T>(url, body);
	}
}
