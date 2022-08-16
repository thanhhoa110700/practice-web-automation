import Anonymous from '../../pageobjects/login/anonymous';

const VALID_PHONE_NUMBER = '840327183626';
const VALID_ALPHABET = `abcdef`;
const VALID_CHARACTER = '!@#$%^&*()_+';
const VALID_OTP = '000000';
const VALID_OTP_FAIL = '111111';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
        await expect(Anonymous.btnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.startAnonymous();
    });

    it('login disabled phone number', async () => {
        await expect(Anonymous.btnStart).toBeDisabled();
        await Anonymous.StartLogin();
    });
    it('should process to verification step', async () => {
        await Anonymous.StartLogin();
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });
    it('login enable phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('Login alphabet ', async () => {
        await Anonymous.enterPhoneNumber(VALID_ALPHABET);
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('Login characters ', async () => {
        await Anonymous.enterPhoneNumber(VALID_CHARACTER);
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('Login back ok', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await Anonymous.StartLogin();
        await Anonymous.comeBack();
        browser.dismissAlert();
    });
    it('Login back cancel ', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await Anonymous.StartLogin();
        await Anonymous.comeBack();
        browser.acceptAlert();
    });
    it('Login otp fail ', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await Anonymous.StartLogin();
        await Anonymous.enterOtp(VALID_OTP_FAIL);
        await Anonymous.comeBack();
        browser.acceptAlert();
    });
    it('Login otp true ', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await Anonymous.StartLogin();
        await Anonymous.enterOtp(VALID_OTP);
        await Anonymous.SendTo();
        await Anonymous.enterOtp(VALID_OTP);
        await Anonymous.btnAvartar();
        await Anonymous.btnLogOut();
        await Anonymous.btnLogOutOk();
    });
});
