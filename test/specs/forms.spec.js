import formPage from '../pageobjects/forms.spec'

describe('Funcionalidade: Teste de Formulário', () => {

    beforeEach(async () => {
        formPage.abrirMenuForm()
    });

    it('Deve validar o preenchimento com texto correto', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')
        await driver.pause(5000)
    });

    it('Deve escolher e validar dropdown', async () => {
        await formPage.selecionarOpção()
        expect(await formPage.validarOpção()).toEqual('Appium is awesome')
        await driver.pause(5000)
    });

    it.only('Deve trocar o botão entre on e off', async () => {
        //Trocar para On
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click()
        await driver.pause(5000)
        //Trocar para Off
        await driver.action('pointer')
            .move({ duration: 0, x: 226, y: 1283 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 162, y: 1283 })
            .up({ button: 0 })
            .perform();
        await driver.pause(5000)
    });
});