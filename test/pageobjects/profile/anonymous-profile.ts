import Page from '../page';

class AnonymousProfile extends Page {
    get btnStartLoginAnonymous() {
        return $('#platforms-halome');
    }
    get inputPhoneNumber() {
        return $('#phone-login-form-input-phone');
    }
    get btnStart() {
        return $('#phone-login-form-button-ok');
    }
    get inputOtp() {
        return $('#phone-verify-form-input-1');
    }
    get btnSms() {
        return $('#phone-verify-form-button-request-sms');
    }
    get btnAvt() {
        return $('#auth-user-profile-button');
    }
    get btnAvtContent() {
        return $('#auth-user-content');
    }
    get btnPhone() {
        return $('#auth-user-content-phone-number');
    }
    get btnName() {
        return $('#auth-user-content-display-name');
    }
    get btnSex() {
        return $('#auth-user-content-gender');
    }
    get changeProfile() {
        return $('#auth-user-content-button-profile-update');
    }
    get btnLanguage() {
        return $('#auth-user-content-button-language-update');
    }
    get btnUpdate() {
        return $('[data-id="auth-user-content-button-version-update"]');
    }
    get disPlay() {
        return $('[data-id="auth-user-content-button-theme-update"]');
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
    get changeInformation() {
        return $('#modal-header-title');
    }
    get informationOk() {
        return $('#modal-button-ok');
    }
    get btnCloseInformation() {
        return $('#modal-wrapper-button-close');
    }
    async goBack() {
        return this.btnGoBack.click();
    }
    async closeInformation() {
        return this.btnCloseInformation.click();
    }
    async btnListBock() {
        return this.btnBock.click();
    }
    async btnSystemDisplay() {
        return this.btnSystem.click();
    }
    async btnDarkDisplay() {
        return this.btnDark.click();
    }
    async btnLightDisplay() {
        return this.btnLight.click();
    }
    async updateVersion() {
        return this.btnUpdate.click();
    }
    async btnDisPlay() {
        return this.disPlay.click();
    }
    async getPanel() {
        const panelId = await this.btnUpdate.getAttribute('aria-controls');
        return $('#' + panelId);
    }
    async startAnonymous() {
        return this.btnStartLoginAnonymous.click();
    }
    async enterPhoneNumber(phone: string) {
        return this.inputPhoneNumber.setValue(phone);
    }
    async startLogin() {
        return this.btnStart.click();
    }
    async enterOtp(otp: string) {
        await this.inputOtp.waitForDisplayed({ timeout: 10000 });
        return this.inputOtp.setValue(otp);
    }
    async sendTo() {
        await this.btnSms.waitForDisplayed({ timeout: 10000 });
        return this.btnSms.click();
    }
    async btnAvtAnonymous() {
        return this.btnAvt.click();
    }
    async btnChangeProfile() {
        return this.changeProfile.click();
    }
    async AvtContent() {
        return this.btnAvtContent.click();
    }
}

export default new AnonymousProfile();
