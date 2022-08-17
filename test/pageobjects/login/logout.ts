import Page from '../page';

class Logout extends Page {
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
        return $('.MuiButton-label');
    }
    get Continue() {
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
    get titleVerifyAvt() {
        return $('#auth-user-content-display-name');
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
        return this.Continue.click();
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
}
export default new Logout();
