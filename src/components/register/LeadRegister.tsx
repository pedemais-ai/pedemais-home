import AppFormGroup from "@/components/shared/AppFormGroup";
import {Form} from "react-bootstrap";
import React, {Dispatch, SetStateAction} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {LeadRegistrationInputs, LeadRegistrationInputsSchema} from "@/components/register/types";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./lead.module.css";
import AppButton from "@/components/shared/AppButton";
import {API_URL} from "@/constants";

export default function LeadRegister({setLeadId} : {
    setLeadId : Dispatch<SetStateAction<number | undefined>>
}) {

    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors,
            isSubmitting
        },
        setError
    } = useForm<LeadRegistrationInputs>({
        resolver: zodResolver(LeadRegistrationInputsSchema),
    });

    const onSubmit: SubmitHandler<LeadRegistrationInputs> = async function (data) {
        try {

            const response = await fetch(`${API_URL}/api/lead/register`, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });


            if (response.ok) {
                const responseData = await response.json();

                setLeadId(responseData.id);
            } else {
                const errorData = await response.json();

                if (errorData?.error?.issues) {
                    const {issues} = errorData.error;

                    issues.forEach((issue: { path: any[]; message: any; }) => {
                        const field = issue.path[0];
                        const errorMessage = issue.message;

                        setError(field, {
                            type: 'custom',
                            message: errorMessage,
                        });
                    });
                }
            }
        } catch (error) {
            console.error('Error registering lead:', error);
        }
    };

    return (<>

        <Form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 bg-white"
            style={{borderRadius: '8px', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border: '1px solid #ccc'}}
        >
            <h5 className="mb-2 text-red custom-bold">Teste a PedeMais.Ai sem pagar nada</h5>
            <p className="lead mb-4">Faça o seu cadastro rapidinho ai</p>

            <AppFormGroup
                id="name"
                placeholder={"Seu nome"}
                className={"mb-2"}
                inputClassName={styles.formInput}
                type="text"
                register={register}
                errors={errors}
                required={true}
            />

            <AppFormGroup
                id="email"
                placeholder={"Seu e-mail"}
                className={"mb-2"}
                inputClassName={styles.formInput}
                type="text"
                register={register}
                errors={errors}
                required={true}
            />

            <AppFormGroup
                id="phone_number"
                placeholder={"Seu número de telefone"}
                className={"mb-2"}
                inputClassName={styles.formInput}
                type="text"
                mask="(99) 9999-9999"
                maskChar="_"
                register={register}
                errors={errors}
                required={true}
            />

            <AppFormGroup
                id="store_name"
                placeholder={"Nome do seu delivery"}
                className={"mb-2"}
                inputClassName={styles.formInput}
                type="text"
                register={register}
                errors={errors}
                required={true}
            />

            <Form.Group
                controlId="orders_per_day"
                className="mb-3"
            >
                <Form.Label
                    className={!!errors.orders_per_day?.message ? 'mb-2 is-invalid' : 'mb-2'}
                >
                    Quantos pedidos você recebe por dia? *
                </Form.Label>
                <div className="d-flex">
                    <Form.Check
                        type="radio"
                        label="Menos do que 10"
                        value={"0"}
                        isInvalid={!!errors.orders_per_day?.message}
                        defaultChecked={watch('orders_per_day') === "0"}
                        {...register('orders_per_day')}
                        style={{marginRight: '1rem'}}
                    />
                    <Form.Check
                        type="radio"
                        label="Mais do que 10"
                        value={"1"}
                        isInvalid={!!errors.orders_per_day?.message}
                        defaultChecked={watch('orders_per_day') === "1"}
                        {...register('orders_per_day')}
                        style={{marginRight: '1rem'}}
                    />
                </div>
                <Form.Control.Feedback type="invalid">
                    {errors.orders_per_day?.message}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
                controlId="has_computer"
                className="mb-3"
            >
                <Form.Label
                    className={!!errors.has_computer?.message ? 'mb-2 is-invalid' : 'mb-2'}
                >
                    Você possui computador ou notebook? *
                </Form.Label>
                <div className="d-flex">
                    <Form.Check
                        type="radio"
                        label="Sim"
                        value={"1"}
                        isInvalid={!!errors.has_computer?.message}
                        defaultChecked={watch('has_computer') === "1"}
                        {...register('has_computer')}
                        style={{marginRight: '1rem'}}
                    />
                    <Form.Check
                        type="radio"
                        label="Não"
                        value={"0"}
                        isInvalid={!!errors.has_computer?.message}
                        defaultChecked={watch('has_computer') === "0"}
                        {...register('has_computer')}
                        style={{marginRight: '1rem'}}
                    />
                </div>
                <Form.Control.Feedback type="invalid">
                    {errors.has_computer?.message}
                </Form.Control.Feedback>
            </Form.Group>
            <AppButton
                variant="primary"
                type="submit"
                size="lg"
                className="w-100 rounded"
                isSubmitting={isSubmitting}
            >
                Testar grátis por 7 dias
            </AppButton>
            <p className="mb-2 text-muted small">* promoção válida somente para novas contratações</p>
        </Form>

    </>);
}