import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from 'src/app/model/construction';
import { ConstructionService } from 'src/app/service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-3';

  constructionList: Observable<Construction[]> = this.constructionService.getAll();

  constructor(
    private constructionService: ConstructionService,
  ) { }

  ngOnInit(): void {}

  onDelete(construction: Construction) {
    console.log(construction, 'AAAA');
    this.constructionService.delete(construction.id);
  }

}
