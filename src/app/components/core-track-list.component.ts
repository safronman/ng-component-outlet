import { Component, Injector } from '@angular/core';
import { BeatSettings } from '../settings';

export interface IBeat {
    id: number;
    title: string;
    author: string;
}

@Component({
    selector: 'app-core-track-list',
    template: ``
})
export class CoreTrackListComponent {

    componentClass: any;
    beats: Array<IBeat> = [
        {id: 1, author: 'MIKE BULGAKOV', title: ' Switch'},
        {id: 2, author: 'THE ARTISANS', title: 'Skip Bunny'}
    ];

    injectors = {};

    constructor(private inj: Injector) {
    }

    getProps(beat: IBeat): BeatSettings {
        return {beat};
    }

    getInjector(beat: IBeat) {
        let inject = this.injectors[beat.id];
        if (!inject) {
            inject = Injector.create([
                {provide: BeatSettings, useValue: this.getProps(beat)}
            ], this.inj);
            this.injectors[beat.id] = inject;
        }
        return inject;
    }

}
