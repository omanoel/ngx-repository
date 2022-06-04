import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ui-pop-in-projection',
    templateUrl: './pop-in-projection.component.html',
    styleUrls: ['./pop-in-projection.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopInProjectionComponent {
    @HostBinding('class') class = 'pop-in-projection';
}
