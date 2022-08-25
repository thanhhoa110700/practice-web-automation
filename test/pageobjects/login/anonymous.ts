import Page from '../page';

class Anonymous extends Page {
    get BtnStartLoginAnonymous() {
        return $('#platforms-halome');
    }
    get InputPhoneNumber() {
        return $('#phone-login-form-input-phone');
    }
    get BtnStart() {
        return $('#phone-login-form-button-ok');
    }
    get InputOtp() {
        return $('#phone-verify-form-input-1');
    }
    get BtnBack() {
        return $('#auth-wrapper-go-back');
    }
    get BtnSms() {
        return $('#phone-verify-form-button-request-sms');
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
    get TitleVerifyLogin() {
        return $('#auth-wrapper-title');
    }
    get FirstTime() {
        return $('#phone-login-form-input');
    }
    get Continue() {
        return $('#phone-login-form-button-ok');
    }
    async BtnContinue() {
        return this.Continue.click();
    }
    async EnterNameOne(name: string) {
        return this.FirstTime.setValue(name);
    }
    async BtnLogOutOk() {
        return this.LogOutOK.click();
    }
    async BtnLogOut() {
        return this.LogOut.click();
    }
    async BtnAvartar() {
        return this.BtnAvt.click();
    }
    async SendTo() {
        return this.BtnSms.click();
    }
    async StartAnonymous() {
        return this.BtnStartLoginAnonymous.click();
    }
    async EnterPhoneNumber(phone: string) {
        return this.InputPhoneNumber.setValue(phone);
    }
    async StartLogin() {
        return this.BtnStart.click();
    }
    async EnterOtp(otp: string) {
        return this.InputOtp.setValue(otp);
    }
    async ComeBack() {
        return this.BtnBack.click();
    }
}

export default new Anonymous();
