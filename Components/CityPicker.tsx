"use client";
import { Country } from "country-state-city";
import React from "react";
import Select from "react-select";

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = () => {
  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default CityPicker;
