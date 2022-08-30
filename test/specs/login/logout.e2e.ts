import { VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/logout';
import Logout from '../../pageobjects/login/logout';

describe('TEST LOG OUT SUCCESSFUL', async () => {
    before(async () => {
        await Logout.open('https://sb.halome.dev/welcome');
        browser.maximizeWindow();
        await expect(Logout.btnStartLoginHalo).not.toBeDisabled();
        await Logout.startLoginHalo();
        await Logout.inputIdAccount(VALID_SUCCESSFUL.id);
        await Logout.inputPwd(VALID_SUCCESSFUL.pass);
        await Logout.Login();
        await Logout.btnContinue();
        await Logout.enterOtp(VALID_OTP.otp);
        await Logout.btnAccept();
    });
    it('should open personal profile after click avt ', async () => {
        await Logout.clickAvt();
        await expect(Logout.titleVerifyAvt).toHaveText(VALID_SUCCESSFUL.nameprofile);
    });
    it('should click button logout ', async () => {
        await Logout.btnLogOut();
        await expect(Logout.logOut).not.toBeDisabled();
    });
    it('should click button cancel ', async () => {
        await expect(Logout.logOutCancel).not.toBeDisabled();
        await Logout.cancelLogout();
    });
    it('should click avt close ', async () => {
        await Logout.clickAvt();
        await expect(Logout.titleVerifyAvt).toHaveText(VALID_SUCCESSFUL.nameprofile);
        await Logout.btnLogOut();
        await expect(Logout.titleVerifyLogout).toBeExisting();
    });
    it('should click button close ', async () => {
        await expect(Logout.logOutClose).not.toBeDisabled();
        await Logout.Close();
    });
    it('should click button logout successful ', async () => {
        await Logout.clickAvt();
        await expect(Logout.titleVerifyAvt).toHaveText(VALID_SUCCESSFUL.nameprofile);
        await Logout.btnLogOut();
        await Logout.btnLogOutOk();
    });
});
