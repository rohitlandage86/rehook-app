import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-yelp-review',
  templateUrl: './yelp-review.component.html',
  styleUrls: ['./yelp-review.component.scss']
})
export class YelpReviewComponent implements OnInit  {

  allGoogleReviewList:Array<any>=[]
  allYelpNegativeReviewList:Array<any>=[]
  page = 1;
  perPage = 10;
  total=0
  businessId :any
  platformId :any
  heartIcons = {
    empty: '../../../assets/images/star-yelp/empty-star.svg',
    half: '../../../assets/images/star-yelp/half-star.svg',
    full: '../../../assets/images/star-yelp/full-star.svg',
} 
  constructor(private _businessService:BusinessService){}
  ngOnInit(){
    this.getYelpReviewList('7YxKRfOZtsuH702EkyTwtw')
    this.businessId = 2
    this.platformId =2
    this.getAllNegativeList()
  }

  //get google business review...
  getYelpReviewList(businessId:any){
    this._businessService.getYelpReviewList(businessId).subscribe({
      next:(res:any)=>{
        console.log(res);
        if (res.data.length>0) this.allGoogleReviewList = res.data;
      }
    })
  }
    //get all negative list...
    getAllNegativeList(){
      this._businessService.getAllNegativeReviewList(this.businessId, this.platformId, this.page, this.perPage).subscribe({
        next:(res:any)=>{
          console.log(res);
          if (res.data.length>0) this.allYelpNegativeReviewList = res.data;
          if (res.pagination) this.total = res.pagination.total
        }
      })
    }
  onPageChange(event:any){
    
  }
}
