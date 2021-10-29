import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={75} height={24} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_78:228)">
        <Path
          d="M38.283 7.642c-.042 3.33 2.968 5.188 5.235 6.293 2.33 1.133 3.112 1.86 3.103 2.874-.018 1.551-1.858 2.236-3.58 2.263-3.006.047-4.753-.811-6.142-1.46l-1.083 5.065c1.394.643 3.975 1.203 6.65 1.227 6.282 0 10.392-3.1 10.415-7.909.024-6.101-8.44-6.44-8.383-9.166.02-.827.81-1.71 2.539-1.934.856-.114 3.219-.2 5.897 1.033l1.051-4.901C52.545.502 50.694 0 48.388 0c-5.912 0-10.071 3.143-10.105 7.642zM64.088.422c-1.147 0-2.114.67-2.545 1.696l-8.974 21.426h6.278l1.249-3.452h7.67l.725 3.452h5.533L69.196.422h-5.108zm.878 6.246l1.812 8.683h-4.962l3.15-8.683zM30.673.422l-4.948 23.122h5.981L36.652.422h-5.98zm-8.85 0L15.598 16.16 13.08 2.779C12.783 1.285 11.616.422 10.32.422H.142L0 1.094c2.09.453 4.463 1.184 5.902 1.967.88.478 1.131.896 1.42 2.032l4.77 18.451h6.322L28.105.422h-6.281z"
          fill="url(#prefix__paint0_linear_78:228)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_78:228"
          x1={34.032}
          y1={24.384}
          x2={34.724}
          y2={-0.166}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#222357" />
          <Stop offset={1} stopColor="#254AA5" />
        </LinearGradient>
        <ClipPath id="prefix__clip0_78:228">
          <Path fill="#fff" d="M0 0h74.024v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
