import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  connectYelpbusiness(data: any): Observable<any> {
    return this.http.post(this.url + "api/yelp-platform", data, {
      headers: this.httpHeaders
    });
  }
  // get goolge review list...
  getGoogleReviewList(placeId: any): Observable<any> {
    const params = new HttpParams().set('placeId', placeId)
    return this.http.get(this.url + 'api/google/business/place', { params: params })
  }
  //get negative review list...
  getNegativeReviewList(businessId: any) {

  }
  //get all negative review list...
  getAllNegativeReviewList(business_id: any, platform_id: any, page: any, perPage: any): Observable<any> {
    let params = {
      'page': page,
      'perPage': perPage,
      'business_id': business_id,
      'platform_id': platform_id
    };
    if (page == '' || perPage == '') {
      delete params['page'];
      delete params['perPage'];
    }

    return this.http.get(this.url + 'api/negative-review',{
      params: params
    })
  }
  //get yelp review list...
  getYelpReviewList(businessId: any): Observable<any> {
    const params = new HttpParams().set('businessId', businessId)
    return this.http.get(this.url + 'api/yelp/business/reviews', {
      params: params
    })
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
