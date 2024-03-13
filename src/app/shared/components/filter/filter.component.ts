import { Component, EventEmitter, Input, NgModule, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ServeSyncCommonModule } from "../common/common.module";
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';
import { FormsModule } from "@angular/forms";

export interface FilterField {
    id: string;
    name: string;
    type?: string;
    placeHolder?: string;
    data: FilterData[];
    selectedValue?: any;
}

export interface FilterData {
    text: any;
    value: any;
}

export interface SelectedFilterField {
    id: string;
    name: string;
    value: any;
}

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
    
    isDraft: boolean = false;

    @Output()
    filterChange = new EventEmitter<SelectedFilterField[]>();

    @Input()
    fields: FilterField[] = [
        {
            id: '1',
            name: 'Field 1',
            type: '1',
            data: [
                {
                    text: 'Hôm nay',
                    value: '1'
                },
                {
                    text: 'Hôm nay 2',
                    value: '2'
                }
            ],
            selectedValue: '1'
        },
        {
            id: '1',
            name: 'Field 1',
            type: '1',
            data: [
                {
                    text: 'Hôm nay',
                    value: '1'
                },
                {
                    text: 'Hôm nay 2',
                    value: '2'
                }
            ],
            selectedValue: '1'
        }
    ]

    onApplyFilter() {
        const selectedFilters = this.fields.map(x => {
            return {
                id: x.id,
                name: x.name,
                value: x.selectedValue
            };
        });

        this.isDraft = false;
        this.filterChange.emit(selectedFilters);
    }

    ngOnInit(): void {
        
    }
}

@NgModule({
    declarations: [
        FilterComponent,
    ],
    imports: [
        CommonModule,
        OverlayPanelModule,
        DropdownModule,
        ServeSyncCommonModule,
        BadgeModule,
        FormsModule
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }