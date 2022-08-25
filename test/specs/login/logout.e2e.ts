import { VALID_OTP, VALID_SUCCESSFUL } from '../../data/login/logout';
import Logout from '../../pageobjects/login/logout';

describe('TEST LOG OUT SUCCESSFUL', async () => {
    before(async () => {
        await Logout.open('https://sb.halome.dev/welcome');
        await expect(Logout.BtnStartLoginHalo).not.toBeDisabled();
        await Logout.StartLoginHalo();
        await Logout.InputIdAccount(VALID_SUCCESSFUL.id);
        await Logout.InputPwd(VALID_SUCCESSFUL.pass);
        await Logout.Login();
        await Logout.BtnContinue();
        await Logout.EnterOtp(VALID_OTP.otp);
        await Logout.BtnAccept();
    });
    it('should open personal profile after click avt ', async () => {
        await Logout.ClickAvt();
        await expect(Logout.TitleVerifyAvt).toHaveText(VALID_SUCCESSFUL.nameprofile);
    });
    it('should click button logout ', async () => {
        await Logout.BtnLogOut();
        await expect(Logout.LogOut).not.toBeDisabled();
    });
    it('should click button cancel ', async () => {
        await expect(Logout.LogOutCancel).not.toBeDisabled();
        await Logout.CancelLogout();
    });
    it('should click avt close ', async () => {
        await Logout.ClickAvt();
        await expect(Logout.TitleVerifyAvt).toHaveText(VALID_SUCCESSFUL.nameprofile);
        await Logout.BtnLogOut();
        await expect(Logout.TitleVerifyLogout).toBeExisting();
    });
    it('should click button close ', async () => {
        await expect(Logout.LogOutClose).not.toBeDisabled();
        await Logout.Close();
    });
    it('should click button logout successful ', async () => {
        await Logout.ClickAvt();
        await expect(Logout.TitleVerifyAvt).toHaveText(VALID_SUCCESSFUL.nameprofile);
        await Logout.BtnLogOut();
        await Logout.BtnLogOutOk();
    });
});
