import React from "react";

function SvgCamera (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_b_2220_5207)" fill="#D9B70D">
        <path d="M24.738 6.28a.757.757 0 00-.727-.047l-2.684 1.256a4.962 4.962 0 00.671-2.495A5 5 0 0017.005 0a4.994 4.994 0 00-4.237 2.355A4.994 4.994 0 008.53 0a5 5 0 00-4.994 4.994c0 1.555.715 2.947 1.834 3.863a.753.753 0 00-.14.437v6.716c0 .418.34.757.758.757h1.647l.986 2.198a.757.757 0 00.69.447h1.421l-5.557 5.303a.757.757 0 001.045 1.095l5.645-5.387v6.82a.757.757 0 101.513 0v-6.872l5.658 5.166a.754.754 0 001.069-.048.757.757 0 00-.049-1.07l-5.484-5.007h1.36a.757.757 0 00.69-.447l.987-2.198h1.479l4.922 2.304a.755.755 0 001.078-.685V6.918c0-.258-.133-.5-.351-.638zm-11.97 1.352c.205.329.448.633.722.905h-1.445c.275-.272.517-.576.723-.905zm4.237-6.119a3.484 3.484 0 013.48 3.48 3.484 3.484 0 01-3.48 3.48 3.484 3.484 0 01-3.48-3.48 3.484 3.484 0 013.48-3.48zm-8.474 0a3.484 3.484 0 013.48 3.48 3.484 3.484 0 01-3.48 3.48 3.484 3.484 0 01-3.48-3.48 3.484 3.484 0 013.48-3.48zM6.745 10.05H18.5v5.204H6.745V10.05zm8.698 7.848h-5.64l-.509-1.131h6.657l-.508 1.131zm8.132-.702l-3.562-1.667V9.775l3.562-1.667v9.088z" />
        <path d="M3.668 10.216a.757.757 0 00-.757.757v3.358a.757.757 0 001.513 0v-3.358a.757.757 0 00-.756-.757z" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_b_2220_5207"
          x={-4}
          y={-4}
          width={36}
          height={36}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2220_5207"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2220_5207"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCamera ;