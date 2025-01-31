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
    toolbarSticky: true,
    // toolbarButtons: ['fontFamily', '|', 'fontSize', '|', 'paragraphFormat', '|', 'bold', 'italic', 'underline', 'undo', 'redo', 'codeView'],
    fontFamilySelection: true,
    fontSizeSelection: true,
    paragraphFormatSelection: true,
    imageUploadURL: 'http://localhost:3000/upload_image',
    events : {
      'froalaEditor.contentChanged' : function() {
        console.log('Content updated!');
      }
    }
  };
}
