import type React from "react";
import FloatingLines from "../ui/FloatingLines/FloatingLines";
import type { WaveConfig } from "../../types";
import { DEFAULT_WAVE_CONFIG } from "../../constants";

export interface WaveBackgroundProps extends Partial<WaveConfig> {
  className?: string;
  style?: React.CSSProperties;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({
  enabledWaves = DEFAULT_WAVE_CONFIG.enabledWaves,
  lineCount = DEFAULT_WAVE_CONFIG.lineCount,
  lineDistance = DEFAULT_WAVE_CONFIG.lineDistance,
  bendRadius = DEFAULT_WAVE_CONFIG.bendRadius,
  bendStrength = DEFAULT_WAVE_CONFIG.bendStrength,
  interactive = DEFAULT_WAVE_CONFIG.interactive,
  parallax = DEFAULT_WAVE_CONFIG.parallax,
  className,
  style,
}) => {
  const defaultStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    ...style,
  };

  return (
    <div className={className} style={defaultStyle}>
      <FloatingLines
        enabledWaves={enabledWaves}
        lineCount={lineCount}
        lineDistance={lineDistance}
        bendRadius={bendRadius}
        bendStrength={bendStrength}
        interactive={interactive}
        parallax={parallax}
      />
    </div>
  );
};

export default WaveBackground;