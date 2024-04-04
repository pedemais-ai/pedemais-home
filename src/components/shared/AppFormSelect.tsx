import {Form} from "react-bootstrap";
import {FieldErrors, FieldPath, FieldValues} from "react-hook-form";
import * as React from "react";

interface SelectInputProps<TFieldValues extends FieldValues = FieldValues> {
    id: FieldPath<TFieldValues>;
    label?: React.ReactNode;
    options: { value: string; label: string }[];
    register: any;
    errors: FieldErrors<TFieldValues> | any;
    required?: boolean;
    className?: string;
    emptyOption?: string;
}

export default function AppFormSelect<TFieldValues extends FieldValues = FieldValues>(
    {id, label, options, register, errors, required, className, emptyOption}: SelectInputProps<TFieldValues>
) {
    return (
        <Form.Group className={className} controlId={id}>
            {label && <Form.Label id={`label-${id}`}>{label}</Form.Label>}
            <Form.Select
                className={errors[id] ? "is-invalid" : ""}
                aria-invalid={errors[id] ? "true" : "false"}
                {...register(id, {required})}
            >
                {emptyOption && (
                    <option value="">{emptyOption}</option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
            {errors[id] && (
                <Form.Text className="text-danger" role="alert">
                    {errors[id]?.message}
                </Form.Text>
            )}
        </Form.Group>
    );
}
