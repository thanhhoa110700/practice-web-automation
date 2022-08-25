export default class Page {
    getUrl() {
        return 'https://sb.halome.dev/auth/anonymous';
    }

    open(path: string) {
        return browser.url(`${path}`);
    }
}
