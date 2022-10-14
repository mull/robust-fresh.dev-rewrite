import { ComponentChildren } from "https://esm.sh/v94/preact@10.11.0/src/index.d.ts"

interface Props {
  children: ComponentChildren
}

export default function Highlight({ children }: Props) {
  return <span class="background-image[url('/somefile.svg')]">{children}</span>
  // .highlight {
  //   background: url('/img/brush-stroke.svg');
  //   background-repeat: no-repeat;
  //   background-size: 100% 49%;
  //   background-position: bottom;
  // }
}
