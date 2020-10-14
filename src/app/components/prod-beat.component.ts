import { Component } from '@angular/core';
import { IBeat } from './core-track-list.component';
import { BeatSettings, BeatSettingsProd } from '../settings';

@Component({
    selector: 'app-prod-beat',
    template: `
        <div style="border: 2px solid blue; padding: 10px; display: flex; justify-content: space-between; margin-bottom: 10px">
            <h2>{{ beat.author }} <b>{{ beat.title }}</b></h2>
            <button style="width: 250px; background-color: blue; color: white" *ngIf="isDownload">BUY</button>
        </div>
    `
})
export class ProdBeatComponent {

    beat: IBeat;
    isDownload: boolean;

    constructor(settings: BeatSettings) {
        this.beat = (settings as BeatSettingsProd).beat;
        this.isDownload = (settings as BeatSettingsProd).isDownload;
    }

}
