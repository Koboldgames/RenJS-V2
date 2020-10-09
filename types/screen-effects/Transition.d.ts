import RJSScreenEffectInterface from './RJSScreenEffect';
import { Group } from 'phaser-ce';
import RJS from '../core/RJS';
export default class Transition implements RJSScreenEffectInterface {
    static CUT: string;
    static FADE: string;
    static FADEOUT: string;
    static FADEIN: string;
    static FUSION: string;
    static MOVE: string;
    static FADETOCOLOUR: string;
    private game;
    private tweenManager;
    constructor(game: RJS);
    get(name: string): any;
    CUT(from: any, to: any, unskippable?: boolean, position?: any, scaleX?: any): Promise<void>;
    FADE(from: any, to: any, unskippable?: boolean, position?: any, scaleX?: any): Promise<any>;
    FADEOUT(from: any, unskippable?: boolean): Promise<void>;
    FADEIN(to: any, unskippable?: boolean, position?: any, scaleX?: any): Promise<void>;
    FUSION(from: any, to: any, unskippable?: boolean, position?: any, scaleX?: any, group?: Group): Promise<void>;
    MOVE(from: any, to: any, unskippable: boolean, position: any, scaleX?: any): Promise<void>;
    FADETOCOLOUR(from: any, to: any, unskippable: boolean, colour: any, position?: any, scaleX?: any): Promise<void>;
    FADETOBLACK(from: any, to: any, unskippable?: boolean, position?: any): Promise<void>;
    FADETOWHITE(from: any, to: any, unskippable?: boolean, position?: any): Promise<void>;
}