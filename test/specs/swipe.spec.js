import swipePage from "../pageobjects/swipe.page"

describe('Tela Swipe', () => {

    beforeEach(async () => {
        await swipePage.abrirMenuSwipe();
    });

    it('Deve arrastar para baixo', async () => {
        await driver.swipe('down')
    });
    it('Deve arrastar para cima usando coordenadas', async () => {
        await driver.swipe('down') //desce primeiro
        await driver.pause(3000) //aguarda 3 segundos

        await driver.action('pointer')
            .move({ duration: 0, x: 548, y: 234 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 575, y: 1927 })
            .up({ button: 0 })
            .perform();
    });
    it('Deve arrastar pro lado', async () => {
        const carousel = $("-android uiautomator:new UiSelector().resourceId(\"__CAROUSEL_ITEM_0__\")");

        await browser.swipe({
            direction: 'left',
            duration: 6000,
            percent: 0.5,
            scrollableElement: carousel,
        })
    });
});