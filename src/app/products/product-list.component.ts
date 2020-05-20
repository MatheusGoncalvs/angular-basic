import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    showImage = false;
    imageWidth: number =  50;
    imageMargin: number = 2;
    pageTitle: string = 'Product list';
    _listFilter: string;
    filteredProducts: IProduct[];
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    products: IProduct[] = [
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

    constructor() {
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLowerCase().indexOf(filterBy) !== -1 );
    }

    ngOnInit(): void {
        console.log('OnInit method');
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}