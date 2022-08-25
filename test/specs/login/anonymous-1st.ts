import { VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/anonymous';
import Anonymous from '../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS LOGIN FIRST FLOWS', async () => {
    before(async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
    });
    it('should enabled login first name', async () => {
        await expect(Anonymous.BtnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.StartAnonymous();
    });
    it('Login first time one enter display name', async () => {
        await Anonymous.EnterPhoneNumber(VALID_SUCCESSFUL.firstnumber);
        await Anonymous.StartLogin();
        await Anonymous.InputOtp.waitForDisplayed({ timeout: 10000 });
        await Anonymous.EnterOtp(VALID_OTP.otp);
        await Anonymous.EnterNameOne(VALID_SUCCESSFUL.name);
    });
    it('should enabled login button continue', async () => {
        await expect(Anonymous.TitleVerifyLogin).toHaveText(VALID_SUCCESSFUL.titleinputname);
        await expect(Anonymous.Continue).not.toBeDisabled();
        await Anonymous.BtnContinue();
    });
    it('Logged in successfully', async () => {
        await Anonymous.EnterPhoneNumber(VALID_SUCCESSFUL.phone);
        await Anonymous.StartLogin();
        await Anonymous.SendTo();
        await Anonymous.EnterOtp(VALID_OTP.otp);
    });
});
