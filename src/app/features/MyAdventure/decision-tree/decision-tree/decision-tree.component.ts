import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AdventureDecisionTree} from '../../../model/Adventure-Decision-Tree';
import {MyAdventureService} from '../../../services/my-adventure.service';
import {YesNoAnswer} from '../../../model/YesNoAnswer.enum';
import {ActivatedRoute} from '@angular/router';
import {Router,NavigationExtras } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.css']
})
export class DecisionTreeComponent implements OnInit {
  @ViewChild('chartContainer', {static: false}) chartContainer: ElementRef;
  public dataSource : AdventureDecisionTree;
  arrayOfValues: Array<string>;

  constructor(private readonly adventureService: MyAdventureService,private redirect: Router,private activatedRoute: ActivatedRoute) {
    const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.arrayOfValues = new Array<string>();
    } else {
      this.arrayOfValues = JSON.parse(myArray);
    }

   }
  ids : number[] = [];
  ngOnInit() {

    this.adventureService.getAllAdventure().subscribe(
      response => {
          this.dataSource = response;
          debugger;
          $('#chart-container').orgchart({
            data : this.dataSource,
            nodeTemplate: this.questionNodeTemplate
          });
         
      }
  );
   
  }

  playAgain():any{
    this.redirect.navigate(['']);
  }

  highlightAnsweredQuestions(button: HTMLButtonElement): boolean {
    var arrayOfNumbers = this.arrayOfValues.map(Number);

    this.highlightNodes(arrayOfNumbers);
    return false;
  }

  private questionNodeTemplate(data: AdventureDecisionTree): string {
    let template = '';

    if (data.type != null) {
      template = `
        <div style="width: 100%; min-width: 130px" class="title">
        ${data.type === YesNoAnswer.Yes ? 'Yes' : 'No'}</div>`;
    }

    template += `
        <div >${data.question}</div>
        <input class="questionId" style="display: none" value="${data.adventureId}">`;

    return template;
  }

  highlightNodes(ids: number[]) {

    
    this.chartContainer.nativeElement.querySelectorAll('.questionId').forEach((item: any)  => {
      const val = Number(item.getAttribute('value'));
      if ( ids.indexOf(val) !== -1) {
        item.parentElement.style.backgroundColor = 'rgba(238,217,54,.5)';
      }
    });
  }

}
