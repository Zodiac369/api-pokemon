import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePokemonComponent } from './formulaire-pokemon.component';

describe('FormulairePokemonComponent', () => {
  let component: FormulairePokemonComponent;
  let fixture: ComponentFixture<FormulairePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulairePokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulairePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
