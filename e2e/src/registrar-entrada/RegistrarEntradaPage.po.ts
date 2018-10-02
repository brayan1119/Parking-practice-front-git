import { browser, by, element } from 'protractor';

export class RegistrarEntradaPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getSelectTipoVehiculo() {
    return element(by.id('tipoVehiculo')).$('.form-control').isPresent();
  }

  ingresarVehiculo(placa: string) {
    element(by.id('placa')).sendKeys(placa);
    element(by.xpath('//select/option[1]')).click();
    element(by.id('cilindraje')).sendKeys('100');
    element(by.id('botonIngresar')).click();
    return element(by.className('toast-success toast ng-trigger ng-trigger-flyInOut')).getText();
  }

  salirVehiculo(placa: string) {
    element(by.id('placaBuscar')).sendKeys(placa);
    const data = element.all(by.css('table[id= vehiculosResult]')).all(by.css('tr td'));
    data.get(3).all(by.css('button')).click();
    browser.wait(data, 1000);
    return element(by.css('*[class=modal-body]')).getText().then(
      text => {
        return text.includes(placa);
      }
    );
  }
}
