import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): IProduct[] {
        return [
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
            },
            {
                "productId": 10,
                "productName": "Bow",
                "productCode": "TXF 3260",
                "releaseDate": "May 20, 2020",
                "description": "Descricao Bow",
                "price": 18.60,
                "starRating": 4.2,
                "imageUrl": "assets/images/hammer.png"
            }
        ];
    }
}