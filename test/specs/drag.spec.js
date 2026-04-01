import dragPage from "../pageobjects/drag.page"

describe('Teste da tela DragDrop', () => {
    beforeEach(async () => {
        await dragPage.abrirmenuDrag();
        browser.pause(1000);
    });

    it('Deve arrastar a peça até o lugar certo', async () => {
        const peca_1 = await $("~drag-l1"); //Peça de Origem
        const destino_1 = await $("~drop-l1"); // Destino da peça

        await peca_1.dradAndDrop(destino_1);
        await broeser.pause(2000);        
    });

    it.skip("Deve montar o quebra cabeça completo com dragAnd Drop", async () =>{
        //Desafio: implementar o drag and drop para todas as peças



        //Resultado esperado só depois de completar o quebra cabeça
        const mensagem = await $('android=new UiSelector().texte("Congratilations")');
        await expect(mensagem).toBeDisplayed();
    })
});