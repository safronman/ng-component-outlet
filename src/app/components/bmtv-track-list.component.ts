import { Component } from '@angular/core';
import { CoreTrackListComponent, IBeat } from './core-track-list.component';
import { BmtvBeatComponent } from './bmtv-beat.component';
import { BeatSettingsBMTV } from '../settings';

@Component({
    selector: 'app-bmtv-track-list',
    template: `
        <div *ngFor="let beat of beats">
            <ng-container *ngComponentOutlet="componentClass; injector: getInjector(beat)"></ng-container>
        </div>
    `
})
export class BmtvTrackListComponent extends CoreTrackListComponent {

    componentClass = BmtvBeatComponent;

    // переопределяем пропсы
    getProps(beat: IBeat): BeatSettingsBMTV {
        return {beat, price: 9000};
    }

}
