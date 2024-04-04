import {Button, Spinner} from "react-bootstrap";
import {ReactNode} from "react";
import {ButtonProps} from "react-bootstrap/Button";

export default function AppButton({children, isSubmitting, name, type, size, variant, className, disabled, onClick}: {
    children: ReactNode,
    isSubmitting?: boolean,
} & ButtonProps) {
    return (
        <Button
            variant={variant || "primary"}
            type={type || "button"}
            disabled={disabled || isSubmitting}
            name={name}
            size={size}
            className={className}
            onClick={onClick}
        >
            {isSubmitting ? <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            /> : children}
        </Button>
    );
}