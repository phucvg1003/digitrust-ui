"use client";
import ApexChart from "@/components/ApexChartjs";
import Layout from "@/components/Layout";
import ApexCharts from "apexcharts";
import dynamic from "next/dynamic";

const Detail = dynamic(() => import("@/components/Details"), { ssr: false });
const MorePools = dynamic(() => import("@/components/MorePools"), {
    ssr: false,
});

export default function Details() {
    return (
        <Layout>
            <Detail></Detail>
            <MorePools></MorePools>
        </Layout>
    );
}
