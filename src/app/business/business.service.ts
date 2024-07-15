import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
 //api
 url = "http://localhost:3000/"
 httpHeaders = new HttpHeaders({
   'Content-Type': 'application/json'
 });
  constructor(private http: HttpClient) { }
   //  get yelp business ...
   getYelpBusiness(phone: any): Observable<any> {
    let params = {
      phone: phone
  }
    return this.http.get(this.url + 'api/yelp/business/phone',{
      params: params
  })
}  
  
  //add connect Yelp business  ...
  connectYelpbusiness(data:any):Observable<any>{
    return this.http.post(this.url+"api/yelp-platform",data,{
      headers:this.httpHeaders
    });
  }
     // check integrations platform connected or not ...
     getPlatformConnectedOrNotById(business_id: any) {
      let params = {
        business_id: business_id
    }
      return this.http.get(this.url + 'api/check-platform-connected',{
        params: params
    })
  }
  
}
