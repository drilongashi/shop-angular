import {Component, OnInit} from '@angular/core';
import {OrderModel} from './orders.model';
import {OrdersService} from './orders.service';
import {PaginationService} from '../../shared/pagination/pagination.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  data = [];
  currentPage: number;
  pageSize = 4;

  constructor(private ordersService: OrdersService,
              private paginationService: PaginationService) {

  }

  ngOnInit(): void {
    this.paginationService.changeTotalPages(9);
    this.paginationService.currentPage.subscribe(currentPage => {
      this.getOrderHistoryPaged(this.pageSize, currentPage - 1);
      this.currentPage = currentPage;
    });
  }

  getOrderHistoryPaged(size: number, page: number) {
    this.ordersService.paged(size, page).subscribe((orders: OrderModel[]) => {
      this.data = orders;
    });
  }

  parseDate(d: string) {
    return new Date(d);
  }


}
