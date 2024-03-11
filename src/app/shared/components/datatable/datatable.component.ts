import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, NgModule, Output } from "@angular/core";
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { PagedResult } from "../../../core/schemas/paged.schema";
import { ServeSyncFormControlModule } from "../form-controls/form-control.module";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

export interface DatatableOption {
    title: string | null;
    columns: DatatableColumn[],
    rows: number;
    pagedResult?: PagedResult<any> | null,
}

export interface DatatableColumn {
    name: string;
    field: string;
    generate?: (item: any) => string;
}

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html'
})
export class DataTableComponent {

    @Input()
    model!: DatatableOption;

    @Input()
    styleClass?: string;

    @Output()
    pageChange = new EventEmitter<number>();

    @Output()
    searchChange = new EventEmitter<string>();

    filterForm = new FormGroup({
        search: new FormControl('')
    })

    get totalRecords() : number {
        if (this.model.pagedResult)
            return this.model.pagedResult.total;

        return 0;
    }

    get data() : any[] {
        if (this.model.pagedResult)
            return this.model.pagedResult.data;

        return [];
    }

    onPageChange(arg: any) {
        this.pageChange.emit((arg.first / arg.rows) + 1);
    }
}

@NgModule({
    declarations: [
        DataTableComponent
    ],
    imports: [
        TableModule,
        CommonModule,
        SkeletonModule,
        ReactiveFormsModule,
        ServeSyncFormControlModule
    ],
    exports: [
        DataTableComponent
    ]
})
export class DataTableModule { }