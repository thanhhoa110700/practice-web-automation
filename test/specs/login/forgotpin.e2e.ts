import { INVALID_FAIL, VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/forgot';
import Forgotpin from '../../pageobjects/login/forgotpin';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        await Forgotpin.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
        await Forgotpin.startLoginHalo();
        await Forgotpin.inputIdAccount(VALID_SUCCESSFUL.id);
        await Forgotpin.inputPwd(VALID_SUCCESSFUL.pass);
        await Forgotpin.login();
        await Forgotpin.btnContinue();
    });
    it('should disable accept button', async () => {
        await Forgotpin.btnAccept();
        await expect(Forgotpin.acceptLogin).toBeDisabled();
    });
    it('should enabled accept open err show ', async () => {
        await Forgotpin.enterOtpVerify(VALID_OTP.otpfail);
        await Forgotpin.btnAccept();
        await expect(Forgotpin.titleVerifyErr).toBeExisting();
    });
    it('should enabled enter forgot ', async () => {
        await expect(Forgotpin.forgotPin).not.toBeDisabled();
        await Forgotpin.btnForgotPin();
    });
    it('should disabled button accept verification fail ', async () => {
        await expect(Forgotpin.acceptVerification).toBeDisabled();
        await Forgotpin.enterOtp(VALID_OTP.otpfail);
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
        await Forgotpin.btnAcceptVerification();
    });
    it('should disabled button accept verification alphabet ', async () => {
        await expect(Forgotpin.acceptVerification).toBeDisabled();
        await Forgotpin.enterOtp(INVALID_FAIL.alphabet);
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
        await Forgotpin.btnAcceptVerification();
    });
    it('should disabled button accept verification character ', async () => {
        await expect(Forgotpin.acceptVerification).toBeDisabled();
        await Forgotpin.enterOtp(INVALID_FAIL.character);
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
        await Forgotpin.btnAcceptVerification();
    });
    it('should disabled button accept verification lengthnumber ', async () => {
        await expect(Forgotpin.acceptVerification).toBeDisabled();
        await Forgotpin.enterOtp(INVALID_FAIL.lengthnumber);
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
        await Forgotpin.btnAcceptVerification();
    });
    it('should disabled button accept verification null ', async () => {
        await expect(Forgotpin.acceptVerification).toBeDisabled();
        await Forgotpin.enterOtp(INVALID_FAIL.null);
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
        await Forgotpin.btnAcceptVerification();
    });
    it('should disabled button accept verification space ', async () => {
        await expect(Forgotpin.acceptVerification).toBeDisabled();
        await Forgotpin.enterOtp(INVALID_FAIL.space);
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
        await Forgotpin.btnAcceptVerification();
    });
    it('should disabled button accept verification ok ', async () => {
        await Forgotpin.enterOtp(VALID_OTP.otp);
        await expect(Forgotpin.titleVerifyLogin).toBeExisting();
    });
});
