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
        <div style={{
            borderRadius: "8px",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            border: "1px solid #ccc"
        }}>
            <h5 className="mb-2 text-red custom-bold">PedeMais.Ai</h5>
            <p className="lead mb-4">Obrigado por se cadastrar! Entraremos em contato em breve</p>
        </div>
    </>);

    // return <LeadPassword leadId={leadId}/>;
}