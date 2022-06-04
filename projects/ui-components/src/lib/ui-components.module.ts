import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';

import { PopInProjectionComponent } from './pop-in-projection/pop-in-projection.component';
import { UiMaterialModule } from './ui-material.module';

@NgModule({
    declarations: [LoaderComponent, PopInProjectionComponent],
    imports: [CommonModule, UiMaterialModule],
    exports: [LoaderComponent, PopInProjectionComponent]
})
export class UiComponentsModule {}
