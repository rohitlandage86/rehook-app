import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //api
  url = "http://localhost:3000/"
  constructor(private http: HttpClient) { }
  //business-type api
    //all All Business Type list page and perPage
    getAllBusinessType(page: any, perPage: any): Observable<any> {
      let params = {
        'page': page,
        'perPage': perPage
      };
    
      return this.http.get(this.url + 'api/business-type',{params:params});
    }
    //create Business Type 
    createBusinessType(data: any) {
      return this.http.post(this.url + 'api/business-type', data);
    }
    //update business type (put)
    updateBusinessType(data: any, BusinessType_id: any) {
      return this.http.put(this.url + 'api/business-type/' + BusinessType_id, data)
    }
    //get By BusinessType_id
    getBusinessTypeById(_id: any) {
      return this.http.get(this.url + 'api/business-type/' + _id);
  
    }
    //status change patch business type data
    onStatusChangeBusinessType(status: any, _id: any) {
      const params = new HttpParams().set('status', status);
      let body = {
        status: status
      }
      return this.http.patch(this.url + 'api/business-type/' + _id, body, { params: params });
    }
      // get business_type wma
      getAllBusinesstypeWma() {
        return this.http.get(this.url + 'api/business-type/wma')
      }
  
  
    //Subscription Api
  
    //get all subscription list page and perPage
    getAllSubscriptionList(page: any, perPage: any): Observable<any> {
      let params = {
        'page': page,
        'perPage': perPage
      };
    
      return this.http.get(this.url + 'api/subscription',{params:params});
    }
    //create Subscription
    createSubscription(data: any) {
      return this.http.post(this.url + 'api/subscription', data);
    }
    //update subscription (put)
    updateSubscription(data: any, Subscription_id: any) {
      return this.http.put(this.url + 'api/subscription/' + Subscription_id, data)
    }
    //get By subscription id
    getSubscriptionById(_id: any) {
      return this.http.get(this.url + 'api/subscription/' + _id);
  
    }
  
    //status change and patch subscription data
    onStatusChangeSubscription(status: any, _id: any) {
      const params = new HttpParams().set('status', status);
      let body = {
        status: status
      }
      return this.http.patch(this.url + 'api/subscription/' + _id, body, { params: params });
    }
    //period dropdown 
    getSubscriptionListPeriod() {
      return this.http.get(this.url + 'api/period')
    }
    // get subscription wma
    getAllSubscriptionWma() {
      return this.http.get(this.url + 'api/subscription/wma')
    }
  
  
    //platform api
      //all All platform list page and perPage
      getAllPlatform(page: any, perPage: any): Observable<any> {
        let params = {
          'page': page,
          'perPage': perPage
        };
      
        return this.http.get(this.url + 'api/platform',{params:params});
      }
      //create Platform
      createPlatform(data: any) {
        return this.http.post(this.url + 'api/platform', data);
      }
      //update platform (put)
      updatePlatform(data: any, Platform_id: any) {
        return this.http.put(this.url + 'api/platform/' + Platform_id, data)
      }
      //get By platform_id
      getPlatformById(_id: any) {
        return this.http.get(this.url + 'api/platform/' + _id);
    
      }
      //status change patch platform data
      onStatusChangePlatform(status: any, _id: any) {
        const params = new HttpParams().set('status', status);
        let body = {
          status: status
        }
        return this.http.patch(this.url + 'api/platform/' + _id, body, { params: params });
      }
        // get platform wma
        getAllPlatformWma() {
          return this.http.get(this.url + 'api/platform/wma')
        }
}
