import { EventEmitter, ElementRef, OnChanges, NgZone, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { LocationStrategy } from '@angular/common';
export declare class Timeline implements OnChanges {
    private zone;
    private cd;
    private location;
    view: any;
    state: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: any;
    miniChart: any;
    autoScale: any;
    scaleType: any;
    height: number;
    select: EventEmitter<{}>;
    onDomainChange: EventEmitter<{}>;
    element: HTMLElement;
    dims: any;
    xDomain: any[];
    xScale: any;
    brush: any;
    transform: string;
    initialized: boolean;
    filterId: any;
    filter: any;
    constructor(element: ElementRef, zone: NgZone, cd: ChangeDetectorRef, location: LocationStrategy);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getXDomain(): any[];
    getXScale(): any;
    addBrush(): void;
    updateBrush(): void;
    getDims(): any;
}
