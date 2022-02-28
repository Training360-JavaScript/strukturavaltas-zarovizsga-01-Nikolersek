import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from 'src/app/model/drug';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drugstore';

  drugList: Observable<Drug[]> = this.drugService.getAll();

  constructor(
    private drugService: DrugService,
  ) { }

  ngOnInit(): void {
    console.log(this.drugList);
  }

}
