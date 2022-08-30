import { INVALID_FAIL, VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/resetpin';
import Resetpin from '../../pageobjects/login/resetpin';

describe('TEST RESET LOGIN FLOWS', async () => {
    before(async () => {
        await Resetpin.open('https://sb.halome.dev/welcome');
        await browser.maximizeWindow();
        await Resetpin.startLoginHalo();
        await Resetpin.inputIdAccount(VALID_SUCCESSFUL.id);
        await Resetpin.inputPwd(VALID_SUCCESSFUL.pass);
        await Resetpin.Login();
        await Resetpin.btnContinue();
        await Resetpin.btnForgotPin();
        await Resetpin.enterOtp(VALID_OTP.otp);
        await Resetpin.btnAccept();
    });
    it('should disable save button', async () => {
        await expect(Resetpin.titleVerifyLogin).toBeExisting();
        await expect(Resetpin.btnSave).not.toBeEnabled();
    });
    it('should disable login button after enter alphabet ', async () => {
        await Resetpin.enterRetype(INVALID_FAIL.alphabet);
        await Resetpin.Save();
        await expect(Resetpin.btnSave).not.toBeEnabled();
    });
    it('should disable login button after enter character ', async () => {
        await Resetpin.enterRetype(INVALID_FAIL.character);
        await Resetpin.Save();
        await expect(Resetpin.btnSave).not.toBeEnabled();
    });
    it('should disable login button after enter length number ', async () => {
        await Resetpin.enterRetype(INVALID_FAIL.lengthnumber);
        await Resetpin.Save();
        await expect(Resetpin.btnSave).not.toBeEnabled();
    });
    it('should disable login button after enter null ', async () => {
        await Resetpin.enterRetype(INVALID_FAIL.null);
        await Resetpin.Save();
        await expect(Resetpin.btnSave).not.toBeEnabled();
    });
    it('should disable login button after enter space ', async () => {
        await Resetpin.enterRetype(INVALID_FAIL.space);
        await Resetpin.Save();
        await expect(Resetpin.btnSave).not.toBeEnabled();
    });
    it('should login button after enter save ', async () => {
        await Resetpin.enterRetype(VALID_OTP.verification);
        await expect(Resetpin.btnSave).toBeEnabled();
        await Resetpin.Save();
    });
});
