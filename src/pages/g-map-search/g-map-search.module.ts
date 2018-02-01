import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GMapSearchPage } from './g-map-search';
import { SearchResultPage } from'../search-result/search-result';

@NgModule({
  declarations: [
    GMapSearchPage,
    SearchResultPage
  ],
  imports: [
    IonicPageModule.forChild(GMapSearchPage),
  ],
})
export class GMapSearchPageModule {}
