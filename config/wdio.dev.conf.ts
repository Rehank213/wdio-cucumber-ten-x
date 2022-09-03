import { config as baseconfig } from '../wdio.conf'
export const config = Object.assign(baseconfig, {
    environment: "DEV",
    sauceURL: "https://saucelabs.com/"
})