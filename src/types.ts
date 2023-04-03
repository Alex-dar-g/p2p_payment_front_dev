export interface IError {
    message: string;
    errors: {};
}

export interface IOption {
    label: string;
    value: string;
}

export const enum StatusCard {
    success = 'Успех',
    frozen = 'Заморожено',
    payment = 'Оплата',
    cancellation = 'Отмена'
}

export const enum BankNames {
    gazprom = 'gazprom',
    raiffeisen = 'raiffeisen',
    akbars = 'akbars',
    vtb = 'vtb',
    tinkoff = 'tinkoff',
    alfa = 'alfa',
    sber = 'sber',
    sbp = 'sbp'
}

export type statusCard = StatusCard.frozen | StatusCard.payment | StatusCard.cancellation | StatusCard.success
export type bankNames =
    BankNames.akbars
    | BankNames.sbp
    | BankNames.alfa
    | BankNames.vtb
    | BankNames.gazprom
    | BankNames.raiffeisen
    | BankNames.tinkoff
    | BankNames.sber
