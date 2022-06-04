import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
 
@Component({
    selector: 'ui-loader',
    templateUrl: './loader.component.html',
    providers: [LoaderService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
    constructor(public loaderService: LoaderService) {}

    ngOnInit(): void {}

    public get loading$(): Observable<boolean> {
        return this.loaderService.loader$;
    }
}
