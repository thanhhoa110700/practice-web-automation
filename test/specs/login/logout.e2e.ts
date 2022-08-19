import Logout from '../../pageobjects/login/logout';

const VALID_ID = 'halome106@skyoi.tk';
const VALID_PW = 'admin@123';
const VALID_OTP = '123456';
const Titleinputnameavt = 'Điềm Tiểu';

describe('TEST LOG OUT', async () => {
    it('login web', async () => {
        await Logout.open('https://sb.halome.dev/welcome');
        await expect(Logout.btnStartLoginHalo).not.toBeDisabled();
        await Logout.startLoginHalo();
    });
    it('login button ', async () => {
        await Logout.InputIdAccount(VALID_ID);
        await Logout.InputPwd(VALID_PW);
        await Logout.Login();
        await Logout.Continue.waitForDisplayed({ timeout: 50000 });
        await Logout.btnContinue();
        await Logout.enterOtp(VALID_OTP);
        await Logout.btnAccept();
    });
    it('log out fail ', async () => {
        await Logout.clickAvt();
        await expect(Logout.titleVerifyAvt).toHaveText(Titleinputnameavt);
        await Logout.btnLogOut();
        await expect(Logout.logOut).not.toBeDisabled();
        await expect(Logout.titleVerifyLogout).toBeExisting();
        await Logout.cancelLogout();
    });
    it('log out close ', async () => {
        await Logout.clickAvt();
        await expect(Logout.titleVerifyAvt).toHaveText(Titleinputnameavt);
        await Logout.btnLogOut();
        await expect(Logout.titleVerifyLogout).toBeExisting();
        await Logout.close();
    });
    it('log out true ', async () => {
        await Logout.clickAvt();
        await expect(Logout.titleVerifyAvt).toHaveText(Titleinputnameavt);
        await Logout.btnLogOut();
        await Logout.btnLogOutOk();
    });
});
