class LoginPage {
    //Seletores
    get menuLogin() {
        return $('~Login')
    }
    get campoEmail() {
        return $('~input-email')
    }
    get campoSenha() {
        return $('~input-password')
    }
    get botaoLogin() {
        return $('~button-LOGIN')
    }
    get mensagem() {
        return $('id=android:id/message')
    }
    get mensagemErro() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]')
    }
    //Métodos / Ações

    async abrirMenu() {
        await this.menuLogin.click()
    }

    async preencherLogin() {
        // TO DO: melhorar o método
        await this.campoEmail.setValue('teste@teste.com')
        await this.campoSenha.setValue('senha@123')
        await this.botaoLogin.click()
    }

    async mensagemAlerta() {
        return await this.mensagem.getText()
    }

}


export default new LoginPage()