import Page from '../page';

class Resetpin extends Page {
    get btnStartLoginHalo() {
        return $('#platforms-halo');
    }
    get inputId() {
        return $('#accountId');
    }
    get inputPass() {
        return $('#password');
    }
    get btnLogin() {
        return $('[type="submit"]');
    }
    get continue() {
        return $('#halo-login-form-button-ok');
    }
    get acceptLogin() {
        return $('#otp-form-otp-button-ok');
    }
    get forgotPin() {
        return $('#otp-form-need-button-forgot');
    }
    get btnSave() {
        return $('#otp-form-set-button-ok');
    }
    get inputOtp() {
        return $('#otp-form-input-1');
    }
    get inputRetypeOtp() {
        return $('#otp-form-set-pin-input-1-1');
    }
    get titleVerifyLogin() {
        return $('#auth-wrapper-title');
    }
    get titleVerifyErr() {
        return $('#otp-form-need-error');
    }
    get btnCancel() {
        return $('#otp-form-otp-button-cancel');
    }
    async cickCancel() {
        return this.btnCancel.click();
    }
    async startLoginHalo() {
        return this.btnStartLoginHalo.click();
    }
    async enterRetype(retype: string) {
        return this.inputRetypeOtp.setValue(retype);
    }
    async inputIdAccount(id: string) {
        return this.inputId.setValue(id);
    }
    async inputPwd(pw: string) {
        return this.inputPass.setValue(pw);
    }
    async Login() {
        return this.btnLogin.click();
    }
    async btnContinue() {
        return this.continue.click();
    }
    async Save() {
        return this.btnSave.click();
    }
    async btnForgotPin() {
        return this.forgotPin.click();
    }
    async btnAccept() {
        return this.acceptLogin.click();
    }
    async enterOtp(otp: string) {
        await this.inputOtp.waitForDisplayed({ timeout: 10000 });
        return this.inputOtp.setValue(otp);
    }
}
export default new Resetpin();
