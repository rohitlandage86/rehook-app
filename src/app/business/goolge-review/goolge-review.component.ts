import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-goolge-review',
  templateUrl: './goolge-review.component.html',
  styleUrls: ['./goolge-review.component.scss']
})
export class GoolgeReviewComponent implements OnInit  {

  allGoogleReviewList:Array<any>=[]
  allGoogleNegativeReviewList:Array<any>=[]
  page = 1;
  perPage = 10;
  total=0
  businessId :any
  platformId :any
  heartIcons = {
    empty: '../../../assets/images/star/empty-star.svg',
    half: '../../../assets/images/star/half-star.svg',
    full: '../../../assets/images/star/full-star.svg',
}
  constructor(private _businessService:BusinessService){}
  ngOnInit(){
    this.getGoogleReviewList('ChIJyQ8dYHwYwTsRc2eL2aNTpLY');
    this.businessId =1
    this.platformId =1
    this.getAllNegativeList()
  }

  //get google business review...
  getGoogleReviewList(placeId:any){
    this._businessService.getGoogleReviewList(placeId).subscribe({
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
        if (res.data.length>0) this.allGoogleNegativeReviewList = res.data;
        if (res.pagination) this.total = res.pagination.total
      }
    })
  }
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.getAllNegativeList();
  }

}
