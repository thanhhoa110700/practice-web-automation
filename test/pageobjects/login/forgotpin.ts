import Page from '../page';

class Forgotpin extends Page {
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
    get acceptLogin() {
        return $('#otp-form-need-button-ok');
    }
    get forgotPin() {
        return $('#otp-form-need-button-forgot');
    }
    get btnSave() {
        return $('#otp-form-set-button-ok');
    }
    get inputOtp() {
        return $('#phone-verify-form-input-1');
    }
    get titleVerifyLogin() {
        return $('#auth-wrapper-title');
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
    async save() {
        return this.btnSave.click();
    }
    async btnForgotPin() {
        return this.forgotPin.click();
    }
    async btnAccept() {
        return this.acceptLogin.click();
    }
    async enterOtp(otp: string) {
        return this.inputOtp.setValue(otp);
    }
}
export default new Forgotpin();
