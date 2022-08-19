import Page from '../page';

class Hahalolo extends Page {
    get btnStartLoginHalo() {
        return $('#platforms-halo');
    }
    get InputId() {
        return $('#accountId');
    }
    get InputPass() {
        return $('#password');
    }
    get btnLogin() {
        return $('[type="submit"]');
    }
    get Continue() {
        return $('#halo-login-form-button-ok');
    }
    get inputOtp() {
        return $('#phone-verify-form-input-1');
    }
    get inputOtp2() {
        return $('#otp-form-set-pin-input-2-1');
    }
    get acceptLogin() {
        return $('#otp-form-need-button-ok');
    }
    get titleVerifyLogin() {
        return $('#auth-wrapper-title');
    }
    get forgotPin() {
        return $('#otp-form-need-button-forgot');
    }
    get btnSave() {
        return $('#otp-form-set-button-ok');
    }
    async save() {
        return this.btnSave.click();
    }
    async btnForgotPin() {
        return this.forgotPin.click();
    }
    async startLoginHalo() {
        return this.btnStartLoginHalo.click();
    }
    async InputIdAccount(id: string) {
        return this.InputId.setValue(id);
    }
    async InputPwd(pw: string) {
        return this.InputPass.setValue(pw);
    }
    async Login() {
        return this.btnLogin.click();
    }
    async btnContinue() {
        return this.Continue.click();
    }
    async btnAccept() {
        return this.acceptLogin.click();
    }
    async enterOtp(otp: string) {
        return this.inputOtp.setValue(otp);
    }
    async Otptwo(otptwo: string) {
        return this.inputOtp2.setValue(otptwo);
    }
}

export default new Hahalolo();
