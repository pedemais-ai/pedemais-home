import {Form} from "react-bootstrap";
import InputMask, {Props as InputMaskProps} from "react-input-mask";
import React from "react";

// import CurrencyFormat from "react-currency-format";

interface ExtendedProps extends Omit<InputMaskProps, 'mask'> {
    mask?: string | Array<(string | RegExp)> | undefined;
}

export interface AppFormControlProps {
    id: string;
    value?: any;
    label?: string;
    register?: any;
    errors?: any;
    className?: string | undefined;
    inputClassName?: string | undefined;
    isMoney?: boolean;
}

export default function AppFormGroup({id, label, placeholder, type, register, errors, required, mask, maskChar, value, className, inputClassName, isMoney, onChange}: AppFormControlProps & ExtendedProps) {

    // if (isMoney === true) {
    //     return (
    //         <Form.Group controlId={id} className={className}>
    //             {label ? <Form.Label>{label}</Form.Label> : <></>}
    //
    //             <CurrencyFormat
    //                 decimalSeparator={','}
    //                 thousandSeparator={'.'}
    //                 className={"form-control"}
    //                 prefix={'R$'}
    //                 decimalScale={2}
    //                 fixedDecimalScale={true}
    //                 onChange={onChange}
    //             />
    //         </Form.Group>
    //         );
    // }

    if (register) {
        return (
            <Form.Group controlId={id} className={className}>
                {label ? <Form.Label>{label}</Form.Label> : <></>}
                {mask ? (
                    <InputMask
                        mask={mask}
                        maskChar={maskChar}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        className={errors[id] ? "form-control is-invalid " + inputClassName : "form-control " + inputClassName}
                        aria-invalid={errors[id] ? "true" : "false"}
                        onChange={onChange}
                        {...register(id, {required})}
                    />
                ) : (
                    <Form.Control
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        className={inputClassName}
                        aria-invalid={errors[id] ? "true" : "false"}
                        onChange={onChange}
                        isInvalid={!!errors[id]}
                        {...register(id, {required})}
                    />
                )}
                {errors[id] && (
                    <Form.Control.Feedback type="invalid">
                        {errors[id]?.message}
                    </Form.Control.Feedback>
                )}
            </Form.Group>
        );
    }

    return (
        <Form.Group controlId={id} className={className}>
            {label ? <Form.Label>{label}</Form.Label> : <></>}
            {mask ? (
                <InputMask
                    mask={mask}
                    maskChar={maskChar}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={"form-control " + inputClassName}
                    aria-invalid={"false"}
                    onChange={onChange}
                />
            ) : (
                <Form.Control
                    type={type}
                    value={value}
                    className={inputClassName}
                    placeholder={placeholder}
                    aria-invalid={"false"}
                    onChange={onChange}
                />
            )}
        </Form.Group>
    );
}