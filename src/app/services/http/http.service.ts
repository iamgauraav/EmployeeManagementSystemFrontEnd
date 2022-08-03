import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postservice(url:string, data:any, token:boolean=true, httpOptions:any){
    
    return this.http.post(url, data, token && httpOptions)

  }

  putservices(url:string, data:any, token: boolean=false, httpOptions:any={})
  {
    return this.http.put(url,data,token && httpOptions );
  }

  getService(url:string, token:boolean=false, httpOptions:any)
  {
    return this.http.get(url,token && httpOptions)
  }

  deleteService(url:string, token:boolean=false, httpOption:any){
    return this.http.delete(url,token && httpOption)
  }
}
