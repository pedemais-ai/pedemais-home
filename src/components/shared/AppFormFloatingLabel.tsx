import {Form} from "react-bootstrap";
import InputMask, {Props as InputMaskProps} from "react-input-mask";

interface ExtendedProps extends Omit<InputMaskProps, 'mask'> {
    mask?: string | Array<(string | RegExp)> | undefined;
}

export interface AppFormControlProps {
    id: string;
    label?: string;
    placeholder?: string;
    type?: string;
    register: any;
    errors: any;
    required: boolean;
    value?: string | string[] | number;
    className?: string | undefined;
}

export default function AppFormFloatingLabel({id, label, placeholder, type, register, errors, required, mask, maskChar, value, className}: AppFormControlProps & ExtendedProps) {
    return (
        <Form.FloatingLabel className={className} label={label}>
            {mask ? (
                <InputMask
                    mask={mask}
                    maskChar={maskChar}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={errors[id] ? "form-control is-invalid" : "form-control"}
                    aria-invalid={errors[id] ? "true" : "false"}
                    {...register(id, {required})}
                />
            ) : (
                <Form.Control
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={errors[id] ? "is-invalid" : ""}
                    aria-invalid={errors[id] ? "true" : "false"}
                    {...register(id, {required})}
                />
            )}
            {errors[id] && (
                <Form.Text className="text-danger" role="alert">
                    {errors[id]?.message}
                </Form.Text>
            )}
        </Form.FloatingLabel>
    );
}