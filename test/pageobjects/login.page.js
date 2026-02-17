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
    get mensagemSucesso() {
        return $('id=android:id/message')
    }
    get mensagemErro() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]')
    }
    //Métodos / Ações

    async abrirMenu() {
        await this.menuLogin.click()
    }


}


export default new LoginPage()