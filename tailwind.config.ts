import type { Config } from "tailwindcss";

const config: Config = {
  content: [//pages나 component, app의 모든 파일들의 모든 형식에서 tailwindcss를 탐색해서 컴파일 해준다는 걸 알려준다.(just in time)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { //테마부분에 원하는 값을 커스텀할 수 있다.
    extend: {
      margin:{
        tomaoto:"120px",
      },
      borderRadius: {
        "sexy-name": "11.11px",
      }
    }
  },
  plugins: [require("daisyui")],
  //plugins에 component를 주입하면 된다.
};
export default config;
