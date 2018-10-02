import { RegistrarEntradaPage } from './RegistrarEntradaPage.po';

describe('RegistrarEntradaPage', () => {
  let page: RegistrarEntradaPage;
  let placa: string;

  afterAll(() => {
    page = new RegistrarEntradaPage();
    page.navigateTo();
    expect(page.salirVehiculo(placa)).toBeTruthy();
  });

  beforeEach(() => {
    page = new RegistrarEntradaPage();
  });

  it('mostrar tipo vehiculo', () => {
    page.navigateTo();
    expect(page.getSelectTipoVehiculo()).toBeTruthy();
  });

  it('ingresar vehiculo', () => {
    page.navigateTo();
    expect(page.ingresarVehiculo(placa)).toEqual('Operación realizada exitosamente');
  });

  beforeAll(() => {
    placa = 'KXA11A';
  });
});
