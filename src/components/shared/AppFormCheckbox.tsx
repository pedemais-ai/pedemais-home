import {Form} from "react-bootstrap";
import {FieldErrors, FieldPath, FieldValues} from "react-hook-form";
import * as React from "react";
import {FormCheckType} from "react-bootstrap/FormCheck";

export default function AppFormCheckbox<TFieldValues extends FieldValues = FieldValues>({id, label, type, register, errors, required, className}: {
    id: FieldPath<TFieldValues>;
    label?: React.ReactNode;
    type?: FormCheckType;
    register: any,
    errors: FieldErrors<TFieldValues> | any;
    required?: boolean,
    className?: string;
}) {
    return (
        <>
            <Form.Group className={className} controlId={id}>
                <Form.Check
                    type={type || 'checkbox'}
                    id={id}
                    label={label}
                    {...register(id, {required})}

                />
                {errors[id] && (
                    <Form.Text className="text-danger" role="alert">
                        {errors[id]?.message}
                    </Form.Text>
                )}
            </Form.Group>
        </>
    );
}