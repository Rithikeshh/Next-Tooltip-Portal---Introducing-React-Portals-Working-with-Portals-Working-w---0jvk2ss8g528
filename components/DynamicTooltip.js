import { useState, useEffect } from 'react';
import TooltipPortal from './TooltipPortal';

function DynamicTooltip() {


 

  return (
    <TooltipPortal>
      <div style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'gray', padding: '10px', borderRadius: '5px' }}>
        this is a tooltip
      </div>
    </TooltipPortal>
  );
}

export default DynamicTooltip;
