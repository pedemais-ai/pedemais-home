"use client";

import React, {useState} from "react";
import LeadRegister from "@/components/register/LeadRegister";
// import LeadPassword from "@/components/register/LeadPassword";

export default function Lead() {

    const [leadId, setLeadId] = useState<number>();

    if (!leadId) {
        return <LeadRegister setLeadId={setLeadId}/>
    }

    return (<>
        <h5 className="mb-2 text-red custom-bold">PedeMais.Ai</h5>
        <p className="lead mb-4">Obrigado por se cadastrar! Entraremos em contato em breve</p>
    </>);

    // return <LeadPassword leadId={leadId}/>;
}