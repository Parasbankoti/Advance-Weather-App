"use client";
import CityPicker from "@/Components/CityPicker";
import { Card, Divider, Metric, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#394F68] p-10 flex flex-col
      justify-center items-center
      "
      >
        <Card>
          <Text className="text-6xl font-bold text-center">Weather AI</Text>
          <Subtitle className="text-xl text-center">
            Powered by OpenAI, NextJS, Tailwind CSS and Tremor 2.0
          </Subtitle>
          <Divider />
          <Card className="bg-gradient-to-br from-[#394F68] to-[#394F68]">
            <CityPicker />
          </Card>
        </Card>
      </div>
    </>
  );
}
