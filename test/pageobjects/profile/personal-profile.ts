import Page from '../page';

class Profile extends Page {
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
    get inputOtp() {
        return $('#phone-verify-form-input-1');
    }
    get acceptLogin() {
        return $('#otp-form-need-button-ok');
    }
    get titleVerifyName() {
        return $('#auth-user-content-display-name');
    }
    get titleVerifySex() {
        return $('#auth-user-content-gender');
    }
    get titleVerifyLanguage() {
        return $('#auth-user-content-button-language-update');
    }
    get btnUpdate() {
        return $('[data-id="auth-user-content-button-version-update"]');
    }
    get disPlay() {
        return $('[data-id="auth-user-content-button-theme-update"]');
    }
    get btnAvt() {
        return $('#auth-user-profile-button');
    }
    get btnLight() {
        return $('[data-id="auth-user-content-button-theme-update-light"]');
    }
    get btnDark() {
        return $('[data-id="auth-user-content-button-theme-update-dark"]');
    }
    get btnSystem() {
        return $('[data-id="auth-user-content-button-theme-update-auto"]');
    }
    get btnPageHalo() {
        return $('[data-id="auth-user-content-button-halo-profile-navigate"]');
    }
    get btnBock() {
        return $('[data-id="auth-user-content-button-blocks"]');
    }
    get btnGoBack() {
        return $('#auth-user-content-block-button-go-back');
    }
    get titleVerifyLogOut() {
        return $('[data-id="auth-user-content-button-logout"]');
    }
    get titleVerifyListBock() {
        return $('#auth-user-content-block-title');
    }
    get titleVerifyBockUser() {
        return $('#auth-user-content-block-button-users');
    }
    async goBack() {
        return this.btnGoBack.click();
    }
    async updateVersion() {
        return this.btnUpdate.click();
    }
    async btnListBock() {
        return this.btnBock.click();
    }
    async btnPageHHLL() {
        return this.btnPageHalo.click();
    }
    async btnSystemDisplay() {
        return this.btnSystem.click();
    }
    async btnDarkDisplay() {
        return this.btnDark.click();
    }
    async btnAvtFroFile() {
        return this.btnAvt.click();
    }
    async btnLightDisplay() {
        return this.btnLight.click();
    }
    async btnDisPlay() {
        return this.disPlay.click();
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
    async btnAccept() {
        return this.acceptLogin.click();
    }
    async enterOtp(otp: string) {
        return this.inputOtp.setValue(otp);
    }
    async getPanel() {
        const panelId = await this.btnUpdate.getAttribute('aria-controls');
        return $('#' + panelId);
    }
}

export default new Profile();
