import loginPage from "../pageobjects/login.page";

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', async () => {
        await loginPage.abrirMenu()
        await $('~input-email').setValue('teste@teste.com')
        await $('~input-password').setValue('senha@123')
        await $('~button-LOGIN').click()
        expect(await $('id=android:id/message')).toBeDisplayed()
        await driver.acceptAlert()
    });

    it('Deve falhar ao fazer login com email inválido', async () => {
        await loginPage.abrirMenu()
        await $('~input-email').setValue('teste@teste')
        await $('~input-password').setValue('senha@123')
        await $('~button-LOGIN').click()
        const mensagem = await $('//android.widget.TextView[@text="Please enter a valid email address"]')
        expect(mensagem).toBeDisplayed()
        await driver.pause(5000)
    });

});