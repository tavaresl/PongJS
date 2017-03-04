export class Component {
    constructor() {
        this._handlers = []
    }

    subscribe(event, callback) {
        this._handlers.push({ event : event, callback : callback })
    }

    unsubscribe(target) {
        this._handlers.filter(handler => {
            return handler.event != target.event
                    &&  handler.callback != target.callback
        })
    }

    _notify(event, options) {
        options = options || this
        this._handlers
            .filter(handler => handler.event == event)
            .forEach(handler => handler.callback(options))
    }
}
