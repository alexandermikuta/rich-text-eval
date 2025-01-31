import { Component } from '@angular/core';
import { FroalaEditorComponent } from '../froala-editor/froala-editor.component';
import { HlmTabsComponent, HlmTabsContentDirective, HlmTabsListComponent, HlmTabsTriggerDirective } from '@spartan-ng/ui-tabs-helm';
import { TipTapEditorComponent } from "../tiptap-editor/tiptap-editor.component";

@Component({
  imports: [FroalaEditorComponent, HlmTabsComponent, HlmTabsContentDirective, HlmTabsListComponent, HlmTabsTriggerDirective, TipTapEditorComponent],
  selector: 'rich-text-evaluation-eval-grid',
  template: `
  <main class="main h-screen">
    <div class="content h-screen w-full'">
      <hlm-tabs tab='froala' class='block h-screen w-100'>
          <hlm-tabs-list class='w-full grid grid-cols-2' aria-label='tabs example'>
            <button hlmTabsTrigger='froala'>froala</button>
            <button hlmTabsTrigger='tiptap'>tipTap</button>
          </hlm-tabs-list>
          <div hlmTabsContent='froala'>
            <rich-text-evaluation-froala-editor [editorContent]="'test <b>bold </b>text...'"></rich-text-evaluation-froala-editor>
          </div>
          <div hlmTabsContent='tiptap'>
            <rich-text-evaluation-tiptap-editor [editorContent]="'test text...'"></rich-text-evaluation-tiptap-editor>
          </div>

        </hlm-tabs>
    </div>
  </main>
  `,
})
export class EvalGridComponent {
  public inputText = '';

}
