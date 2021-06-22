import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dilog-modal',
  templateUrl: './dilog-modal.component.html',
  styleUrls: ['./dilog-modal.component.scss']
})
export class DilogModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DilogModalComponent>) { }
  
  // @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  dismiss(): void {
  this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
