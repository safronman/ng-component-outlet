import { Component } from '@angular/core';
import { CoreTrackListComponent, IBeat } from './core-track-list.component';
import { BeatSettingsProd } from '../settings';
import { ProdBeatComponent } from './prod-beat.component';

@Component({
    selector: 'app-prod-track-list',
    template: `
        <div *ngFor="let beat of beats">
            <ng-container *ngComponentOutlet="componentClass; injector: getInjector(beat)"></ng-container>
        </div>
    `
})
export class ProdTrackListComponent extends CoreTrackListComponent {

    componentClass = ProdBeatComponent;

    // переопределение пропсов
    getProps(beat: IBeat): BeatSettingsProd {
        return {beat, isDownload: true};
    }

}
