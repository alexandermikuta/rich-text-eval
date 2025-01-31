import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { TiptapEditorDirective } from 'ngx-tiptap';

@Component({
  selector: 'rich-text-evaluation-tiptap-editor',
  imports: [CommonModule, FormsModule, TiptapEditorDirective],
  template: `
    <tiptap-editor [editor]="editor" [(ngModel)]="editorContent"></tiptap-editor>
  `,
})

export class TipTapEditorComponent implements OnDestroy {
  @Input() editorContent = 'default text';

  public editor = new Editor({
    extensions: [StarterKit],
  });

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
