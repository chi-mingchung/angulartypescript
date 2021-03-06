import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'seller',
    template: 'The seller is Mary Lou, id {{sellerID}} ',
    styles: [':host {background: yellow}']
})
export class SellerInfoComponent {
   sellerID: string;

   constructor(route: ActivatedRoute){
     this.sellerID = route.snapshot.paramMap.get('id');
   }
}
