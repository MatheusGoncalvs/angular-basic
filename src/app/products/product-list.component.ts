import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    imageWidth: number =  50;
    imageMargin: number = 2;
    pageTitle: string = 'Product list';
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "Descricao",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX 9238",
            "releaseDate": "April 02, 2020",
            "description": "Descricao Hammer",
            "price": 8.99,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];
}