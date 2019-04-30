import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';

import { ProductService } from './services/product.service';



// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule  ],
  declarations: [ AppComponent, HelloComponent, ProductsComponent, ProductsListComponent, ProductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
