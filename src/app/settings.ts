import { IBeat } from './components/core-track-list.component';

export abstract class BeatSettings {
    beat: IBeat;
}

export class BeatSettingsBMTV extends BeatSettings {
    price: number;
}

export class BeatSettingsProd extends BeatSettings {
    isDownload: boolean;
}
