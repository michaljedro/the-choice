import React from 'react';

import { ReadyToGetStartedSection } from '@/components/ReacyToGetStartedSection/ReadyToGetStartedSection';
import { ReferralsSection } from '@/components/ReferralSection/ReferralsSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { BenefitsSection } from '@/components/BenefitsSection/BenefitsSection';

export function Landing(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ReferralsSection />
      <ReadyToGetStartedSection />
    </>
  );
}
