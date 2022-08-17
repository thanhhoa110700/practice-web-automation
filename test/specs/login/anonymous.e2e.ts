import Anonymous from '../../pageobjects/login/anonymous';

const VALID_PHONE_NUMBER = '840327183626';
const VALID_ALPHABET = `abcdef`;
const VALID_CHARACTER = '!@#$%^&*()_+';
const VALID_OTP = '000000';
const VALID_OTP_FAIL = '111111';
const VALID_PHONE_LESS = '0909';
const VALID_NULL = '';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await Anonymous.open('https://sb.halome.dev/welcome');
        await expect(Anonymous.btnStartLoginAnonymous).not.toBeDisabled();
        await Anonymous.startAnonymous();
    });
    it('should process to verification step', async () => {
        await Anonymous.StartLogin();
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });

    it('should disable login button start ', async () => {
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).toBeDisabled();
    });
    it('should disable login button after enter alphabet ', async () => {
        await Anonymous.enterPhoneNumber(VALID_ALPHABET);
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should disable login button after enter characters ', async () => {
        await Anonymous.enterPhoneNumber(VALID_CHARACTER);
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should disable login button phone number length is less than 5 ', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_LESS);
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should disable login button phone number null ', async () => {
        await Anonymous.enterPhoneNumber(VALID_NULL);
        await Anonymous.StartLogin();
        await expect(Anonymous.btnStart).not.toBeEnabled();
    });
    it('should enable login button after enter valid phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await expect(Anonymous.btnStart).toBeEnabled();
        await Anonymous.StartLogin();
    });
    it('should back welcome page after click cancel button', async () => {
        await Anonymous.comeBack();
        await browser.dismissAlert();
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });
    it('should back welcome page after click ok button ', async () => {
        await Anonymous.comeBack();
        await browser.acceptAlert();
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification fail', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await Anonymous.StartLogin();
        await Anonymous.enterOtp(VALID_OTP_FAIL);
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });
    it('should process to verification ok', async () => {
        await Anonymous.SendTo();
        await Anonymous.enterOtp(VALID_OTP);
        await expect(Anonymous.titleVerifyLogin).toBeExisting();
    });
});
