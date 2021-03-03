import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTarefasPage } from './add-tarefas.page';

describe('AddTarefasPage', () => {
  let component: AddTarefasPage;
  let fixture: ComponentFixture<AddTarefasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTarefasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
