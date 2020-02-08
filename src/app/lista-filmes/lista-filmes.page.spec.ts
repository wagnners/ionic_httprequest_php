import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaFilmesPage } from './lista-filmes.page';

describe('ListaFilmesPage', () => {
  let component: ListaFilmesPage;
  let fixture: ComponentFixture<ListaFilmesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFilmesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaFilmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
