import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreTrackListComponent } from './components/core-track-list.component';
import { BmtvTrackListComponent } from './components/bmtv-track-list.component';
import { BmtvBeatComponent } from './components/bmtv-beat.component';
import { ProdTrackListComponent } from './components/prod-track-list.component';
import { ProdBeatComponent } from './components/prod-beat.component';

@NgModule({
    declarations: [
        AppComponent,
        CoreTrackListComponent,
        BmtvTrackListComponent,
        BmtvBeatComponent,
        ProdTrackListComponent,
        ProdBeatComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
