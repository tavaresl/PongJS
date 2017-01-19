export interface Observable {
    subscribe(event: string, callback: Function) : void
    unsubscribe(event: string, callback: Function) : void
    notify(event: string) : void
}