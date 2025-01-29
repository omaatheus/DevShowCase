import Mixpanel from "mixpanel"

const idMixPanel: any = process.env.MIXPANEL

const mixPanelEvent = Mixpanel.init(idMixPanel)

export function trackServerEvent(eventName: string, properties: any){

    if(process.env.NODE_ENV === "development") {
        return
    }
    mixPanelEvent.track(eventName, properties)
}