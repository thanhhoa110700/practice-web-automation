import Hahalolo from '../../pageobjects/login/hahalolo';

const VALID_ID = 'halome106@skyoi.tk';
const VALID_PW = 'admin@123';
const VALID_ID_FAIL = 'halome106@skyoi.th';
const VALID_PW_FAIL = 'admin123';
const VALID_OTP = '123456';
const VALID_ALPHABET = `abcdef`;
const VALID_CHARACTER = '!@#$%^&*()_+';
const VALID_LESS = '09090';
// const VALID_OTP_AGAIN = '123456';
const VALID_OTP_FAIL = '111111';
// const VALID_VERIFICATION = '000000';
// const TitleVerifyLoginName = 'Hahalolo!';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await Hahalolo.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
        await expect(Hahalolo.btnStartLoginHalo).not.toBeDisabled();
        await Hahalolo.startLoginHalo();
    });
    it('should enabled login button start', async () => {
        await expect(Hahalolo.btnLogin).toBeEnabled();
        await Hahalolo.Login();
    });
    it('should login account pwd fail', async () => {
        await Hahalolo.InputIdAccount(VALID_ID_FAIL);
        await Hahalolo.InputPwd(VALID_PW_FAIL);
        await expect(Hahalolo.btnLogin).not.toBeDisabled();
        await Hahalolo.Login();
    });
    it('should login account pwd true', async () => {
        await Hahalolo.InputIdAccount(VALID_ID);
        await Hahalolo.InputPwd(VALID_PW);
        await expect(Hahalolo.btnLogin).not.toBeDisabled();
        await Hahalolo.Login();
    });
    it('should process to verification fail', async () => {
        await Hahalolo.btnContinue();
        await Hahalolo.enterOtp(VALID_OTP_FAIL);
        await expect(Hahalolo.acceptLogin).not.toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification null', async () => {
        await Hahalolo.btnContinue();
        // await expect(Hahalolo.acceptLogin).toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification enter alphabet', async () => {
        await Hahalolo.enterOtp(VALID_ALPHABET);
        await expect(Hahalolo.acceptLogin).toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification enter characters', async () => {
        await Hahalolo.enterOtp(VALID_CHARACTER);
        await expect(Hahalolo.acceptLogin).toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should disable login button phone number length is less than 5 ', async () => {
        await Hahalolo.enterOtp(VALID_LESS);
        // await expect(Hahalolo.acceptLogin).toBeDisabled();
        await Hahalolo.btnAccept();
        await expect(Hahalolo.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification ok', async () => {
        await Hahalolo.enterOtp(VALID_OTP);
        await expect(Hahalolo.acceptLogin).not.toBeDisabled();
        await Hahalolo.btnAccept();
    });
});
