"use client";

import AppFormGroup from "@/components/shared/AppFormGroup";
import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {LeadPasswordInputs, LeadPasswordInputsSchema, LeadRegistrationInputs, LeadRegistrationInputsSchema} from "@/components/register/types";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./lead.module.css";
import AppButton from "@/components/shared/AppButton";
import {API_URL} from "@/constants";
export default function LeadPassword({leadId}: {
    leadId: number
}) {

    const [successMessage, setSuccessMessage] = useState<string>();
    const [errorMessage, setErrorMessage] = useState<string>();

    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors,
            isSubmitting
        },
        setError
    } = useForm<LeadPasswordInputs>({
        resolver: zodResolver(LeadPasswordInputsSchema),
    });

    const onSubmit: SubmitHandler<LeadPasswordInputs> = async function (data) {

        try {

            const response = await fetch(`${API_URL}/api/lead/register/finish`, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    id : leadId
                }),
            });


            if (response.ok) {
                setSuccessMessage('Ok. Redirecionando...');

                const responseData = await response.json();

                window.location.href = `https://app.pedemais.ai?userId=${responseData.id}`;
            } else {
                const errorData = await response.json();

                setErrorMessage(errorData.error);

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
            <p className="lead mb-4">Antes de prosseguirmos, crie sua senha</p>

            {successMessage ? <div className="alert alert-success">{successMessage}</div> : <></>}
            {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : <></>}

            <AppFormGroup
                id="password"
                placeholder={"Crie sua senha"}
                className={"mb-2"}
                inputClassName={styles.formInput}
                type="password"
                register={register}
                errors={errors}
                required={true}
            />

            <AppFormGroup
                id="confirm_password"
                placeholder={"Confirmação de senha"}
                className={"mb-2"}
                inputClassName={styles.formInput}
                type="password"
                register={register}
                errors={errors}
                required={true}
            />

            <AppButton
                variant="primary"
                type="submit"
                size="lg"
                className="w-100 rounded"
                isSubmitting={isSubmitting}
            >
                Confirmar
            </AppButton>
        </Form>
    </>);
}