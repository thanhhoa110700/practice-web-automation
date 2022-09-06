import { VALID_OTP, VALID_SUCCESSFUL } from '../../data/profile/personal-profile';
import Profile from '../../pageobjects/profile/personal-profile';

describe('TEST profile LOGIN FLOWS', async () => {
    before(async () => {
        await Profile.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
        await Profile.startLoginHalo();
        await Profile.inputIdAccount(VALID_SUCCESSFUL.id);
        await Profile.inputPwd(VALID_SUCCESSFUL.pass);
        await Profile.login();
        await Profile.btnContinue();
        await Profile.enterOtp(VALID_OTP.otp);
        await Profile.btnAccept();
    });
    it('should check profile picture ', async () => {
        await expect(Profile.btnAvt).not.toBeDisabled();
        await Profile.btnAvtFroFile();
    });
    it('should name exist ', async () => {
        await expect(Profile.titleVerifyName).toBeExisting();
    });
    it('should sex exist ', async () => {
        await expect(Profile.titleVerifySex).toBeExisting();
    });
    it('should language exist ', async () => {
        await expect(Profile.titleVerifyLanguage).toBeExisting();
    });
    it('should update exist ', async () => {
        await expect(Profile.btnUpdate).toBeExisting();
        await Profile.updateVersion();
    });
    it('should check open version beta ', async () => {
        await expect(Profile.getPanel()).toBeExisting();
    });
    it('should check enter display ', async () => {
        await expect(Profile.disPlay).not.toBeDisabled();
        await Profile.btnDisPlay();
    });
    it('should check enter light display ', async () => {
        await expect(Profile.btnLight).not.toBeDisabled();
        await Profile.btnLightDisplay();
    });
    it('should check enter dark display ', async () => {
        await expect(Profile.btnDark).not.toBeDisabled();
        await Profile.btnDarkDisplay();
    });
    it('should check enter system display ', async () => {
        await expect(Profile.btnSystem).not.toBeDisabled();
        await Profile.btnSystemDisplay();
    });
    it('should check enter button haha lolo ', async () => {
        await expect(Profile.btnPageHalo).not.toBeDisabled();
        await Profile.btnPageHHLL();
    });
    it('should check enter button block ', async () => {
        await expect(Profile.btnBock).not.toBeDisabled();
        await Profile.btnListBock();
    });
    it('should check list block ', async () => {
        await expect(Profile.titleVerifyListBock).toBeExisting();
        await expect(Profile.titleVerifyListBock).not.toBeDisabled();
    });
    it('should check block messages and calls profile ', async () => {
        await expect(Profile.titleVerifyListBock).toBeExisting();
        await expect(Profile.titleVerifyListBock).not.toBeDisabled();
    });
    it('should check block users profile ', async () => {
        await expect(Profile.titleVerifyBockUser).toBeExisting();
        await expect(Profile.titleVerifyBockUser).not.toBeDisabled();
    });
    it('should check back button in block list profile ', async () => {
        await expect(Profile.btnGoBack).toBeExisting();
        await expect(Profile.btnGoBack).not.toBeDisabled();
        await Profile.goBack();
    });
    it('should check log out enter button profile ', async () => {
        await expect(Profile.titleVerifyLogOut).toBeExisting();
        await expect(Profile.titleVerifyLogOut).not.toBeDisabled();
    });
});
