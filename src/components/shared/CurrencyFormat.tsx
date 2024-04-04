import CurrencyFormat from "react-currency-format";

export default function Currency({amount, prefix, decimalScale, fixedDecimalScale}: {
    amount: number;
    decimalScale?: number;
    prefix?: string;
    fixedDecimalScale?: boolean;
}) {
    return (
        <CurrencyFormat
            value={amount}
            displayType={'text'}
            decimalSeparator={','}
            thousandSeparator={'.'}
            prefix={prefix || ''}
            decimalScale={decimalScale || 2}
            fixedDecimalScale={fixedDecimalScale}
        />
    );
}