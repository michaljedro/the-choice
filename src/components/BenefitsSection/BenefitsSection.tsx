import React from 'react';

import { Benefits } from './Benefits';
import { BenefitItem } from './BenefitItem';
import { benefitsData } from './data';
import { SectionMainHeading } from '@/components/Headings/SectionMainHeading';

export function BenefitsSection(): React.ReactElement {
  return (
    <Benefits
      title={
        <SectionMainHeading>
          Unlock Your Potential with The Right Choice!
        </SectionMainHeading>
      }
      benefits={benefitsData.map(({ icon, title, subtitle }) => (
        <BenefitItem
          key={title}
          icon={icon}
          title={title}
          subtitle={subtitle}
        />
      ))}
    />
  );
}
