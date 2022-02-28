import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  providers: [Gamelogic]
})
export class StatisticsComponent implements OnInit {

  constructor(public game:Gamelogic) { }
  information! : string;

  ngOnInit(): void {
  }

  startGame():void{
    this.game.gameStart();
    const currentPlayer ='Jugador de turno actual: ' + this.game.currentTurn;
    const information = document.querySelector('.current-status');
  }

  async clickSubfield(subfield:any): Promise<void> {
    if(this.game.gameStatus ===1 ){
        const position = subfield.currentTarget.getAttribute('position');

        this.game.setField(position, this.game.currentTurn);
        const color = this.game.getPlayerColorClass();
        subfield.currentTarget.classlist.add(color);

      // await this.game.checkGameEndWinner();

      await this.game.checkGameEndWinner().then(( (end : boolean) =>{
        if (this.game.gameStatus === 0 && end ) {
          //information.innerHTML = 'Winner' + this.game.currentTurn;
        }
     }));

       await this.game.checkGameEndFull().then(( (end : boolean) =>{
          if (this.game.gameStatus === 0 && end ) {
            //information.innerHTML = 'Empate';
          }
       }));

        this.game.changePlayer();

      if(this.game.gameStatus === 1){
        const currentPlayer ='Jugador de turno actual: ' + this.game.currentTurn;
        //information.innerHTML = currentPlayer;
      }
    }
  }

}
