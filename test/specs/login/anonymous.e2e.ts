import { INVALID_FAIL, VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/anonymous';
import Anonymous from '../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
    });
    it('should disable login button', async () => {
        await expect(Anonymous.btnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.startAnonymous();
        await expect(browser).toHaveUrl(Anonymous.getUrl());
    });
    it('should open anonymous login page', async () => {
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
        await Anonymous.startLogin();
    });

    it('should disable login button start ', async () => {
        await Anonymous.startLogin();
        await expect(Anonymous.btnStart).toBeDisabled();
    });
    it('should disable login button after enter space ', async () => {
        await Anonymous.enterPhoneNumber(INVALID_FAIL.space);
        await Anonymous.startLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should disable login button after enter alphabet ', async () => {
        await Anonymous.enterPhoneNumber(INVALID_FAIL.alphabet);
        await Anonymous.startLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it(' should disable login button after enter special characters ', async () => {
        await Anonymous.enterPhoneNumber(INVALID_FAIL.character);
        await Anonymous.startLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should disable login button phone number length is less than 5 ', async () => {
        await Anonymous.enterPhoneNumber(INVALID_FAIL.lengthnumber);
        await Anonymous.startLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should disable login button phone number null ', async () => {
        await Anonymous.enterPhoneNumber(INVALID_FAIL.null);
        await Anonymous.startLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should enable login button after enter valid phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_SUCCESSFUL.phone);
        await expect(Anonymous.btnStart).toBeEnabled();
        await Anonymous.startLogin();
    });
    it('should enable login button after enter valid phone number', async () => {
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
        await Anonymous.enterOtp(VALID_OTP.otp);
    });
    it('should back welcome page after click cancel button', async () => {
        await Anonymous.comeBack();
        await browser.dismissAlert();
    });
    it('should back welcome page after click ok button ', async () => {
        await Anonymous.comeBack();
        await browser.acceptAlert();
    });
    it('Check the existence of the error message', async () => {
        await Anonymous.enterPhoneNumber(VALID_SUCCESSFUL.phone);
        await Anonymous.startLogin();
        await Anonymous.enterOtp(VALID_OTP.otpfail);
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification ok', async () => {
        await Anonymous.sendTo();
        await Anonymous.enterOtp(VALID_OTP.otp);
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });
});
