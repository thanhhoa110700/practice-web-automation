import Anonymous from '../../pageobjects/login/anonymous';

const VALID_FIRST_TIME = Math.floor(Math.random() * 1000000000).toString();
const VALID_OTP = '000000';
const VALID_Name = 'BLackPink';
const Titleinputname = 'Nhập tên hiển thị';

describe('TEST ANONYMOUS LOGIN FIRST FLOWS', async () => {
    it('login first name', async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
        await expect(Anonymous.btnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.startAnonymous();
    });
    it('Login first time one ', async () => {
        await Anonymous.enterPhoneNumber(VALID_FIRST_TIME);
        await Anonymous.StartLogin();
        await Anonymous.inputOtp.waitForDisplayed({ timeout: 10000 });
        await Anonymous.enterOtp(VALID_OTP);
        await Anonymous.enterNameOne(VALID_Name);
        await expect(Anonymous.titleVerifyLogin).toHaveText(Titleinputname);
        await expect(Anonymous.Continue).not.toBeDisabled();
    });
    it('Login first time two', async () => {
        await Anonymous.btnContinue();
        await Anonymous.btnAvartar();
        await expect(Anonymous.btnAvt).toBeEnabled();
        await Anonymous.btnLogOut();
        await Anonymous.btnLogOutOk();
    });
});
