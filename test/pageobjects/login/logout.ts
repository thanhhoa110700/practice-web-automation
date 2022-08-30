import Page from '../page';

class Logout extends Page {
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
        return $('.MuiButton-label');
    }
    get continue() {
        return $('#halo-login-form-button-ok');
    }
    get inputOtp() {
        return $('#phone-verify-form-input-1');
    }
    get acceptLogin() {
        return $('#otp-form-need-button-ok');
    }
    get btnAvt() {
        return $('#auth-user-profile-button');
    }
    get logOut() {
        return $('[data-id="auth-user-content-button-logout"]');
    }
    get logOutOK() {
        return $('#modal-button-ok');
    }
    get logOutCancel() {
        return $('#modal-button-cancel');
    }
    get logOutClose() {
        return $('#modal-wrapper-button-close');
    }
    get titleVerifyAvt() {
        return $('#auth-user-content-display-name');
    }
    get titleVerifyLogout() {
        return $('#modal-header-title');
    }
    async Close() {
        return this.logOutClose.click();
    }
    async cancelLogout() {
        return this.logOutCancel.click();
    }
    async btnLogOutOk() {
        return this.logOutOK.click();
    }
    async btnLogOut() {
        return this.logOut.click();
    }
    async clickAvt() {
        return this.btnAvt.click();
    }
    async btnAccept() {
        return this.acceptLogin.click();
    }
    async enterOtp(otp: string) {
        return this.inputOtp.setValue(otp);
    }
    async btnContinue() {
        return this.continue.click();
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
    async Login() {
        return this.btnLogin.click();
    }
}
export default new Logout();
