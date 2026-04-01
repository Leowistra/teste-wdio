import formPage from '../pageobjects/forms.page'

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
        await formPage.selecionarOpção('This app is awesome')
        expect(await formPage.validarOpção()).toEqual('This app is awesome')
        await driver.pause(5000)
    });

    it.only('Deve trocar o botão entre on e off', async () => {
        //Trocar para On
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click()
        await driver.pause(5000)
        //Trocar para Off
        await browser.swipe ({
            direction: 'left',
            duration: 5000,
            percent: 0.1,
            scrollableElement: botaoOnOff,
        })
        await driver.pause(5000)
    });
});