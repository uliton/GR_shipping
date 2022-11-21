import React, { useState } from "react";
import { CalcHeader } from "../CalcHeader";
import { CalcBoxCustoms } from "../CalcBoxCustoms";
import { CalcBoxDelivery } from "../CalcBoxDelivery";
import { CalcBoxTotalCost } from "../CalcBoxTotalCost";
import { auctionTaxCalculation, clearanceCalculation, deliveryPriceCalculation, exciseCalculation, insuranceCalculation, portDelivery, releaseContainerAndBroker, stateDeliveryCalculation, totalCalculation } from "../../framework/calculator";

export const Calculator: React.FC = () => {
  const [engine, setEngine] = useState<string>('');
  const [auction, setAuction] = useState<string>('');
  const [lotYear, setLotYear] = useState<string>('');
  const [lotCost, setLotCost] = useState<string>('');
  const [lotEngineVolume, setLotEngineVolume] = useState<string>('');
  const auction_fee: number = auctionTaxCalculation(lotCost, auction) || 0;
  const excise: number = exciseCalculation(lotYear, lotCost, auction_fee, engine, lotEngineVolume) || 0;
  const [insurancePercent, setInsurancePercent] = useState('');
  const insurance: number = insuranceCalculation(lotCost, auction_fee, insurancePercent) || 0;

  const [category, setCategory] = useState("first");
  const [county, setCounty] = useState('');
  const [map, setMap] = useState("usa");
  const [port, setPort] = useState('');
  const localStateDelivery: number = stateDeliveryCalculation(auction, map, county) || 0;
  const toPortDelivery: number = portDelivery(category, county, port) || 0;
  const containerAndBroker: number = releaseContainerAndBroker(localStateDelivery, toPortDelivery) || 0;
  const documentsDelivery = 32;
  const complex = 990;

  const totalCustomsPrice: number = (Number(lotCost) + auction_fee + excise + insurance) || 0;
  const totalDeliveryPrice: number = deliveryPriceCalculation(localStateDelivery, toPortDelivery, containerAndBroker, documentsDelivery, complex) || 0;
  const clearance: number = clearanceCalculation(lotYear, lotCost, auction_fee, localStateDelivery, toPortDelivery) || 0;
  const informService = 600;
  const total: number = totalCalculation(totalCustomsPrice, totalDeliveryPrice, clearance, informService) || 0;
  
  return (
    <div className="calculator">
      <CalcHeader />

      <CalcBoxCustoms
        lotYear={lotYear}
        lotCost={lotCost}
        lotEngineVolume={lotEngineVolume}
        auction_fee={auction_fee.toFixed(2)}
        excise={excise.toFixed(2)}
        insurance={insurance.toFixed(2)}
        totalCustomsPrice={totalCustomsPrice.toFixed(2)}
        setEngine={setEngine}
        setAuction={setAuction}
        setLotYear={setLotYear}
        setLotCost={setLotCost}
        setLotEngineVolume={setLotEngineVolume}
        setInsurancePercent={setInsurancePercent}
        />

      <CalcBoxDelivery
        category={category}
        map={map}
        port={port}
        localStateDelivery={localStateDelivery.toFixed(2)}
        toPortDelivery={toPortDelivery.toFixed(2)}
        containerAndBroker={containerAndBroker.toFixed(2)}
        documentsDelivery={documentsDelivery.toFixed(2)}
        complex={complex.toFixed(2)}
        totalDeliveryPrice={totalDeliveryPrice.toFixed(2)}
        setCategory={setCategory}
        setCounty={setCounty}
        setMap={setMap}
        setPort={setPort}
      />

      <CalcBoxTotalCost
        lotCost={lotCost}
        auction_fee={auction_fee.toFixed(2)}
        totalDeliveryPrice={totalDeliveryPrice.toFixed(2)}
        informService={informService}
        clearance={clearance.toFixed(2)}
        excise={excise.toFixed(2)}
        total={total.toFixed(2)}
      />
    </div>
  );
};
