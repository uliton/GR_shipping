
export const ENGINE_CONFIG: EngineConfig = {
  petrol: 'petrol',
  disel: 'disel',
  hybrid: 'hybrid',
  electro: 'electro',
}

export const AUCTIONS_CONFIG: AuctionConfig = {
  copart: 'copart',
  manheim: 'manheim',
  aiia: 'aiia',
}

export const CATEGORY_CONFIG: CategoryConfig = {
  first: 'first',
  second: 'second',
  third: 'third',
}

export const MAP_CONFIG: MapConfig = {
  usa: 'usa',
  canada: 'canada',
  german: 'german',
  poland: 'poland',
}

const USA_DELIVERY_CONFIG = {
  'AL': {
    copart: 425,
    aiia: 425,
    port: 'GA',
  },
  'AR': {
    copart: 500,
    aiia: 500,
    port: 'TX',
  },
  'AZ': {
    copart: 400,
    aiia: 400,
    port: 'CA',
  },
  'CA': {
    copart: 425,
    aiia: 425,
    port: 'CA',
  },
  'CO': {
    copart: 675,
    aiia: 675,
    port: 'TX',
  },
  'CT': {
    copart: 300,
    aiia: 300,
    port: 'NJ',
  },
  'DE': {
    copart: 350,
    aiia: 300,
    port: 'NJ',
  },
  'FL': {
    copart: 325,
    aiia: 325,
    port: 'GA',
  },
  'GA': {
    copart: 350,
    aiia: 350,
    port: 'GA',
  },
  'IA': {
    copart: 700,
    aiia: 700,
    port: 'NJ',
  },
  'ID': {
    copart: 850,
    aiia: 850,
    port: 'CA',
  },
  'IL': {
    copart: 575,
    aiia: 575,
    port: 'NJ',
  },
  'IN': {
    copart: 600,
    aiia: 600,
    port: 'NJ',
  },
  'KS': {
    copart: 575,
    aiia: 575,
    port: 'TX',
  },
  'KY': {
    copart: 625,
    aiia: 625,
    port: 'NJ',
  },
  'LA': {
    copart: 375,
    aiia: 375,
    port: 'TX',
  },
  'MA': {
    copart: 375,
    aiia: 375,
    port: 'NJ',
  },
  'MD': {
    copart: 325,
    aiia: 325,
    port: 'NJ',
  },
  'ME': {
    copart: 475,
    aiia: 475,
    port: 'NJ',
  },
  'MI': {
    copart: 675,
    aiia: 675,
    port: 'NJ',
  },
  'MN': {
    copart: 700,
    aiia: 700,
    port: 'NJ',
  },
  'MO': {
    copart: 675,
    aiia: 675,
    port: 'NJ',
  },
  'MS': {
    copart: 475,
    aiia: 475,
    port: 'GA',
  },
  'MT': {
    copart: 1100,
    aiia: 1100,
    port: 'CA',
  },
  'NC': {
    copart: 350,
    aiia: 350,
    port: 'GA',
  },
  'ND': {
    copart: 0, // немає
    aiia: 1150,
    port: 'NJ',
  },
  'NE': {
    copart: 700,
    aiia: 700,
    port: 'NJ',
  },
  'NH': {
    copart: 425,
    aiia: 425,
    port: 'NJ',
  },
  'NJ': {
    copart: 200,
    aiia: 225,
    port: 'NJ',
  },
  'NM': {
    copart: 675,
    aiia: 675,
    port: 'TX',
  },
  'NV': {
    copart: 440,
    aiia: 440,
    port: 'CA',
  },
  'NY': {
    copart: 375,
    aiia: 375,
    port: 'NJ',
  },
  'OH': {
    copart: 500,
    aiia: 500,
    port: 'NJ',
  },
  'OK': {
    copart: 450,
    aiia: 450,
    port: 'TX',
  },
  'OR': {
    copart: 600,
    aiia: 600,
    port: 'CA',
  },
  'PA': {
    copart: 350,
    aiia: 350,
    port: 'NJ',
  },
  'RI': {
    copart: 375,
    aiia: 375,
    port: 'NJ',
  },
  'SC': {
    copart: 325,
    aiia: 325,
    port: 'GA',
  },
  'SD': {
    copart: 1200,
    aiia: 1200,
    port: 'NJ',
  },
  'TN': {
    copart: 475,
    aiia: 475,
    port: 'GA',
  },
  'TX': {
    copart: 350,
    aiia: 350,
    port: 'TX',
  },
  'UT': {
    copart: 550,
    aiia: 550,
    port: 'CA',
  },
  'VA': {
    copart: 425,
    aiia: 425,
    port: 'NJ',
  },
  'VT': {
    copart: 550,
    aiia: 550,
    port: 'NJ',
  },
  'WA': {
    copart: 740,
    aiia: 740,
    port: 'CA',
  },
  'WI': {
    copart: 675,
    aiia: 675,
    port: 'NJ',
  },
  'WV': {
    copart: 575,
    aiia: 575,
    port: 'NJ',
  },
  'WY': {
    copart: 0,
    aiia: 0,
    port: '',
  }, //чекаю
  'DC': {
    copart: 0,
    aiia: 0,
    port: '',
  }, //чекаю
  'AK': {
    copart: 0,
    aiia: 0,
    port: 'CA',
  }, //по замовленню
  'HI': {
    copart: 0,
    aiia: 0,
    port: 'TX',
  }, //по замовленню
}


// auctions fee
export const auctionTaxCalculation = (lotCost: string, auction: string) => {
  const cost = Number(lotCost);
  
  if (auction) {
    const fixFee = 79;
    const extraFee = 10;
    const hidenTax = 50;
    const minCost = fixFee + extraFee + hidenTax;
  
    const costFee = {
      '99.99': 1,
      '199.99': 25 + 39,
      '299.99': 50 + 39,
      '399.99': 75 + 39,
      '499.99': 110 + 39,
      '549.99': 125 + 49,
      '599.99': 130 + 49,
      '699.99': 140 + 49,
      '799.99': 155 + 49,
      '899.99': 170 + 49,
      '999.99': 185 + 49,
      '1199.99': 200 + 69,
      '1299.99': 225 + 69,
      '1399.99': 240 + 69,
      '1499.99': 250 + 69,
      '1599.99': 260 + 79,
      '1699.99': 275 + 79,
      '1799.99': 285 + 79,
      '1999.99': 300 + 79,
      '2399.99': 325 + 89,
      '2499.99': 335 + 89,
      '2999.99': 350 + 89,
      '3499.99': 400 + 89,
      '3999.99': 450 + 89,
      '4499.99': 575 + 99,
      '4999.99': 600 + 99,
      '5999.99': 625 + 99,
      '7499.99': 650 + 119,
      '7999.99': 650 + 119,
      '9999.99': 675 + 129,
      '14999.99': 700 + 129,
    };
  
    if (cost === 0) {
      return 0;
    }
  
    if (cost >= 15000) {
      const percent = cost * 0.055;
      const auctionFee = minCost + percent + 129;
      return auctionFee;
    }
  
    for (const price in costFee) {
      if (cost <= Number(price)) {
        // @ts-ignore
        const lotFee: number = costFee[price];
        const auctionFee = minCost + lotFee;
        return auctionFee;
      }
    }
  }
}


// excise
export const exciseCalculation = (lotYear: string, lotCost: string, auctionFee: number, engine: string, lotEngineVolume: string) => {
  if (lotYear) {
    const lotAge = new Date().getFullYear() - Number(lotYear);

    if (lotAge >= 25) {
      return 0;
    }
  }

  if (lotCost && auctionFee && engine === ENGINE_CONFIG.electro) {
    return 0;
  }

  if (lotCost && auctionFee && engine && lotEngineVolume) {
    if (engine === ENGINE_CONFIG.petrol || engine === ENGINE_CONFIG.disel) {
      if (Number(lotEngineVolume) < 2000) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.031;
        return excise;
      }

      if (Number(lotEngineVolume) >= 2000) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.186;
        return excise;
      }
    }

    if (engine === ENGINE_CONFIG.hybrid) {
      if (Number(lotEngineVolume) < 2000) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.0155;
        return excise;
      }

      if (Number(lotEngineVolume) >= 2000) {
        const excise: number = (Number(lotCost) + auctionFee) * 0.093;
        return excise;
      }
    }
  }
}


// insurance
export const insuranceCalculation = (lotCost: string, auction_fee: number, percent: string) => {
  if (lotCost && auction_fee && percent) {
    const insurance = (Number(lotCost) + auction_fee) * (Number(percent) / 100);

    return insurance;
  }
}


// locale state delivery
export const stateDeliveryCalculation = (auction: string, map: string, county: string) => {
  const extraCost = 100;

  // USA
  if (map === MAP_CONFIG.usa) {
    if (auction === AUCTIONS_CONFIG.copart) {
      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const stateDelivery = USA_DELIVERY_CONFIG[state][AUCTIONS_CONFIG.copart] + extraCost;

          return stateDelivery;
        }
      }
    }

    if (auction === AUCTIONS_CONFIG.aiia) {
      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const stateDelivery = USA_DELIVERY_CONFIG[state][AUCTIONS_CONFIG.aiia] + extraCost;

          return stateDelivery
        }
      }
    }
  }

  // CANADA
  if (map === MAP_CONFIG.canada) {
    const states = {
      'YT': 500,
      'NT': 500,
      'NU': 500,
      'NL': 500,
      'BC': 500,
      'AB': 500,
      'SK': 500,
      'MB': 500,
      'ON': 500,
      'QC': 500,
      'PE': 500,
      'NB': 500,
      'NS': 500,
    }

    for (const state in states) {
      if (state === county) {
        // @ts-ignore
        const stateDelivery = states[state] + extraCost;

        return stateDelivery;
      }
    }
  }

  return 0;
}


export const portDelivery = (category: string, county: string, port: string) => {
  if (county && port) {
    const ports = {
      NJ: 2200,
      GA: 2200,
      TX: 2600,
      CA: 5600,
    }

    // first category
    if (category === CATEGORY_CONFIG.first) {
      const placeInContainer = 4;

      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const deliveryPort = USA_DELIVERY_CONFIG[state].port;

          for (const port in ports) {
            if (port === deliveryPort) {
              // @ts-ignore
              const deliveryPrice = ports[port] / placeInContainer;

              return deliveryPrice;
            }
          }
        }
      }
    }

    // second category
    if (category === CATEGORY_CONFIG.second) {
      const placeInContainer = 3;

      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const deliveryPort = USA_DELIVERY_CONFIG[state].port;

          for (const port in ports) {
            if (port === deliveryPort) {
              // @ts-ignore
              const deliveryPrice = ports[port] / placeInContainer;

              return deliveryPrice;
            }
          }
        }
      }
    }

    // third category
    if (category === CATEGORY_CONFIG.third) {
      const placeInContainer = 2;

      for (const state in USA_DELIVERY_CONFIG) {
        if (state === county) {
          // @ts-ignore
          const deliveryPort = USA_DELIVERY_CONFIG[state].port;

          for (const port in ports) {
            if (port === deliveryPort) {
              // @ts-ignore
              const deliveryPrice = ports[port] / placeInContainer;

              return deliveryPrice;
            }
          }
        }
      }
    }
  }
}


export const releaseContainerAndBroker = (localStateDelivery: number, containerAndBroker: number) => {
  if (localStateDelivery && containerAndBroker) {
    const margin = 500;
    const broker = 50;
    const containerAndBroker = margin + broker;
    return containerAndBroker;
  }
}


// total delivery price
export const deliveryPriceCalculation = (localStateDelivery: number, toPortDelivery: number, containerAndBroker: number, documentsDelivery: number, complex: number) => {
  if (localStateDelivery && toPortDelivery) {
    const price = localStateDelivery + toPortDelivery + containerAndBroker + documentsDelivery + complex;

    return price;
  }
}


// --------------------------------- lotYear
export const clearanceCalculation = (lotYear:string, lotCost: string, auction_fee: number, localStateDelivery: number, toPortDelivery: number) => {
  if (lotYear && lotCost && auction_fee && localStateDelivery && toPortDelivery) {
    const lotAge = new Date().getFullYear() - Number(lotYear);
    const coefficient = 1; // was 0.9778
    const deliveryToWarsaw = 700;
    const forwarder = 120;

    if (lotAge < 25) {
      const percent = 35;
      const clearance = ((Number(lotCost) + auction_fee + localStateDelivery + toPortDelivery) / coefficient + deliveryToWarsaw) * (percent / 100) + forwarder;
  
      return clearance;
    }

    if (lotAge >= 25) {
      const percent = 8;
      const clearance = (Number(lotCost) + localStateDelivery + toPortDelivery + deliveryToWarsaw) * (percent / 100) + forwarder;
  
      return clearance;
    }
  }
}

export const totalCalculation = (totalCustomsPrice: number, totalDeliveryPrice: number, clearance: number, informService: number) => {
  if (totalCustomsPrice && totalDeliveryPrice && clearance) {
    // const bruttoInformService = informService * 1.23;
    const total = totalCustomsPrice + totalDeliveryPrice + clearance + informService;

    return total;
  }
}





const USA_DELIVERY_MANAGER_CONFIG = {
  'AL': {
    copart: {
      'HUETOWN': 425,
      'HUNTSVILLE': 425,
      'EIGHT MILE': 425,
      'MONTGOMERY': 425,
      'BESSEMER': 425,
      'HEADLAND': 425,
      'ATHENS': 425,
      'MOODY': 450,
      'TANNER': 450,
    },
    aiia: {
      'HUETOWN': 425,
      'HUNTSVILLE': 425,
      'EIGHT MILE': 425,
      'MONTGOMERY': 425,
      'BESSEMER': 425,
      'HEADLAND': 425,
      'ATHENS': 425,
      'MOODY': 450,
      'TANNER': 450,
    },
    port: 'GA',
  },
  'AR': {
    copart: {
      'PRAIRIE GROVE': 500,
      'CONWAY': 500,
    },
    aiia: {
      'Lincoln': 500,
      'Scott': 500,
    },
    port: 'TX',
  },
  'AZ': {
    copart: {
      'PHOENIX': 350,
      'TUCSON': 475,
      'PHOENIX (TUCSON)': 350,
      'TOLLESON': 450,
      'CHANDLER': 400,
    },
    aiia: {
      'PHOENIX': 350,
      'TUCSON': 475,
      'PHOENIX (TUCSON)': 350,
      'TOLLESON': 450,
      'CHANDLER': 400,
    },
    port: 'CA',
  },
  'CA': {
    copart: {
      'BAKERSFIELD': 450,
      'FRESNO': 500,
      'HAYWARD': 525,
      'LOS ANGELES': 275,
      'MARTINEZ': 500,
      'RANCHO CUCAMONGA': 350,
      'SACRAMENTO': 500,
      'COLTON': 350,
      'SAN MARTIN': 550,
      'VALLEJO': 575,
      'VAN NUYS': 350,
      'ANAHEIM': 350,
      'BAY POINT': 525,
      'FRESNO (FRESNO)': 525,
      'FONTANA': 375,
      'FREMONT': 525,
      'GARDENA': 300,
      'NORTH HOLLYWOOD': 325,
      'RANCHO CORDOVA': 500,
      'SAN DIEGO': 375,
      'ANAHEIM (CALIFORNIA)': 325,
      'FRESNO (CENTRAL CALIFORNIA)': 500,
      'OCEANSIDE': 350,
      'HAYWARD (SAN FRANCISCO BAY)': 500,
      'FONTANA (SOUTHERN CALIFORNIA)': 325,
      'SUN VALLEY': 325,
    },
    aiia: {
      'BAKERSFIELD': 450,
      'FRESNO': 500,
      'HAYWARD': 525,
      'LOS ANGELES': 275,
      'MARTINEZ': 500,
      'RANCHO CUCAMONGA': 350,
      'SACRAMENTO': 500,
      'COLTON': 350,
      'SAN MARTIN': 550,
      'VALLEJO': 575,
      'VAN NUYS': 350,
      'ANAHEIM': 350,
      'BAY POINT': 525,
      'FRESNO (FRESNO)': 525,
      'FONTANA': 375,
      'FREMONT': 525,
      'GARDENA': 300,
      'NORTH HOLLYWOOD': 325,
      'RANCHO CORDOVA': 500,
      'SAN DIEGO': 375,
      'ANAHEIM (CALIFORNIA)': 325,
      'FRESNO (CENTRAL CALIFORNIA)': 500,
      'OCEANSIDE': 350,
      'HAYWARD (SAN FRANCISCO BAY)': 500,
      'FONTANA (SOUTHERN CALIFORNIA)': 325,
      'SUN VALLEY': 325,
    },
    port: 'CA',
  },
  'CO': {
    copart: {
      'BRIGHTON': 675,
      'DENVER': 675,
      'DELTA': 950,
      'COMMERCE CITY': 675,
      'AURORA': 675,
      'FOUNTAIN': 675,
    },
    aiia: {
      'BRIGHTON': 675,
      'DENVER': 675,
      'DELTA': 950,
      'COMMERCE CITY': 675,
      'AURORA': 675,
      'FOUNTAIN': 675,
    },
    port: 'TX',
  },
  'CT': {
    copart: {
      'NEW BRITAIN': 300,
      'East Granby': 300,
    },
    aiia: {
      'East Windsor': 300,
      'Middletown': 300,
    },
    port: 'NJ',
  },
  'DE': {
    copart: {
      'SEAFORD': 350,
    },
    aiia: {
      'New Castle': 300,
    },
    port: 'NJ',
  },
  'FL': {
    copart: {
      'FORT PIERCE': 375,
      'JACKSONVILLE': 250,
      'MIAMI': 375,
      'OCALA': 375,
      'ORLANDO': 350,
      'PUNTA GORDA': 375,
      'MIDWAY': 375,
      'DOVER': 350,
      'RIVERVIEW': 350,
      'WEST PALM BEACH': 375,
      'CLEARWATER': 375,
      'OPA LOCKA': 375,
      'PEMBROKE PINES': 375,
      'SANFORD': 325,
      'MILTON': 400,
      'PALMETTO': 375,
      'DAVIE': 375,
      'FORT MYERS': 400,
      'OCOEE': 350,
      'PENSACOLA': 425,
      'TAMPA': 350,
    },
    aiia: {
      'FORT PIERCE': 375,
      'JACKSONVILLE': 250,
      'MIAMI': 375,
      'OCALA': 375,
      'ORLANDO': 350,
      'PUNTA GORDA': 375,
      'MIDWAY': 375,
      'DOVER': 350,
      'RIVERVIEW': 350,
      'WEST PALM BEACH': 375,
      'CLEARWATER': 375,
      'OPA LOCKA': 375,
      'PEMBROKE PINES': 375,
      'SANFORD': 325,
      'MILTON': 400,
      'PALMETTO': 375,
      'DAVIE': 375,
      'FORT MYERS': 400,
      'OCOEE': 350,
      'PENSACOLA': 425,
      'TAMPA': 350,
    },
    port: 'GA',
  },
  'GA': {
    copart: {
      'LOGANVILLE': 350,
      'AUSTELL': 350,
      'SAVANNAH': 200,
      'TIFTON': 350,
      'WINDER': 350,
      'ACWORTH': 350,
      'LAKE CITY': 350,
      'RINCON': 200,
      'ATLANTA (zip 30349)': 375,
      'STOCKBRIDGE': 400,
      'ATLANTA (zip 30331)': 350,
      'ATLANTA (METRO ATLANTA)': 350,
      'FAIRBURN': 400,
      'CARTERSVILLE': 350,
    },
    aiia: {
      'LOGANVILLE': 350,
      'AUSTELL': 350,
      'SAVANNAH': 200,
      'TIFTON': 350,
      'WINDER': 350,
      'ACWORTH': 350,
      'LAKE CITY': 350,
      'RINCON': 200,
      'ATLANTA (zip 30349)': 375,
      'STOCKBRIDGE': 400,
      'ATLANTA (zip 30331)': 350,
      'ATLANTA (METRO ATLANTA)': 350,
      'FAIRBURN': 400,
      'CARTERSVILLE': 350,
    },
    port: 'GA',
  },
  'IA': {
    copart: {
      'Eldridge': 700,
      'DES MOINES': 700,
    },
    aiia: {
      'Soto': 700,
      'Davenport': 700,
    },
    port: 'NJ',
  },
  'ID': {
    copart: {
      'NAMPA': 850,
      'CALDWELL': 850,
    },
    aiia: {
      'NAMPA': 850,
      'CALDWELL': 850,
    },
    port: 'CA',
  },
  'IL': {
    copart: {
      'ELGIN': 575,
      'CHICAGO HEIGHTS': 575,
      'PEKIN': 600,
      'AURORA': 575,
      'WHEELING': 575,
      'MARKHAM': 575,
      'LINCOLN': 575,
      'GRANITE CITY': 625,
      'BOLINGBROOK': 600,
      'MATTESON': 575,
      'AISIP': 600,
      'East Dundee': 575,
      'Saint Louis': 625,
    },
    aiia: {
      'ELGIN': 575,
      'CHICAGO HEIGHTS': 575,
      'PEKIN': 600,
      'AURORA': 575,
      'WHEELING': 575,
      'MARKHAM': 575,
      'LINCOLN': 575,
      'GRANITE CITY': 625,
      'BOLINGBROOK': 600,
      'MATTESON': 575,
      'AISIP': 600,
      'East Dundee': 575,
      'Saint Louis': 625,
    },
    port: 'NJ',
  },
  'IN': {
    copart: {
      'HAMMOND': 600,
      'INDIANAPOLIS': 600,
      'SOUTH BEND': 600,
      'FORT WAYNE': 600,
      'CLARKSVILLE': 600,
      'PLAINFIELD': 600,
    },
    aiia: {
      'HAMMOND': 600,
      'INDIANAPOLIS': 600,
      'SOUTH BEND': 600,
      'FORT WAYNE': 600,
      'CLARKSVILLE': 600,
      'PLAINFIELD': 600,
    },
    port: 'NJ',
  },
  'KS': {
    copart: {
      'KANSAS CITY': 575,
      'WICHITA': 575,
      'Park City': 575,
    },
    aiia: {
      'KANSAS CITY': 575,
      'Park City': 575,
    },
    port: 'TX',
  },
  'KY': {
    copart: {
      'LEXINGTON': 625,
      'LAWRENCEBURG': 625,
      'LOUISVILLE': 625,
      'WALTON': 625,
      'ASHLAND': 625,
      'BOWLING GREEN': 625,
      'PADUCAH': 625,
      'Eminence': 625,
    },
    aiia: {
      'LEXINGTON': 625,
      'LAWRENCEBURG': 625,
      'LOUISVILLE': 625,
      'WALTON': 625,
      'ASHLAND': 625,
      'BOWLING GREEN': 625,
      'PADUCAH': 625,
      'Eminence': 625,
    },
    port: 'NJ',
  },
  'LA': {
    copart: {
      'GREENWELL SPRINGS': 375,
      'NEW ORLEANS': 375,
      'SHREVEPORT': 375,
      'LIVINGSTON': 375,
      'SCOTT': 375,
      'SLIDELL': 375,
    },
    aiia: {
      'GREENWELL SPRINGS': 375,
      'NEW ORLEANS': 375,
      'SHREVEPORT': 375,
      'LIVINGSTON': 375,
      'SCOTT': 375,
      'SLIDELL': 375,
    },
    port: 'TX',
  },
  'MA': {
    copart: {
      'NORTH BILLERICA': 375,
      'BELLINGHAM': 375,
      'WEST WARREN': 375,
      'Assonet': 375,
      'NORTH DIGHTON': 375,
      'FRAMINGHAM': 375,
      'ACTON': 375,
    },
    aiia: {
      'EAST TAUNTON': 375,
      'NORTH DIGHTON': 375,
      'FRAMINGHAM': 375,
      'ACTON': 375,
      'Shirley': 375,
    },
    port: 'NJ',
  },
  'MD': {
    copart: {
      'WALDORF': 350,
      'FINKSBURG': 325,
      'FRUITLAND': 350,
      'BALTIMORE': 325,
      'LAUREL': 325,
      'BRANDYWINE': 325,
      'ELKRIDGE': 325,
      'Dundalk': 350,
    },
    aiia: {
      'WALDORF': 350,
      'FINKSBURG': 325,
      'FRUITLAND': 350,
      'BALTIMORE': 325,
      'LAUREL': 325,
      'BRANDYWINE': 325,
      'ELKRIDGE': 325,
      'Dundalk': 350,
    },
    port: 'NJ',
  },
  'ME': {
    copart: {
      'SACO': 475,
      'LYMAN': 475,
    },
    aiia: {
      'SACO': 475,
      'Gorham': 475,
    },
    port: 'NJ',
  },
  'MI': {
    copart: {
      'WOODHAVEN': 675,
      'LANSING': 675,
      'BELLEVILLE': 675,
      'BYRON CENTER': 675,
      'CARLETON': 675,
      'FLAT ROCK': 675,
      'DIMONDALE': 675,
      'KINCHELOE': 850,
      'DAVISON': 675,
    },
    aiia: {
      'WOODHAVEN': 675,
      'LANSING': 675,
      'BELLEVILLE': 675,
      'BYRON CENTER': 675,
      'CARLETON': 675,
      'FLAT ROCK': 675,
      'DIMONDALE': 675,
      'KINCHELOE': 850,
      'DAVISON': 675,
    },
    port: 'NJ',
  },
  'MN': {
    copart: {
      'FRIDLEY': 700,
      'HAM LAKE': 700,
      'AVON': 800,
      'SAINT PAUL': 700,
      'SHAKOPEE': 700,
      'DAYTON': 700,
      'BLAINE': 800,
    },
    aiia: {
      'FRIDLEY': 700,
      'HAM LAKE': 700,
      'AVON': 800,
      'SAINT PAUL': 700,
      'SHAKOPEE': 700,
      'DAYTON': 700,
      'BLAINE': 800,
    },
    port: 'NJ',
  },
  'MO': {
    copart: {
      'COLUMBIA': 675,
      'SIKESTON': 675,
      'ROGERSVILLE': 675,
      'BRIDGETON': 675,
      'KANSAS CITY': 675,
      'SPRINGFIELD': 675,
      'BELTON': 675,
      'BARNHART': 675,
    },
    aiia: {
      'COLUMBIA': 675,
      'SIKESTON': 675,
      'ROGERSVILLE': 675,
      'BRIDGETON': 675,
      'KANSAS CITY': 675,
      'SPRINGFIELD': 675,
      'BELTON': 675,
      'BARNHART': 675,
    },
    port: 'NJ',
  },
  'MS': {
    copart: {
      'FLORENCE': 475,
    },
    aiia: {
      'Byram': 475,
      'Moss Point': 475,
      'Grenada': 475,
    },
    port: 'GA',
  },
  'MT': {
    copart: {
      'HELENA': 1100,
      'BILLINGS': 1100,
    },
    aiia: {
      'BILLINGS': 1100,
      'MISSOULA': 1100,
    },
    port: 'CA',
  },
  'NC': {
    copart: {
      'CHINA GROVE': 325,
      'DUNN': 325,
      'FLETCHER': 325,
      'CONCORD': 325,
      'CHARLOTTE': 325,
      'GRAHAM': 350,
      'CASTLE HAYNE': 375,
      'KENLY': 400,
      'STATESVILLE': 400,
      'CLAYTON': 325,
      'MEBANE': 325,
    },
    aiia: {
      'CHINA GROVE': 325,
      'DUNN': 325,
      'FLETCHER': 325,
      'CONCORD': 325,
      'CHARLOTTE': 325,
      'GRAHAM': 350,
      'CASTLE HAYNE': 375,
      'KENLY': 400,
      'STATESVILLE': 400,
      'CLAYTON': 325,
      'MEBANE': 325,
    },
    port: 'GA',
  },
  'ND': {
    copart: {
      none: 0, // немає
    },
    aiia: {
      'Fargo': 1150,
    },
    port: 'NJ',
  },
  'NE': {
    copart: {
      'GREENWOOD': 700,
    },
    aiia: {
      'OMAHA': 700,
    },
    port: 'NJ',
  },
  'NH': {
    copart: {
      'CANDIA': 425,
    },
    aiia: {
      'SALEM': 425,
    },
    port: 'NJ',
  },
  'NJ': {
    copart: {
      'GLASSBORO': 250,
      'HILLSBOROUGH': 200,
      'WINDSOR': 200,
      'FAIRFIELD': 200,
      'BORDENTOWN': 225,
      'MANVILLE': 225,
    },
    aiia: {
      'MORGANVILLE': 200,
      'TURNERSVILLE': 250,
      'FAIRFIELD': 200,
      'BORDENTOWN': 225,
      'MANVILLE': 225,
      'Avenel': 175,
      'Englishtown': 225,
      'Sayreville': 225,
      'Port Murry': 275,
    },
    port: 'NJ',
  },
  'NM': {
    copart: {
      'ALBUQUERQUE': 675,
    },
    aiia: {
      'ALBUQUERQUE': 675,
    },
    port: 'TX',
  },
  'NV': {
    copart: {
      'LAS VEGAS': 400,
      'RENO': 475,
      'HENDERSON': 400,
      'MCCARRAN': 475,
    },
    aiia: {
      'LAS VEGAS': 400,
      'RENO': 475,
      'HENDERSON': 400,
      'MCCARRAN': 475,
    },
    port: 'CA',
  },
  'NY': {
    copart: {
      'ALBANY': 325,
      'BROOKHAVEN': 275,
      'MARLBORO': 275,
      'LE ROY': 425,
      'CENTRAL SQUARE': 350,
      'SCHENECTADY': 325,
      'BUFFALO': 475,
      'MEDFORD': 275,
      'ROCK TAVERN': 275,
      'ROCHESTER': 425,
      'CLIFTON PARK': 400,
      'NEWBURGH': 300,
      'AKRON': 475,
      'CICERO': 375,
      'YAPHANK': 375,
    },
    aiia: {
      'ALBANY': 325,
      'BROOKHAVEN': 275,
      'MARLBORO': 275,
      'LE ROY': 425,
      'CENTRAL SQUARE': 350,
      'SCHENECTADY': 325,
      'BUFFALO': 475,
      'MEDFORD': 275,
      'ROCK TAVERN': 275,
      'ROCHESTER': 425,
      'CLIFTON PARK': 400,
      'NEWBURGH': 300,
      'AKRON': 475,
      'CICERO': 375,
      'YAPHANK': 375,
    },
    port: 'NJ',
  },
  'OH': {
    copart: {
      'NORTHFIELD': 500,
      'COLUMBIA STATION': 500,
      'COLUMBUS': 500,
      'NEW PHILADELPHIA': 500,
      'GROVE CITY': 500,
      'WEST CHESTER': 500,
      'LORAIN': 500,
      'AMELIA': 500,
      'DAYTON': 500,
      'LIMA': 500,
      'HAMILTON': 500,
      'FRANKLIN': 500,
    },
    aiia: {
      'NORTHFIELD': 500,
      'COLUMBIA STATION': 500,
      'COLUMBUS': 500,
      'NEW PHILADELPHIA': 500,
      'GROVE CITY': 500,
      'WEST CHESTER': 500,
      'LORAIN': 500,
      'AMELIA': 500,
      'DAYTON': 500,
      'LIMA': 500,
      'HAMILTON': 500,
      'FRANKLIN': 500,
    },
    port: 'NJ',
  },
  'OK': {
    copart: {
      'OKLAHOMA CITY': 450,
      'TULSA': 450,
    },
    aiia: {
      'OKLAHOMA CITY': 450,
      'TULSA': 450,
    },
    port: 'TX',
  },
  'OR': {
    copart: {
      'EUGENE': 600,
      'PORTLAND': 600,
      'WOODBURN': 600,
    },
    aiia: {
      'EUGENE': 600,
      'PORTLAND': 600,
    },
    port: 'CA',
  },
  'PA': {
    copart: {
      'EBENSBURG': 450,
      'CHAMBERSBURG': 425,
      'GRANTVILLE': 350,
      'PENNSBURG': 250,
      'Bridgeport': 275,
      'ELLWOOD CITY': 450,
      'WEST MIFFLIN': 450,
      'YORK HAVEN': 350,
      'EAST FREEDOM': 450,
      'GARLAND': 525,
      'MANCHESTER': 375,
      'CONSHOHOCKEN': 250,
      'MOUNTAIN MORRIS': 450,
      'GIBSONIA': 450,
      'PITTSTON': 325,
      'MANHEIM': 350,
      'HATFIELD': 325,
      'CRANBERRY': 475,
      'YORK': 400,
      'York Springs': 350,
      'MERCER': 400,
      'CHALFONT': 275,
    },
    aiia: {
      'EBENSBURG': 450,
      'CHAMBERSBURG': 425,
      'GRANTVILLE': 350,
      'PENNSBURG': 250,
      'Bridgeport': 275,
      'ELLWOOD CITY': 450,
      'WEST MIFFLIN': 450,
      'YORK HAVEN': 350,
      'EAST FREEDOM': 450,
      'GARLAND': 525,
      'MANCHESTER': 375,
      'CONSHOHOCKEN': 250,
      'MOUNTAIN MORRIS': 450,
      'GIBSONIA': 450,
      'PITTSTON': 325,
      'MANHEIM': 350,
      'HATFIELD': 325,
      'CRANBERRY': 475,
      'YORK': 400,
      'York Springs': 350,
      'MERCER': 400,
      'CHALFONT': 275,
    },
    port: 'NJ',
  },
  'RI': {
    copart: {
      'EXETER': 375,
    },
    aiia: {
      'East Providence (Riverside)': 375,
    },
    port: 'NJ',
  },
  'SC': {
    copart: {
      'GASTON': 325,
      'GREER': 325,
      'RAVENEL': 325,
      'GREENVILLE': 325,
      'DARLINGTON': 325,
      'SPARTANBURG': 325,
    },
    aiia: {
      'GASTON': 325,
      'GREER': 325,
      'RAVENEL': 325,
      'GREENVILLE': 325,
      'DARLINGTON': 325,
      'SPARTANBURG': 325,
    },
    port: 'GA',
  },
  'SD': {
    copart: {
      'TEA': 1200,
      'Sioux Falls': 1200,
    },
    aiia: {
      'Lennox': 1200,
      'TEA': 1200,
      'Sioux Falls': 1200,
    },
    port: 'NJ',
  },
  'TN': {
    copart: {
      'MADISONVILLE': 475,
      'MEMPHIS': 475,
      'LEBANON': 475,
      'CHATTANOOGA': 475,
      'KNOXVILLE': 475,
      'NASHVILLE': 475,
      'MOUNTAINE JULIET': 475,
    },
    aiia: {
      'MADISONVILLE': 475,
      'MEMPHIS': 475,
      'LEBANON': 475,
      'CHATTANOOGA': 475,
      'KNOXVILLE': 475,
      'NASHVILLE': 475,
      'MOUNTAINE JULIET': 475,
    },
    port: 'GA',
  },
  'TX': {
    copart: {
      'ABILENE': 500,
      'AMARILLO': 500,
      'CORPUS CHRISTI': 375,
      'GRAND PRAIRIE': 325,
      'SAN ANTONIO (zip 78224)': 350,
      'NEW BRAUNFELS': 325,
      'Anthony': 475,
      'HASLET': 325,
      'HOUSTON': 175,
      'LONGVIEW': 325,
      'LUFKIN': 350,
      'MERCEDES': 375,
      'ANDREWS': 475,
      'KEMAH': 0,
      'Donna': 325,
      'SAN ANTONIO': 325,
      'DALLAS': 325,
      'EULESS': 450,
      'EL PASO': 525,
      'HUTCHINS': 450,
      'AUSTIN': 325,
    },
    aiia: {
      'ABILENE': 500,
      'AMARILLO': 500,
      'CORPUS CHRISTI': 375,
      'GRAND PRAIRIE': 325,
      'SAN ANTONIO (zip 78224)': 350,
      'WILMER': 325,
      'EL PASO (zip 79938)': 475,
      'HOUSTON': 175,
      'LONGVIEW': 275,
      'ODESSA': 475,
      'Dale': 350,
      'LUBBOCK': 475,
      'Justin': 375,
      'KEMAH': 0,
      'Donna': 325,
      'SAN ANTONIO': 325,
      'DALLAS': 325,
      'EULESS': 450,
      'EL PASO (zip 79932)': 525,
      'HUTCHINS': 450,
      'AUSTIN': 325,
    },
    port: 'TX',
  },
  'UT': {
    copart: {
      'NORTH SALT LAKE': 550,
      'WOODS CROSS': 550,
      'Farr West': 550,
      'Magna': 550,
    },
    aiia: {
      'NORTH SALT LAKE': 550,
      'OGDEN': 550,
      'WOODS CROSS': 550,
    },
    port: 'CA',
  },
  'VA': {
    copart: {
      'Fredericksburg': 400,
      'CHATHAM': 425,
      'HAMPTON': 425,
      'SANDSTON': 400,
      'Charles City': 400,
    },
    aiia: {
      'Culpeper': 450,
      'Fredericksburg': 400,
      'Pulaski': 425,
      'Ashland': 400,
      'Suffolk': 425,
      'Montvale': 450,
      'Yorktown': 425,
    },
    port: 'NJ',
  },
  'VT': {
    copart: {
      'Essex Junction': 550,
    },
    aiia: {
      'Essex Junction': 550,
    },
    port: 'NJ',
  },
  'WA': {
    copart: {
      'GRAHAM': 800,
      'ARLINGTON': 675,
      'PASCO': 800,
      'AIRWAY HEIGHTS': 800,
      'KENT': 675,
    },
    aiia: {
      'Spokane Valley': 800,
      'TUKWILA': 675,
      'KENT': 675,
      'Puyallup': 675,
    },
    port: 'CA',
  },
  'WI': {
    copart: {
      'Mcfarland': 675,
      'CUDAHY': 675,
      'APPLETON': 675,
      'CALEDONIA': 675,
      'Milwaukee': 675,
    },
    aiia: {
      'APPLETON': 675,
      'Grass Ln': 675,
      'CALEDONIA': 675,
      'PORTAGE': 675,
    },
    port: 'NJ',
  },
  'WV': {
    copart: {
      'HURRICANE': 575,
      'BUCKHANNON': 575,
      'Shady Spring': 575,
    },
    aiia: {
      'HURRICANE': 575,
      'BUCKHANNON': 575,
      'Shady Spring': 575,
    },
    port: 'NJ',
  },
  'WY': {
    copart: {
      none: 0,
    },
    aiia: {
      none: 0,
    },
    port: '',
  }, //чекаю
  'DC': {
    copart: {
      none: 0,
    },
    aiia: {
      none: 0,
    },
    port: '',
  }, //чекаю
  'AK': {
    copart: {
      none: 0,
    },
    aiia: {
      none: 0,
    },
    port: 'CA',
  }, //по замовленню
  'HI': {
    copart: {
      none: 0,
    },
    aiia: {
      none: 0,
    },
    port: 'TX',
  }, //по замовленню
}


const CANADA_DELIVERY_MANAGER_CONFIG = {
  'YT': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'NT': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'NU': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'NL': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'BC': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'AB': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'SK': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'MB': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'ON': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'QC': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'PE': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'NB': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
  'NS': {
    copart: {
      none: 500,
    },
    aiia: {
      none: 500,
    },
    port: '',
  },
}


// array with years
export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const yearsArray = []

  for (let i = currentYear; i >= 1900; i--) {
    yearsArray.push(i)
  }

  return yearsArray;
}


// array with states
export const getStates = (country: string) => {
  if (country === MAP_CONFIG.usa) {
    const states = Object.keys(USA_DELIVERY_MANAGER_CONFIG)

    return states;
  }

  if (country === MAP_CONFIG.canada) {
    const states = Object.keys(CANADA_DELIVERY_MANAGER_CONFIG)

    return states;
  }

  return [];
}


// array with cicies
export const getCities = (auction: string, country: string, state: string) => {
  if (country === MAP_CONFIG.usa && state && auction) {
    // @ts-ignore
    const cities = Object.keys(USA_DELIVERY_MANAGER_CONFIG[state][auction]);

    return cities;
  }

  return []
}


export const stateDeliveryManagerCalculation = (auction: string, map: string, state: string, city: string) => {
  // USA
  if (map === MAP_CONFIG.usa) {
    if (auction === AUCTIONS_CONFIG.copart) {
      for (const stateName in USA_DELIVERY_MANAGER_CONFIG) {
        if (stateName === state) {
          // @ts-ignore
          const stateDelivery = USA_DELIVERY_MANAGER_CONFIG[state][auction];

          for (const cityName in stateDelivery) {
            if (cityName === city) {
              return stateDelivery[city];
            }
          }
        }
      }
    }

    if (auction === AUCTIONS_CONFIG.aiia) {
      for (const stateName in USA_DELIVERY_MANAGER_CONFIG) {
        if (stateName === state) {
          // @ts-ignore
          const stateDelivery = USA_DELIVERY_MANAGER_CONFIG[state][auction];

          for (const cityName in stateDelivery) {
            if (cityName === city) {
              return stateDelivery[city];
            }
          }
        }
      }
    }
  }
}


// totat manager calc
export const totalManagerCalculation = (price: string, auction_fee: number, localStateDelivery: number, toPortDelivery: number, broker: number, documentsDelivery: number, complex: number, informService: number, clearance: number, insurance: number, margin: number) => {
  if (clearance) {
    const total = Number(price) + auction_fee + localStateDelivery + toPortDelivery + broker + documentsDelivery + complex + informService + clearance + insurance + margin;

    return total;
  }
}


// total zloty calc
export const totalZlotyCalculation = (total: number) => {
  const rate = 4.55;
  return total * rate;
}