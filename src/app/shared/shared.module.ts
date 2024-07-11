import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxStarsModule } from 'ngx-stars';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatAutocompleteModule,
    NgxStarsModule,    
    GooglePlaceModule,
    CommonModule,
    MatDialogModule

  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatAutocompleteModule,
    HttpClientModule,
    NgxStarsModule,
    GooglePlaceModule,
    CommonModule,
  
  ]
})
export class SharedModule { }
