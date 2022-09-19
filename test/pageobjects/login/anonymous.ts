import Page from '../page';

class Anonymous extends Page {
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
    get btnBack() {
        return $('#auth-wrapper-go-back');
    }
    get btnSms() {
        return $('#phone-verify-form-button-request-sms');
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
    get titleVerifyLogin() {
        return $('#auth-wrapper-title');
    }
    get firstTime() {
        return $('#phone-login-form-input');
    }
    get Continue() {
        return $('#phone-login-form-button-ok');
    }
    async btnContinue() {
        return this.Continue.click();
    }
    async enterNameOne(name: string) {
        return this.firstTime.setValue(name);
    }
    async btnLogOutOk() {
        return this.logOutOK.click();
    }
    async btnLogOut() {
        return this.logOut.click();
    }
    async btnAvartar() {
        return this.btnAvt.click();
    }
    async SendTo() {
        return this.btnSms.click();
    }
    async startAnonymous() {
        return this.btnStartLoginAnonymous.click();
    }
    async enterPhoneNumber(phone: string) {
        return this.inputPhoneNumber.setValue(phone);
    }
    async StartLogin() {
        return this.btnStart.click();
    }
    async enterOtp(otp: string) {
        return this.inputOtp.setValue(otp);
    }
    async comeBack() {
        return this.btnBack.click();
    }
}

export default new Anonymous();
