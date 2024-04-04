"use client";

import React, {useState} from "react";
import LeadRegister from "@/components/register/LeadRegister";
import LeadPassword from "@/components/register/LeadPassword";

export default function Lead() {

    const [leadId, setLeadId] = useState<number>();

    if (!leadId) {
        return <LeadRegister setLeadId={setLeadId}/>
    }

    return <LeadPassword leadId={leadId}/>;
}