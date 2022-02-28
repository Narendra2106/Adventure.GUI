import { Component, OnInit } from '@angular/core';
import {YesNoAnswer} from '../../model/YesNoAnswer.enum';
import {Adventure} from '../../model/Adventure';



import {MyAdventureService} from '../../services/my-adventure.service';
import {Router,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-first-adventure',
  templateUrl: './first-adventure.component.html',
  styleUrls: ['./first-adventure.component.css']
})
export class FirstAdventureComponent implements OnInit {

  public currentQuestion: Adventure;
  public isButtonVisible = true;
  public givenAns : number[] = [];



  constructor(private readonly adventureService: MyAdventureService,
              private readonly router: Router) {

              }

ngOnInit() {
  this.adventureService.getAdventure(0).subscribe(
      response => {
          this.currentQuestion = response;
          debugger;
      }
  );
}
  onQuestionAnswered(answer: YesNoAnswer) {
    const nextQuestionId = answer === YesNoAnswer.Yes
    ? this.currentQuestion.ifYesNextQuestionId
    : this.currentQuestion.ifNoNextQuestionId;

    this.givenAns.push(nextQuestionId);

    const queryParams: any = {};

  this.adventureService.getAdventure(nextQuestionId).subscribe(
    response => {
      if (!response.ifYesNextQuestionId && !response.ifNoNextQuestionId) {

        const arrayOfValuess = this.givenAns;
        queryParams.myArray = JSON.stringify(arrayOfValuess);
        const navigationExtras: NavigationExtras = {
          queryParams
        };
        this.router.navigate(['tree'], navigationExtras );
      }else{
        this.currentQuestion = response;

      }
  }
);
  }
}

