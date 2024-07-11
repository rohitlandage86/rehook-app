import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-by-topic',
  templateUrl: './browse-by-topic.component.html',
  styleUrls: ['./browse-by-topic.component.scss']
})
export class BrowseByTopicComponent implements OnInit {
  constructor(){}
  ngOnInit() {
  this.getlabel();
  
  }
 
  //dynamic lebal change with color
  getlabel(){
    document.addEventListener('DOMContentLoaded', () => {
      const radioButtons = document.querySelectorAll('.btn-check') as NodeListOf<HTMLInputElement>;
      const breadcrumbLabel = document.getElementById('breadcrumb-label') as HTMLElement;
    
      radioButtons.forEach(radio => {
          radio.addEventListener('change', () => {
              const selectedLabel = document.querySelector(`label[for="${radio.id}"]`)?.textContent?.trim();
              if (selectedLabel && breadcrumbLabel) {
                  breadcrumbLabel.textContent = selectedLabel;
              }
          });
      });
  });
  }

}
