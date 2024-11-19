import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOption } from '../../_interfaces/filter-options-interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    { description: "Ativo", value: true },
    { description: "Inativo", value: false },
  ];

  @Output('onFilter')
   onFilterEmitt = new EventEmitter<IFilterOption>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
