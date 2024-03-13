"use client";
import Layout from "@/components/Layout";
import MorePools from "@/components/MorePools";
import Detail from "@/components/Details";

import { useEffect, useState } from "react";

export default function Details() {
    return (
        <Layout>
            <div>
                <Detail></Detail>
                <MorePools></MorePools>
            </div>
        </Layout>
    );
}
