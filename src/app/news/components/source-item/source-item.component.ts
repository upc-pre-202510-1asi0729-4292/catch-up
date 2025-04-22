import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Source} from '../../model/source.entity';
import {MatListItemAvatar, MatListItemLine} from '@angular/material/list';

@Component({
  selector: 'app-source-item',
  imports: [
    MatListItemAvatar,
    MatListItemLine
  ],
  templateUrl: './source-item.component.html',
  styleUrl: './source-item.component.css'
})
export class SourceItemComponent {
  @Input() source!: Source;
  @Output() sourceSelected: EventEmitter<Source> = new EventEmitter<Source>();

  onClick() {
    this.sourceSelected.emit(this.source);
  }

}
