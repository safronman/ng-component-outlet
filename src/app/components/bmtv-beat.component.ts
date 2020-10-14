import { Component } from '@angular/core';
import { IBeat } from './core-track-list.component';
import { BeatSettings, BeatSettingsBMTV } from '../settings';

@Component({
    selector: 'app-bmtv-beat',
    template: `
        <h2 style="border: 2px solid black; padding: 10px;">{{ beat.author }} <b>{{ beat.title }}</b>  - <span>{{ price }} руб.</span></h2>
    `
})
export class BmtvBeatComponent {

    beat: IBeat;
    price: number;

    constructor(settings: BeatSettings) {
        this.beat = (settings as BeatSettingsBMTV).beat;
        this.price = (settings as BeatSettingsBMTV).price;
    }

}
