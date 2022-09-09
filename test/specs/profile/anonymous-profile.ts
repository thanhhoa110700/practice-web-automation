import { VALID_OTP, VALID_SUCCESSFUL } from '../../data/profile/anonymous-profile';
import AnonymousProfile from '../../pageobjects/profile/anonymous-profile';

describe('TEST ANONYMOUS PROFILE LOGIN FLOWS', async () => {
    before(async () => {
        await AnonymousProfile.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
        await AnonymousProfile.startAnonymous();
        await AnonymousProfile.enterPhoneNumber(VALID_SUCCESSFUL.phone);
        await AnonymousProfile.startLogin();
        await AnonymousProfile.sendTo();
        await AnonymousProfile.enterOtp(VALID_OTP.otp);
        await AnonymousProfile.btnAvtAnonymous();
    });
    it('should check avt profile ', async () => {
        await expect(AnonymousProfile.btnAvtContent).toBeExisting();
        await expect(AnonymousProfile.btnAvtContent).not.toBeDisabled();
    });
    it('should check number phone ', async () => {
        await expect(AnonymousProfile.btnPhone).toBeExisting();
        await expect(AnonymousProfile.btnPhone).not.toBeDisabled();
    });
    it('should check display name ', async () => {
        await expect(AnonymousProfile.btnName).toBeExisting();
        await expect(AnonymousProfile.btnName).not.toBeDisabled();
    });
    it('should check sex ', async () => {
        await expect(AnonymousProfile.btnSex).toBeExisting();
        await expect(AnonymousProfile.btnSex).not.toBeDisabled();
    });
    it('should check change profile ', async () => {
        await expect(AnonymousProfile.changeProfile).toBeExisting();
        await expect(AnonymousProfile.changeProfile).not.toBeDisabled();
        await AnonymousProfile.btnChangeProfile();
    });
    it('should check change information ', async () => {
        await expect(AnonymousProfile.changeInformation).toBeExisting();
        await AnonymousProfile.closeInformation();
    });
    it('should check language ', async () => {
        await expect(AnonymousProfile.btnLanguage).toBeExisting();
        await expect(AnonymousProfile.btnLanguage).not.toBeDisabled();
    });
    it('should check version and update ', async () => {
        await expect(AnonymousProfile.btnUpdate).toBeExisting();
        await AnonymousProfile.updateVersion();
    });
    it('should check open version and update ', async () => {
        await expect(AnonymousProfile.getPanel()).toBeExisting();
    });
    it('should check enter display ', async () => {
        await expect(AnonymousProfile.disPlay).toBeExisting();
        await AnonymousProfile.btnDisPlay();
    });
    it('should check open light ', async () => {
        await expect(AnonymousProfile.btnLight).not.toBeDisabled();
        await AnonymousProfile.btnLightDisplay();
    });
    it('should check open dark ', async () => {
        await expect(AnonymousProfile.btnDark).not.toBeDisabled();
        await AnonymousProfile.btnDarkDisplay();
    });
    it('should check open system ', async () => {
        await expect(AnonymousProfile.btnSystem).not.toBeDisabled();
        await AnonymousProfile.btnSystemDisplay();
    });
    it('should check enter button block ', async () => {
        await expect(AnonymousProfile.btnBock).not.toBeDisabled();
        await AnonymousProfile.btnListBock();
    });
    it('should check list block ', async () => {
        await expect(AnonymousProfile.titleVerifyListBock).toBeExisting();
        await expect(AnonymousProfile.titleVerifyListBock).not.toBeDisabled();
    });
    it('should check block messages and calls profile ', async () => {
        await expect(AnonymousProfile.titleVerifyListBock).toBeExisting();
        await expect(AnonymousProfile.titleVerifyListBock).not.toBeDisabled();
    });
    it('should check block users profile ', async () => {
        await expect(AnonymousProfile.titleVerifyBockUser).toBeExisting();
        await expect(AnonymousProfile.titleVerifyBockUser).not.toBeDisabled();
    });
    it('should check back button in block list profile ', async () => {
        await expect(AnonymousProfile.btnGoBack).toBeExisting();
        await expect(AnonymousProfile.btnGoBack).not.toBeDisabled();
        await AnonymousProfile.goBack();
    });
    it('should check logout ', async () => {
        await expect(AnonymousProfile.titleVerifyLogOut).toBeExisting();
        await expect(AnonymousProfile.titleVerifyLogOut).not.toBeDisabled();
    });
});
