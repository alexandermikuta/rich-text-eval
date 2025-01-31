import { Component, Input } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';

@Component({
  selector: 'rich-text-evaluation-froala-editor',
  imports: [FroalaEditorModule, FroalaViewModule],
  template: `
    <div [froalaEditor]="options" [(froalaModel)]="editorContent"></div>
  `,
})

export class FroalaEditorComponent{
  @Input() editorContent = 'default text';

  private froalaEditor: unknown;
  public options: object = {
    placeholderText: 'Edit Your Content Here!',
    events : {
      'froalaEditor.contentChanged' : function() {
        console.log('Content updated!');
      }
    }
  };
}
