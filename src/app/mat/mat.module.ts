import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list'
import { MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

const mat = [MatGridListModule , MatIconModule , MatTableModule , MatDialogModule]
@NgModule({
  declarations: [],
  imports: [
    mat
  ],
  exports : [mat]
})
export class MatModule { }
