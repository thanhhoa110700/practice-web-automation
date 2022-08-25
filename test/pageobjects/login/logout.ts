import Page from '../page';

class Logout extends Page {
    get BtnStartLoginHalo() {
        return $('#platforms-halo');
    }
    get InputId() {
        return $('#accountId');
    }
    get InputPass() {
        return $('#password');
    }
    get BtnLogin() {
        return $('.MuiButton-label');
    }
    get Continue() {
        return $('#halo-login-form-button-ok');
    }
    get InputOtp() {
        return $('#phone-verify-form-input-1');
    }
    get AcceptLogin() {
        return $('#otp-form-need-button-ok');
    }
    get BtnAvt() {
        return $('#auth-user-profile-button');
    }
    get LogOut() {
        return $('[data-id="auth-user-content-button-logout"]');
    }
    get LogOutOK() {
        return $('#modal-button-ok');
    }
    get LogOutCancel() {
        return $('#modal-button-cancel');
    }
    get LogOutClose() {
        return $('#modal-wrapper-button-close');
    }
    get TitleVerifyAvt() {
        return $('#auth-user-content-display-name');
    }
    get TitleVerifyLogout() {
        return $('#modal-header-title');
    }
    async Close() {
        return this.LogOutClose.click();
    }
    async CancelLogout() {
        return this.LogOutCancel.click();
    }
    async BtnLogOutOk() {
        return this.LogOutOK.click();
    }
    async BtnLogOut() {
        return this.LogOut.click();
    }
    async ClickAvt() {
        return this.BtnAvt.click();
    }
    async BtnAccept() {
        return this.AcceptLogin.click();
    }
    async EnterOtp(otp: string) {
        return this.InputOtp.setValue(otp);
    }
    async BtnContinue() {
        return this.Continue.click();
    }
    async StartLoginHalo() {
        return this.BtnStartLoginHalo.click();
    }
    async InputIdAccount(id: string) {
        return this.InputId.setValue(id);
    }
    async InputPwd(pw: string) {
        return this.InputPass.setValue(pw);
    }
    async Login() {
        return this.BtnLogin.click();
    }
}
export default new Logout();
