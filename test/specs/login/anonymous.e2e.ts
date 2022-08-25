import { INVALID_FAIL, VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/anonymous';
import Anonymous from '../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
    });
    it('should disable login button', async () => {
        await expect(Anonymous.BtnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.StartAnonymous();
        await expect(browser).toHaveUrl(Anonymous.getUrl());
    });
    it('should open anonymous login page', async () => {
        await expect(Anonymous.TitleVerifyLogin).toBeExisting();
        await Anonymous.StartLogin();
    });

    it('should disable login button start ', async () => {
        await Anonymous.StartLogin();
        await expect(Anonymous.BtnStart).toBeDisabled();
    });
    it('should disable login button after enter space ', async () => {
        await Anonymous.EnterPhoneNumber(INVALID_FAIL.space);
        await Anonymous.StartLogin();
        await expect(Anonymous.BtnStart).not.toBeEnabled();
    });
    it('should disable login button after enter alphabet ', async () => {
        await Anonymous.EnterPhoneNumber(INVALID_FAIL.alphabet);
        await Anonymous.StartLogin();
        await expect(Anonymous.BtnStart).not.toBeEnabled();
    });
    it(' should disable login button after enter special characters ', async () => {
        await Anonymous.EnterPhoneNumber(INVALID_FAIL.character);
        await Anonymous.StartLogin();
        await expect(Anonymous.BtnStart).not.toBeEnabled();
    });
    it('should disable login button phone number length is less than 5 ', async () => {
        await Anonymous.EnterPhoneNumber(INVALID_FAIL.lengthnumber);
        await Anonymous.StartLogin();
        await expect(Anonymous.BtnStart).not.toBeEnabled();
    });
    it('should disable login button phone number null ', async () => {
        await Anonymous.EnterPhoneNumber(INVALID_FAIL.null);
        await Anonymous.StartLogin();
        await expect(Anonymous.BtnStart).not.toBeEnabled();
    });
    it('should enable login button after enter valid phone number', async () => {
        await Anonymous.EnterPhoneNumber(VALID_SUCCESSFUL.phone);
        await expect(Anonymous.BtnStart).toBeEnabled();
        await Anonymous.StartLogin();
    });
    it('should back welcome page after click cancel button', async () => {
        await Anonymous.ComeBack();
        await browser.dismissAlert();
        await expect(Anonymous.TitleVerifyLogin).toBeExisting();
    });
    it('should back welcome page after click ok button ', async () => {
        await Anonymous.ComeBack();
        await browser.acceptAlert();
        await expect(Anonymous.TitleVerifyLogin).toBeExisting();
    });
    it('Check the existence of the error message', async () => {
        await Anonymous.EnterPhoneNumber(VALID_SUCCESSFUL.phone);
        await Anonymous.StartLogin();
        await Anonymous.EnterOtp(VALID_OTP.otpfail);
        await expect(Anonymous.TitleVerifyLogin).toBeExisting();
    });
    it('should process to verification ok', async () => {
        await Anonymous.SendTo();
        await Anonymous.EnterOtp(VALID_OTP.otp);
        await expect(Anonymous.TitleVerifyLogin).toBeExisting();
    });
});
