import Forgotpin from '../../pageobjects/login/forgotpin';

const VALID_ID = 'halome106@skyoi.tk';
const VALID_PW = 'admin@123';
const VALID_OTP_FAIL = '111111';
const VALID_VERIFICATION = '000000';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await Forgotpin.open('https://sb.halome.dev/welcome');
        await expect(Forgotpin.btnStartLoginHalo).not.toBeDisabled();
        await Forgotpin.startLoginHalo();
    });
    it('should enabled login button start', async () => {
        await expect(Forgotpin.btnLogin).toBeEnabled();
        await Forgotpin.Login();
    });
    it('should login account pwd true', async () => {
        await Forgotpin.InputIdAccount(VALID_ID);
        await Forgotpin.InputPwd(VALID_PW);
        await expect(Forgotpin.btnLogin).not.toBeDisabled();
        await Forgotpin.Login();
    });
    it('should process to verification fail', async () => {
        await Forgotpin.btnContinue();
        await Forgotpin.enterOtp(VALID_OTP_FAIL);
        await expect(Forgotpin.acceptLogin).not.toBeDisabled();
        await Forgotpin.btnAccept();
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification forgot cancel', async () => {
        await Forgotpin.btnForgotPin();
        await Forgotpin.enterOtp(VALID_VERIFICATION);
        await expect(Forgotpin.acceptLogin).not.toBeDisabled();
        await Forgotpin.btnAccept();
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification forgot', async () => {
        await Forgotpin.btnForgotPin();
        await Forgotpin.enterOtp(VALID_VERIFICATION);
        await expect(Forgotpin.acceptLogin).not.toBeDisabled();
        await Forgotpin.btnAccept();
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
    });
});
