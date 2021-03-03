import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarMovimentacoesPage } from './mostrar-movimentacoes.page';

describe('MostrarMovimentacoesPage', () => {
  let component: MostrarMovimentacoesPage;
  let fixture: ComponentFixture<MostrarMovimentacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMovimentacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarMovimentacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
