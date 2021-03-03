import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarTarefaPage } from './mostrar-tarefa.page';

describe('MostrarTarefaPage', () => {
  let component: MostrarTarefaPage;
  let fixture: ComponentFixture<MostrarTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTarefaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
