import { useState } from 'react';
import DynamicTooltip from '../components/DynamicTooltip';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
     <span onMouseOver={()=>{
      setShowTooltip(!showTooltip)
     }} onMouseLeave={()=>{
      setShowTooltip(!showTooltip)
     }}>Hover over this text to see the dynamic tooltip.</span>
      {showTooltip && <DynamicTooltip />}
    </div>
  );
}
