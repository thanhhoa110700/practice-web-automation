import { VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/anonymous-1st';
import Anonymous from '../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS LOGIN FIRST FLOWS', async () => {
    before(async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
    });
    it('should enabled login first name', async () => {
        await expect(Anonymous.btnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.startAnonymous();
    });
    it('Login first time one enter display name', async () => {
        await Anonymous.enterPhoneNumber(VALID_SUCCESSFUL.firstnumber);
        await Anonymous.startLogin();
        await Anonymous.inputOtp.waitForDisplayed({ timeout: 10000 });
        await Anonymous.enterOtp(VALID_OTP.otp);
        await Anonymous.enterNameOne(VALID_SUCCESSFUL.name);
    });
    it('should enabled login button continue', async () => {
        await expect(Anonymous.titleVerifyLogin).toHaveText(VALID_SUCCESSFUL.titleinputname);
        await expect(Anonymous.continue).not.toBeDisabled();
        await Anonymous.btnContinue();
    });
    it('should logout', async () => {
        await Anonymous.btnAvartar();
        await Anonymous.btnLogOut();
        await Anonymous.btnLogOutOk();
        await expect(Anonymous.btnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.startAnonymous();
    });
    it('Logged in successfully', async () => {
        await Anonymous.enterPhoneNumber(VALID_SUCCESSFUL.phone);
        await Anonymous.startLogin();
        await Anonymous.sendTo();
        await Anonymous.enterOtp(VALID_OTP.otp);
    });
});
