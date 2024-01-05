export interface Prescriber {
  name: string | null;
  workplace: string | null;
  profession: string | null;
  phoneNumber: string | null;
}

export interface Article {
  id: string;
  productName: string;
  productLongName: string;
  pharmaceuticalForm: string | null;
  packagingText: string;
  strength: string | null;
  description: string | null;
  canBePurchased: boolean;
  stock: number | null;
  stockStatus: string;
  originalUnitPrice: number;
  cheapestReplacement: Article | null;
  articleLink: string | null;
  activeSubstance: string;
  extraCost: number;
  numericalNumber: number;
  isNarcotic: boolean;
  articleInfoText: string | null;
  articleNumber: string;
  header: string;
  preamble: string;
  purchaseStatus: {
    text: string | null;
    code: string | null;
    level: string;
  };
  articleStatus: {
    text: string | null;
    code: string | null;
    level: string;
  };
  nplpackid: string | null;
}

export interface Prescription {
  prescriptionId: number;
  active: boolean;
  numberOfWithdrawals: number;
  numberOfWithdrawalsLeft: number;
  maxNumberOfPacks: number;
  dosage: string | null;
  prescriber: Prescriber;
  article: Article;
  isNotReplaceable: boolean;
  replacements: Article[] | null;
  expeditionInterval: number;
  expeditionIntervalUnit: string | null;
  benefitType: string;
  prescriptionDate: string;
  validityDate: string;
  nextWithdrawalDate: string | null;
  nextWithdrawalWithinHcpDate: string | null;
  latestWithdrawalDate: string | null;
  firstWithdrawalBeforeDate: string | null;
  isNew: boolean;
  isAnimalPrescription: boolean;
  inCart: boolean;
  canBePurchased: boolean;
  isAboutToExpire: boolean;
  canBeRenewed: boolean;
  isAvailableWithinHcpPeriod: boolean;
  isAvailableWithinExpeditionInterval: boolean;
  isStarterPackAvailable: boolean;
  purchaseInfoText: string | null;
  purchaseBarrierText: string | null;
  benefitInfoText: string | null;
  statusInfoText: string;
  personalNumber: string;
  totalAmountRemaining: number;
  amountUnit: string;
  isPrescribedWithBenefit: boolean;
  header: string;
  preamble: string;
  buyableArticlesState: string;
  purchaseStatus: {
    text: string | null;
    code: string | null;
    level: string;
  };
  prescriptionStatus: {
    text: string | null;
    code: string | null;
    level: string;
  };
}
