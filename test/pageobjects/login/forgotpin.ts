import Page from '../page';

class Forgotpin extends Page {
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
        return $('#otp-form-need-button-ok');
    }
    get acceptVerification() {
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
    get inputOtpVerify() {
        return $('#phone-verify-form-input-1');
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
    async clickCancel() {
        return this.btnCancel.click();
    }
    async startLoginHalo() {
        return this.btnStartLoginHalo.click();
    }
    async inputIdAccount(id: string) {
        return this.inputId.setValue(id);
    }
    async inputPwd(pw: string) {
        return this.inputPass.setValue(pw);
    }
    async login() {
        return this.btnLogin.click();
    }
    async btnContinue() {
        return this.continue.click();
    }
    async save() {
        return this.btnSave.click();
    }
    async btnForgotPin() {
        return this.forgotPin.click();
    }
    async btnAccept() {
        return this.acceptLogin.click();
    }
    async btnAcceptVerification() {
        return this.acceptVerification.click();
    }
    async enterOtp(otp: string) {
        return this.inputOtp.setValue(otp);
    }
    async enterOtpVerify(otp: string) {
        return this.inputOtpVerify.setValue(otp);
    }
}
export default new Forgotpin();
