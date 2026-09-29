export interface RecruiterContact {
  name: string;
  email: string;
  phone: string;
  designation: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  website: string;
  about: string;
  headquarters: string;
  locations: string[];
  recruiter: RecruiterContact;
  rolesOffered: string[];
  packageRange: string;
  minPackage: number; // in LPA
  maxPackage: number; // in LPA
  tier: 'Tier 1' | 'Tier 2' | 'Dream' | 'Super Dream';
  totalHired: number;
  activeDrivesCount: number;
  rating: number;
}
