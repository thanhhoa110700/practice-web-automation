import { INVALID_FAIL, VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/hahalolo';
import Hahalolo from '../../pageobjects/login/hahalolo';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        await Hahalolo.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
    });
    it('should disable login button', async () => {
        await expect(Hahalolo.btnStartLoginHalo).not.toBeDisabled();
        await Hahalolo.startLoginHalo();
    });
    it('should enabled login button start', async () => {
        await expect(Hahalolo.btnLogin).toBeEnabled();
        await Hahalolo.Login();
    });
    it('should login account pwd fail', async () => {
        await Hahalolo.inputIdAccount(VALID_SUCCESSFUL.id);
        await Hahalolo.inputPwd(INVALID_FAIL.passfail);
        await expect(Hahalolo.btnLogin).not.toBeDisabled();
        await Hahalolo.Login();
    });
    it('should login account pwd true', async () => {
        await Hahalolo.inputIdAccount(VALID_SUCCESSFUL.id);
        await Hahalolo.inputPwd(VALID_SUCCESSFUL.pass);
        await expect(Hahalolo.btnLogin).not.toBeDisabled();
        await Hahalolo.Login();
    });
    it('should process to verification fail', async () => {
        await Hahalolo.btnContinue();
        await Hahalolo.enterOtp(VALID_OTP.otpfail);
        await expect(Hahalolo.acceptLogin).not.toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification null', async () => {
        await expect(Hahalolo.acceptLogin).toBeDisabled();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification enter alphabet', async () => {
        await Hahalolo.enterOtp(INVALID_FAIL.alphabet);
        await expect(Hahalolo.acceptLogin).toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification enter characters', async () => {
        await Hahalolo.enterOtp(INVALID_FAIL.character);
        await expect(Hahalolo.acceptLogin).toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should disable login button phone number length is less than 5 ', async () => {
        await Hahalolo.enterOtp(INVALID_FAIL.lengthnumber);
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification ok', async () => {
        await Hahalolo.enterOtp(VALID_OTP.otp);
        await expect(Hahalolo.acceptLogin).not.toBeDisabled();
        await Hahalolo.btnAccept();
    });
});
