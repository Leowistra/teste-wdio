class FormPage {
    //Seletores
    get menuForm () {return $("accessibility id:Forms")}
    get campoTexto () {return $("accessibility id:text-input")}
    get labelResultado () {return $("accessibility id:input-text-result")}
    get dropdown () {return $("-android uiautomator:new UiSelector().resourceId(\"text_input\")")}
    get opcao () {return $("-android uiautomator:new UiSelector().text(\"Appium is awesome\")")}

    //Métodos

    async abrirMenuForm() {
        await this.menuForm.click()
    }
    async preencherTexto(texto) {
        await this.campoTexto.addValue(texto)
    }
    async validarTexto () {
        return await this.labelResultado.getText()
    }
    async selecionarOpção () {
        //APRIMORAR O MÉTODO
        await this.dropdown.click()
        await this.opcao.click()
    }
    async validarOpção () {
        return await this.dropdown.getText()
    }
}

export default new FormPage()