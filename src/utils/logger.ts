import { Debugger } from 'ts-debug'

class Logger {

    private readonly logger = new Debugger(console, true, '[S+]: ')
    private readonly styles = [
        'background: steelblue',
        'background: green',
        'background: darkorange',
        'background: darkred'
    ]

    public log(str: string, obj?: any): void {
        this.logger.log('%c' + str, this.styles[0], obj)
    }

    public info(str: string, obj?: any): void {
        this.logger.info('%c' + str, this.styles[1], obj)
    }

    public warn(str: string, obj?: any): void {
        this.logger.warn('%c' + str, this.styles[2], obj)
    }

    public error(str: string, obj?: any): void {
        this.logger.error('%c' + str, this.styles[3], obj)
    }
}

export const logger = new Logger()