import { NgModule } from "@angular/core";
import { LinkComponent } from "./link/link.component";
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [
        LinkComponent
    ],
    imports: [
        ButtonModule,
        RouterLink
    ],
    exports: [
        LinkComponent
    ]
})
export class ServeSyncCommonModule { }