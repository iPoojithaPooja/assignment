import { Component, OnInit } from '@angular/core';
import { AsideticService } from '../asidetic.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DilogModalComponent} from '../dilog-modal/dilog-modal.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  stage : string = "Populate"
  displayedColumns: string[] = ['id', 'name', 'salary', 'age'];
  dataSource = [];

  constructor(private aiditic : AsideticService , public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  actAccordToStage(stage : any){
    if(stage == "Populate"){
      this.stage = "clear";
      this.aiditic.getData().subscribe(res =>{
        if(res &&  res.status){
          this.dataSource = res.data
        }
      
      })

    }
    else if(stage == "clear"){
      this.stage = "reset";
      this.dataSource = [];
    }
    else{
      this.openDilog();
     
    }
  }
  openDilog(){
    const dialogRef = this.dialog.open(DilogModalComponent, { 
      data: {}
    });
    this.stage = "Populate";
    dialogRef.afterClosed().subscribe(result => {
      this.stage = "Populate";
    });
  }
}
