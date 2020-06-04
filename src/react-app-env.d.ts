/// <reference types="react-scripts" />

interface Classification {
  scheme: 'CPV';
  id: string;
  description: string
}

type Unit = {
  id: '123';
  name: 'metre'
} | {
  id: '321';
  name: 'kilo'
}

interface Data {
  tender: {
    title: string;
    description: string;
    classification: Classification;
    lots: {
      id: string;
      title: string;
    }[];
    items: {
      id: string;
      description: string;
      relatedLot: string;
      classification: Classification;
      additionalClassification: Classification[];
      quantity: number;
      unit: Unit;
    }[]
  }
}
