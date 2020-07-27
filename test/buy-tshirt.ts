import { Selector } from 'testcafe';
import { expect } from 'chai';

fixture `Buy a t-shirt`
 .page `http://automationpractice.com/`;

test('then should be bought a t-shirt', async (t) => {
  await t
        .click(Selector('#header > div.nav > div > div > nav > div.header_user_info > a'))
        .typeText(Selector('#email'), 'srodriguezg@psl.com.co')
        .typeText(Selector('#passwd'), 'WorkshopTestcafe')
        .click(Selector('#SubmitLogin > span'))
        .click(Selector('#block_top_menu > ul > li:nth-child(3) > a'))
        .wait(3000)
        .hover(Selector('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img'))
        .click(Selector('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span'))
        .click(Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span'))
        .click(Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span'))
        .click(Selector('#center_column > form > p > button > span'))
        .click(Selector('#cgv'))
        .click(Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a'))
        .click(Selector('#cart_navigation > button > span'));

  expect(await Selector('#center_column > div > p > strong').innerText).to.equal('Your order on My Store is complete.');
});
