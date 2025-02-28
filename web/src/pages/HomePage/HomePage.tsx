import React, { useState, useEffect } from 'react'

interface HomePageProps {
  hasGeneratedRoutes: boolean
  routes: any[]
}

const HomePage: React.VFC<HomePageProps> = ({ hasGeneratedRoutes, routes }) => {
  const version = useVersion()
  return (
    <>
      <main>
        <section>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            :root {
              --foreground: rgb(26, 32, 44);
              --background: hsl(0, 0%, 100%);
              --background-2: rgb(253, 248, 246);
              --background-3: rgb(250, 234, 229);
              --highlight-1: rgb(191, 71, 34);
              --highlight-2: rgb(220, 94, 56);
              --highlight-3: rgba(220, 94, 56, 0.2);
              --space-0: 0.125rem;
              --space-1: 0.25rem;
              --space-2: 0.5rem;
              --space-3: 0.75rem;
              --space-4: 1rem;
              --space-5: 1.25rem;
              --space-6: 1.5rem;
              --space-7: 1.75rem;
              --space-8: 2rem;
              --space-9: 2.25rem;
              --space-10: 2.5rem;
              --space-11: 2.75rem;
              --space-12: 3rem;
              --space-14: 3.5rem;
              --space-16: 4rem;
              --space-18: 4.5rem;
              --space-20: 5rem;
            }

            @media (prefers-color-scheme: dark) {
              :root {
                --foreground: hsl(0, 0%, 100%);
                --background: hsl(250, 24%, 9%);
                --background-2: hsl(250, 21%, 11%);
                --background-3: rgb(53, 37, 32);
              }
            }

            html, body {
              margin: 0;
            }

            .container {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, "Noto Sans", sans-serif;
              color: var(--foreground);
              background-color: var(--background);
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }

            h1,
            h2,
            p {
              margin: 0;
            }

            h1,
            h2 {
              font-size: inherit;
              font-weight: inherit;
            }

            a {
              color: var(--highlight-1);
              text-decoration-thickness: 2px;
            }

            a:hover {
              color: var(--highlight-2);
            }

            /* Social */
            .social {
              display: flex;
              gap: var(--space-3);
              padding: var(--space-4) var(--space-5);
              justify-content: center;
            }

            .social-link {
              width: var(--space-6);
            }

            /* Content */
            .content-container {
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .content {
              padding: var(--space-5) var(--space-5) var(--space-8);
              position: relative;
            }

            /* Logo */
            .logo {
              position: fixed;
              top: 50%;
              left: 0%;
              transform: translate(-50%, -50%);
              max-height: 140vh;
              color: var(--background-2);
            }

            /* Intro */
            .intro {
              text-align: center;
              margin-bottom: var(--space-18);
            }

            .intro-heading {
              font-size: var(--space-5);
              line-height: 1;
              font-weight: 700;
            }

            .intro-logo {
              max-width: 23rem;
              margin: var(--space-4);
            }

            .intro-instructions-container {
              margin-top: var(--space-8);
            }

            .intro-instructions {
              font-size: var(--space-5);
              font-weight: 400;
              line-height: var(--space-7);
              margin-bottom: var(--space-2);
            }

            code {
              font-family: Fira Code,Fira Mono,Menlo,Monoco,monospace;
              font-size: 0.8em;
              padding: var(--space-1) var(--space-2);
              border-radius: var(--space-1);
              color: var(--highlight-2);
              background-color: var(--highlight-3);
            }

            .pages {
              font-size: var(--space-5);
              line-height: var(--space-7);
            }

            .pages-title {
              margin-bottom: var(--space-1);
              font-weight: 400;
            }

            .pages-list {
              margin: var(--space-2) 0;
              padding: 0;
              list-style-type: none;
            }

            .pages-item {
              margin: var(--space-4) 0;
            }

            .callout {
              font-size: var(--space-4);
              line-height: var(--space-6);
              font-weight: 400;
              margin: var(--space-12) auto 0;
              max-width: 32rem;
              text-align: left;
              border-left: 3px solid;
              border-color: var(--highlight-2);
              color: var(--foreground);
              background-color: var(--background-2);
              padding: var(--space-4);
            }

            /* Resources */
            .resources {
              display: flex;
              flex-wrap: wrap;
              max-width: 56rem;
              margin: auto;
              gap: var(--space-4);
              justify-content: center;
            }

            .resource {
              flex-basis: 21rem;
              padding: var(--space-6);
              border-radius: var(--space-1);
              border: 2px solid;
              position: relative;
              color: var(--background);
              background-color: var(--highlight-1);
              border-color: transparent;
            }

            .resource:hover {
              background-color: var(--highlight-2);
              border-color: var(--highlight-2);
            }

            .icon {
              fill: white;
              width: var(--space-6);
            }

            .icon-container {
              display: flex;
              align-items: center;
              gap: var(--space-2);
              margin-bottom: var(--space-2);
            }

            @media (prefers-color-scheme: dark) {
              .resource {
                color: var(--foreground);
                background-color: var(--background-2);
                border-color: var(--highlight-1);
              }
              .resource:hover {
                background-color: var(--highlight-3);
              }
            }

            .resource-link {
              position: absolute;
              inset: 0;
            }

            .resource-title {
              font-size: var(--space-5);
              line-height: 1;
              font-weight: 700;
            }

            .resource-description {
              font-weight: 500;
              font-size: var(--space-4);
              line-height: var(--space-6);
            }

            .footer {
              position: relative;
              text-align: center;
              font-weight: 400;
              padding: var(--space-5);
              font-size: var(--space-4);
              line-height: var(--space-6);
            }
          `,
            }}
          />
          <section className="container">
            <svg className="logo" fill="currentColor" viewBox="0 0 917 1000">
              <path
                clipRule="evenodd"
                d="m249.557 144.582 194.171 132.54c4.383 2.918 9.502 4.516 14.755 4.606 5.261-.038 10.394-1.641 14.755-4.606l194.319-132.986c7.55-5.406 11.714-14.418 10.957-23.717-.757-9.298-6.322-17.507-14.646-21.6024l-194.171-96.13614c-7.366-3.573948-15.947-3.573948-23.313 0l-193.581 96.13614c-8.474 4.1174-14.113 12.4854-14.783 21.9354-.67 9.451 3.73 18.541 11.537 23.83zm274.879 174.144c.016 8.789 4.318 17.01 11.509 21.991l155.662 106.389c9.965 6.87 23.298 6.012 32.313-2.081l130.579-116.789c5.819-5.199 9.051-12.729 8.823-20.56s-3.892-15.158-10.004-20.005l-124.677-99.702c-9.062-7.199-21.704-7.68-31.28-1.189l-161.416 110.401c-7.064 4.89-11.35 12.914-11.509 21.545zm-387.163 144.724c6.292 5.652 9.526 13.988 8.706 22.437-.817 8.499-5.726 16.052-13.132 20.208l-92.9545 55.72c-9.4227 5.633-21.32 4.82-29.90183-2.041-8.5818-6.861-12.06543-18.346-8.75546-28.865l34.37839-108.172c2.6969-8.57 9.5328-15.175 18.1483-17.533 8.609-2.505 17.8924-.309 24.4928 5.795zm504.168 11.293-168.056-115.007c-8.931-6.01-20.578-6.01-29.509 0l-168.056 115.007c-6.684 4.626-10.919 12.061-11.509 20.208-.435 8.203 2.816 16.169 8.853 21.693l167.909 150.222c4.842 4.319 11.089 6.698 17.558 6.687 6.465-.002 12.708-2.38 17.558-6.687l167.908-150.222c6.056-5.501 9.265-13.5 8.705-21.693-.469-8.146-4.666-15.612-11.361-20.208zm-448.247-29.718-130.4316-116.79c-5.8687-5.331-9.1073-12.995-8.8528-20.95.1419-7.841 3.7705-15.204 9.8856-20.06l124.6768-100.296c9.126-7.179 21.793-7.658 31.428-1.189l161.269 110.401c7.484 4.908 11.998 13.293 11.998 22.288 0 8.994-4.514 17.38-11.998 22.288l-155.515 106.388c-10.025 6.841-23.376 5.985-32.46-2.08zm669.715 167.756-132.792-79.495c-9.862-5.943-22.415-4.739-30.985 2.972l-162.301 144.873c-6.846 6.114-10.062 15.362-8.499 24.441 1.563 9.08 7.681 16.698 16.171 20.135l225.157 91.233c3.088 1.283 6.397 1.939 9.738 1.932 10.449.033 19.936-6.142 24.197-15.751l69.79-156.314c5.68-12.37 1.157-27.062-10.476-34.026zm18.443-190.043 34.379 108.171h-.295c2.542 8.091 1.097 16.919-3.889 23.761-4.986 6.841-12.915 10.876-21.342 10.86-4.728.016-9.37-1.269-13.427-3.715l-93.102-55.72c-7.254-4.243-11.992-11.789-12.689-20.208-.87-8.456 2.373-16.814 8.705-22.436l59.019-52.6c6.668-5.976 15.881-8.156 24.493-5.795 8.609 2.459 15.423 9.098 18.148 17.682zm-492.511 282.761c1.587-9.042-1.597-18.266-8.41-24.368l-162.302-144.873c-8.57-7.711-21.123-8.915-30.985-2.972l-132.7921 79.495c-11.4977 6.995-16.0467 21.502-10.6233 33.878l69.9374 156.314c5.794 13.034 20.774 19.134 33.936 13.818l225.009-91.232c8.492-3.407 14.632-10.995 16.23-20.06zm79.675 44.577 180.598 73.105c8.83 3.779 14.93 12.084 15.935 21.694 1.143 9.729-3.178 19.291-11.214 24.814l-180.745 125.556c-4.331 3.043-9.473 4.7-14.754 4.755-5.277-.082-10.411-1.737-14.755-4.755l-180.597-125.556c-8.066-5.508-12.439-15.061-11.362-24.814 1.206-9.71 7.526-18.006 16.526-21.694l180.597-73.105c6.351-2.532 13.421-2.532 19.771 0z"
                fillRule="evenodd"
              />
            </svg>

            <section className="content-container">
              <div className="content">
                <div className="intro">
                  <h1 className="intro-heading">Welcome to</h1>
                  <svg
                    viewBox="0 0 1265 241"
                    className="intro-logo"
                    fill="currentColor"
                  >
                    <path d="M295.283 112.89H305.052C314.626 112.89 321.692 111.288 326.25 108.083C330.809 104.878 333.089 99.8424 333.089 92.9752C333.089 86.1735 330.744 81.3337 326.055 78.4561C321.431 75.5784 314.235 74.1396 304.466 74.1396H295.283V112.89ZM295.283 137.612V192.647H265V49.2216H306.615C326.022 49.2216 340.383 52.786 349.696 59.9148C359.008 66.9781 363.665 77.7367 363.665 92.1904C363.665 100.627 361.353 108.148 356.729 114.754C352.105 121.294 345.56 126.428 337.094 130.156C358.585 162.399 372.587 183.229 379.1 192.647H345.495L311.402 137.612H295.283Z" />
                    <path d="M422.875 102.197C416.558 102.197 411.608 104.224 408.026 108.279C404.444 112.269 402.393 117.959 401.872 125.349H443.682C443.552 117.959 441.631 112.269 437.919 108.279C434.207 104.224 429.192 102.197 422.875 102.197ZM427.075 194.609C409.492 194.609 395.75 189.737 385.851 179.992C375.952 170.247 371.003 156.447 371.003 138.593C371.003 120.215 375.561 106.023 384.679 96.0164C393.862 85.9445 406.528 80.9086 422.679 80.9086C438.114 80.9086 450.13 85.3232 458.726 94.1524C467.323 102.982 471.621 115.179 471.621 130.745V145.264H401.188C401.514 153.766 404.021 160.404 408.71 165.178C413.399 169.953 419.977 172.34 428.443 172.34C435.021 172.34 441.24 171.653 447.101 170.28C452.963 168.906 459.085 166.715 465.467 163.707V186.859C460.257 189.475 454.689 191.404 448.762 192.647C442.836 193.955 435.607 194.609 427.075 194.609Z" />
                    <path d="M522.427 194.609C509.597 194.609 499.503 189.606 492.143 179.599C484.849 169.593 481.202 155.728 481.202 138.004C481.202 120.019 484.915 106.023 492.339 96.0164C499.828 85.9445 510.118 80.9086 523.208 80.9086C536.95 80.9086 547.435 86.2716 554.664 96.9974H555.641C554.143 88.8222 553.394 81.5299 553.394 75.1206V40H583.286V192.647H560.427L554.664 178.422H553.394C546.621 189.214 536.298 194.609 522.427 194.609ZM532.879 170.77C540.499 170.77 546.067 168.547 549.584 164.099C553.166 159.652 555.12 152.098 555.445 141.438V138.2C555.445 126.428 553.622 117.991 549.975 112.89C546.393 107.789 540.532 105.238 532.391 105.238C525.748 105.238 520.571 108.083 516.859 113.773C513.212 119.397 511.388 127.605 511.388 138.396C511.388 149.188 513.244 157.298 516.956 162.726C520.668 168.089 525.976 170.77 532.879 170.77Z" />
                    <path d="M696.221 192.647L687.82 154.289L676.488 105.827H675.805L655.876 192.647H623.835L592.77 82.9688H622.467L635.069 131.529C637.088 140.228 639.139 152.229 641.223 167.533H641.809C642.07 162.562 643.209 154.682 645.228 143.89L646.791 135.552L660.272 82.9688H693.095L705.893 135.552C706.153 136.99 706.544 139.116 707.065 141.928C707.651 144.74 708.205 147.749 708.726 150.954C709.247 154.093 709.702 157.199 710.093 160.273C710.549 163.282 710.81 165.702 710.875 167.533H711.461C712.047 162.824 713.089 156.382 714.587 148.207C716.085 139.966 717.159 134.407 717.811 131.529L730.901 82.9688H760.109L728.654 192.647H696.221Z" />
                    <path d="M793.527 137.612C793.527 148.468 795.285 156.676 798.802 162.235C802.384 167.795 808.18 170.574 816.19 170.574C824.135 170.574 829.834 167.827 833.286 162.333C836.802 156.774 838.561 148.534 838.561 137.612C838.561 126.755 836.802 118.613 833.286 113.184C829.769 107.756 824.005 105.042 815.995 105.042C808.049 105.042 802.318 107.756 798.802 113.184C795.285 118.547 793.527 126.69 793.527 137.612ZM869.039 137.612C869.039 155.466 864.35 169.43 854.972 179.501C845.594 189.573 832.537 194.609 815.799 194.609C805.314 194.609 796.066 192.32 788.056 187.742C780.046 183.098 773.891 176.46 769.593 167.827C765.295 159.194 763.146 149.122 763.146 137.612C763.146 119.692 767.802 105.761 777.115 95.8202C786.428 85.8791 799.518 80.9086 816.385 80.9086C826.871 80.9086 836.118 83.1977 844.129 87.7758C852.139 92.3539 858.294 98.9267 862.592 107.494C866.89 116.062 869.039 126.101 869.039 137.612Z" />
                    <path d="M909.392 137.612C909.392 148.468 911.151 156.676 914.667 162.235C918.249 167.795 924.046 170.574 932.056 170.574C940.001 170.574 945.7 167.827 949.151 162.333C952.668 156.774 954.426 148.534 954.426 137.612C954.426 126.755 952.668 118.613 949.151 113.184C945.635 107.756 939.871 105.042 931.86 105.042C923.915 105.042 918.184 107.756 914.667 113.184C911.151 118.547 909.392 126.69 909.392 137.612ZM984.905 137.612C984.905 155.466 980.216 169.43 970.838 179.501C961.46 189.573 948.402 194.609 931.665 194.609C921.18 194.609 911.932 192.32 903.922 187.742C895.911 183.098 889.757 176.46 885.459 167.827C881.16 159.194 879.011 149.122 879.011 137.612C879.011 119.692 883.668 105.761 892.981 95.8202C902.294 85.8791 915.384 80.9086 932.251 80.9086C942.736 80.9086 951.984 83.1977 959.995 87.7758C968.005 92.3539 974.159 98.9267 978.458 107.494C982.756 116.062 984.905 126.101 984.905 137.612Z" />
                    <path d="M1036.1 194.609C1023.27 194.609 1013.18 189.606 1005.82 179.599C998.524 169.593 994.877 155.728 994.877 138.004C994.877 120.019 998.589 106.023 1006.01 96.0164C1013.5 85.9445 1023.79 80.9086 1036.88 80.9086C1050.62 80.9086 1061.11 86.2716 1068.34 96.9974H1069.32C1067.82 88.8222 1067.07 81.5299 1067.07 75.1206V40H1096.96V192.647H1074.1L1068.34 178.422H1067.07C1060.29 189.214 1049.97 194.609 1036.1 194.609ZM1046.55 170.77C1054.17 170.77 1059.74 168.547 1063.26 164.099C1066.84 159.652 1068.79 152.098 1069.12 141.438V138.2C1069.12 126.428 1067.3 117.991 1063.65 112.89C1060.07 107.789 1054.21 105.238 1046.07 105.238C1039.42 105.238 1034.25 108.083 1030.53 113.773C1026.89 119.397 1025.06 127.605 1025.06 138.396C1025.06 149.188 1026.92 157.298 1030.63 162.726C1034.34 168.089 1039.65 170.77 1046.55 170.77Z" />
                    <path d="M1107.52 234.831C1100.68 234.831 1094.72 234.112 1089.64 232.673V207.362C1094.85 208.67 1099.61 209.324 1103.91 209.324C1110.55 209.324 1115.3 207.232 1118.17 203.046C1121.03 198.926 1122.47 192.451 1122.47 183.622V49.2216H1152.75V183.425C1152.75 200.168 1148.94 212.922 1141.32 221.685C1133.7 230.449 1122.43 234.831 1107.52 234.831Z" />
                    <path d="M1265 152.818C1265 165.767 1260.34 175.97 1251.03 183.425C1241.78 190.881 1228.89 194.609 1212.35 194.609C1197.11 194.609 1183.63 191.731 1171.9 185.976V157.723C1181.54 162.039 1189.68 165.08 1196.33 166.846C1203.03 168.612 1209.16 169.495 1214.69 169.495C1221.33 169.495 1226.41 168.22 1229.93 165.669C1233.51 163.118 1235.3 159.325 1235.3 154.289C1235.3 151.477 1234.52 148.992 1232.96 146.833C1231.4 144.61 1229.08 142.484 1226.02 140.457C1223.03 138.429 1216.87 135.192 1207.56 130.745C1198.83 126.624 1192.29 122.667 1187.92 118.874C1183.56 115.081 1180.08 110.666 1177.47 105.63C1174.87 100.595 1173.56 94.7083 1173.56 87.972C1173.56 75.2841 1177.83 65.3104 1186.36 58.0508C1194.96 50.7912 1206.81 47.1615 1221.92 47.1615C1229.34 47.1615 1236.41 48.0444 1243.12 49.8102C1249.89 51.5761 1256.96 54.0613 1264.32 57.266L1254.55 80.9086C1246.93 77.7694 1240.61 75.5784 1235.6 74.3358C1230.65 73.0932 1225.76 72.4718 1220.94 72.4718C1215.21 72.4718 1210.82 73.8126 1207.76 76.494C1204.69 79.1755 1203.16 82.6745 1203.16 86.991C1203.16 89.6724 1203.78 92.0269 1205.02 94.0543C1206.26 96.0164 1208.21 97.9457 1210.88 99.8424C1213.62 101.674 1220.03 105.009 1230.13 109.849C1243.48 116.258 1252.63 122.7 1257.58 129.175C1262.53 135.584 1265 143.465 1265 152.818Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M59.8719 34.8443L106.456 66.7864C107.508 67.4896 108.736 67.8748 109.996 67.8964C111.258 67.8873 112.49 67.501 113.536 66.7864L160.155 34.7368C161.967 33.4339 162.966 31.262 162.784 29.021C162.603 26.7802 161.267 24.8018 159.27 23.8148L112.686 0.645991C110.919 -0.21533 108.86 -0.21533 107.093 0.645991L60.6507 23.8148C58.6176 24.8071 57.2648 26.8238 57.104 29.1012C56.9433 31.3789 57.9989 33.5696 59.8719 34.8443V34.8443ZM125.819 76.813C125.823 78.9311 126.855 80.9124 128.58 82.1128L165.925 107.753C168.316 109.408 171.515 109.201 173.678 107.251L205.005 79.1049C206.401 77.8519 207.177 76.0372 207.122 74.1499C207.067 72.2626 206.188 70.4968 204.722 69.3287L174.81 45.3005C172.636 43.5656 169.603 43.4496 167.306 45.014L128.58 71.6206C126.885 72.7991 125.857 74.7329 125.819 76.813V76.813ZM32.9335 111.691C34.4431 113.054 35.219 115.063 35.0222 117.099C34.8262 119.147 33.6485 120.967 31.8717 121.969L9.57072 135.397C7.31009 136.755 4.45578 136.559 2.39689 134.906C0.338006 133.252 -0.497761 130.484 0.296343 127.949L8.54416 101.88C9.19118 99.8142 10.8312 98.2224 12.8982 97.6542C14.9636 97.0505 17.1908 97.5797 18.7743 99.0508L32.9335 111.691ZM153.89 114.413L113.571 86.6964C111.428 85.248 108.634 85.248 106.492 86.6964L66.1727 114.413C64.5692 115.528 63.5531 117.32 63.4116 119.283C63.3072 121.26 64.0872 123.18 65.5355 124.511L105.819 160.715C106.981 161.756 108.479 162.329 110.031 162.326C111.582 162.326 113.08 161.753 114.244 160.715L154.527 124.511C155.98 123.185 156.75 121.258 156.616 119.283C156.503 117.32 155.496 115.521 153.89 114.413V114.413ZM46.3497 107.251L15.0575 79.1046C13.6495 77.8199 12.8725 75.9728 12.9336 74.0557C12.9676 72.166 13.8382 70.3915 15.3053 69.2212L45.2168 45.0499C47.4063 43.3197 50.4453 43.2043 52.7568 44.7633L91.4473 71.37C93.2428 72.5528 94.3258 74.5736 94.3258 76.7414C94.3258 78.9089 93.2428 80.93 91.4473 82.1128L54.1373 107.752C51.7321 109.401 48.5291 109.195 46.3497 107.251V107.251ZM207.023 147.68L175.164 128.522C172.798 127.09 169.787 127.38 167.731 129.238L128.793 164.153C127.15 165.626 126.379 167.855 126.754 170.043C127.129 172.231 128.596 174.067 130.633 174.895L184.651 196.883C185.392 197.192 186.186 197.35 186.988 197.348C189.494 197.356 191.77 195.868 192.793 193.552L209.536 155.88C210.899 152.899 209.814 149.359 207.023 147.68ZM211.448 101.88L219.696 127.949H219.625C220.235 129.899 219.888 132.027 218.692 133.675C217.496 135.324 215.593 136.297 213.572 136.293C212.437 136.297 211.324 135.987 210.35 135.397L188.014 121.969C186.274 120.946 185.137 119.128 184.97 117.099C184.761 115.061 185.539 113.047 187.058 111.692L201.217 99.0151C202.817 97.5749 205.028 97.0495 207.094 97.6185C209.159 98.2111 210.794 99.8111 211.448 101.88V101.88ZM93.2879 170.025C93.6687 167.846 92.9048 165.623 91.2702 164.153L52.3319 129.238C50.2759 127.38 47.2643 127.09 44.8982 128.522L13.0397 147.68C10.2813 149.366 9.18991 152.862 10.491 155.845L27.2699 193.516C28.66 196.658 32.2539 198.128 35.4116 196.847L89.3941 174.86C91.4315 174.039 92.9045 172.21 93.2879 170.025V170.025ZM112.403 180.768L155.731 198.387C157.849 199.297 159.313 201.299 159.554 203.615C159.828 205.96 158.791 208.264 156.863 209.595L113.5 239.854C112.461 240.587 111.228 240.987 109.961 241C108.695 240.98 107.463 240.581 106.421 239.854L63.0932 209.595C61.1581 208.268 60.1089 205.965 60.3673 203.615C60.6567 201.275 62.1729 199.275 64.3321 198.387L107.66 180.768C109.183 180.158 110.88 180.158 112.403 180.768V180.768Z"
                      fill="var(--highlight-1)"
                    />
                  </svg>
                  <h1 className="intro-heading">on Kubernetes</h1>
                  {!hasGeneratedRoutes ? (
                    <div
                      className="intro-instructions-container"
                      data-cy="e2e-test-HomePage"
                    >
                      <p className="intro-instructions">
                        You’re seeing this because you don’t have any pages yet.
                      </p>
                      <p className="intro-instructions">
                        Type <code>yarn redwood generate page my-page</code> in
                        your CLI to get started!
                      </p>
                    </div>
                  ) : (
                    <div
                      className="intro-instructions-container"
                      data-cy="e2e-test-HomePage"
                    >
                      <div className="pages">
                        <p className="pages-title">List of Pages by path:</p>
                        <ul className="pages-list">
                          {routes.map((route) => {
                            if (!route.props.notfound) {
                              return (
                                <li key={route.key} className="pages-item">
                                  <code>
                                    {`${route.props.name} -> `}
                                    <a
                                      href={route.props.path}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {route.props.path}
                                    </a>
                                  </code>
                                </li>
                              )
                            }
                            return <div key={route.key}></div>
                          })}
                        </ul>
                      </div>
                      <div className="callout">
                        You’re seeing this because you don’t have a page at the{' '}
                        <code>/</code> path.
                        <br />
                        Type <code>yarn redwood generate page home /</code> in
                        your CLI to create one.
                      </div>
                    </div>
                  )}
                </div>
                <div className="resources">
                  <div className="resource">
                    <a
                      className="resource-link"
                      href="https://learn.redwoodjs.com/docs/tutorial/welcome-to-redwood/"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <div className="icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M4 5h16v11H4z" opacity=".3"></path>
                        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                      </svg>
                      <h2 className="resource-title">Tutorial</h2>
                    </div>

                    <p className="resource-description">
                      Start here to learn how to build full-stack apps with
                      Redwood.
                    </p>
                  </div>

                  <div className="resource">
                    <a
                      className="resource-link"
                      href="https://redwoodjs.com/docs/introduction"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <div className="icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M13 13l-3-2.25L7 13V4H6v16h12V4h-5z"
                          opacity=".3"
                        ></path>
                        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path>
                      </svg>
                      <h2 className="resource-title">Docs and Cookbook</h2>
                    </div>

                    <p className="resource-description">
                      Find in-depth information about Redwood features and API.
                    </p>
                  </div>

                  <div className="resource">
                    <a
                      className="resource-link"
                      href="https://redwoodjs.com/community"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <div className="icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17z"></path>
                        <path d="M4 4v12h14.83L20 17.17V4z" opacity=".3"></path>
                      </svg>
                      <h2 className="resource-title">Join the Community</h2>
                    </div>

                    <p className="resource-description">
                      Get help, share tips, and collaborate together on Redwood.
                    </p>
                  </div>

                  <div className="resource">
                    <a
                      className="resource-link"
                      href="https://redwoodjs.com/docs/contributing"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <div className="icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon"
                      >
                        <g>
                          <rect fill="none" height="24" width="24"></rect>
                        </g>
                        <g>
                          <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z"></path>
                          <path
                            d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z"
                            opacity=".3"
                          ></path>
                        </g>
                        <g>
                          <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z"></path>
                          <path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z"></path>
                          <path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z"></path>
                        </g>
                      </svg>
                      <h2 className="resource-title">Become a Contributor</h2>
                    </div>
                    <p className="resource-description">
                      Love Redwood and want to get involved? Contribute today!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="footer">
              <div className="social">
                <a
                  className="social-link"
                  href="https://github.com/redwoodjs/redwood"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to RedwoodJS GitHub repo"
                >
                  <svg viewBox="0 0 32 32" focusable="false">
                    <path
                      fill="currentColor"
                      d="M15.9995 -8.73473e-07C12.198 -0.00275596 8.5196 1.34817 5.62346 3.81077C2.72731 6.27336 0.802616 9.6867 0.194194 13.4393C-0.414229 17.1919 0.333374 21.0385 2.30307 24.29C4.27276 27.5415 7.33584 29.9855 10.9435 31.184C11.7435 31.344 12.0315 30.832 12.0315 30.416L12.0155 27.696C7.56755 28.656 6.62355 25.552 6.62355 25.552C5.88755 23.696 4.84755 23.2 4.84755 23.2C3.40755 22.208 4.95955 22.24 4.95955 22.24C6.55955 22.352 7.40755 23.888 7.40755 23.888C8.84755 26.32 11.1515 25.616 12.0635 25.216C12.2235 24.176 12.6235 23.472 13.0715 23.072C9.51955 22.672 5.79155 21.296 5.79155 15.168C5.79155 13.408 6.41555 11.984 7.43955 10.864C6.95565 9.4866 7.01283 7.97684 7.59955 6.64C7.59955 6.64 8.94355 6.208 11.9995 8.272C14.6192 7.56384 17.3799 7.56384 19.9995 8.272C23.0555 6.192 24.3995 6.64 24.3995 6.64C25.2795 8.832 24.7195 10.48 24.5595 10.864C25.5835 11.984 26.2075 13.424 26.2075 15.168C26.2075 21.312 22.4635 22.656 18.8955 23.056C19.4715 23.552 19.9835 24.528 19.9835 26.016L19.9675 30.416C19.9675 30.832 20.2555 31.344 21.0715 31.184C24.6806 29.985 27.7445 27.5398 29.7141 24.2866C31.6837 21.0334 32.4302 17.185 31.8197 13.4314C31.2092 9.67772 29.2816 6.26427 26.3825 3.80296C23.4835 1.34165 19.8025 -0.00657403 15.9995 -8.73473e-07Z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="social-link"
                  href="https://twitter.com/redwoodjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to RedwoodJS Twitter profile"
                >
                  <svg viewBox="0 0 34 34" focusable="false">
                    <path
                      fill="currentColor"
                      d="M10.693 31.025C23.528 31.025 30.532 20.4 30.532 11.186V10.285C31.892 9.282 33.065 8.075 34 6.664C32.725 7.225 31.382 7.599 29.988 7.769C31.4415 6.89552 32.5288 5.52436 33.048 3.91C31.688 4.726 30.192 5.287 28.628 5.61C27.5817 4.47537 26.1884 3.72011 24.6667 3.46265C23.1449 3.20519 21.5807 3.46011 20.2194 4.18742C18.8582 4.91474 17.7768 6.0733 17.1449 7.48142C16.513 8.88954 16.3664 10.4676 16.728 11.968C13.9549 11.8247 11.243 11.0998 8.76823 9.84043C6.29346 8.58108 4.11117 6.8154 2.363 4.658C1.46192 6.19488 1.18356 8.01846 1.58508 9.75418C1.98661 11.4899 3.03753 13.006 4.522 13.991C3.417 13.94 2.329 13.651 1.36 13.09V13.175C1.35653 14.7901 1.91405 16.3562 2.93729 17.6058C3.96053 18.8554 5.38596 19.7109 6.97 20.026C5.93906 20.3076 4.85718 20.3483 3.808 20.145C4.25151 21.5313 5.11789 22.744 6.2856 23.6129C7.4533 24.4818 8.86372 24.9634 10.319 24.99C8.87328 26.1262 7.21777 26.9662 5.44716 27.4621C3.67654 27.958 1.82554 28.1 0 27.88C3.19039 29.927 6.90238 31.0129 10.693 31.008"
                    ></path>
                  </svg>
                </a>
                <a
                  className="social-link"
                  href="https://community.redwoodjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to RedwoodJS community forum"
                >
                  <svg viewBox="0 0 32 32" focusable="false">
                    <path
                      fill="currentColor"
                      d="M16.1357143,0 C7.37857143,0 0,7.03571429 0,15.7214286 C0,16 0.00714285714,32 0.00714285714,32 L16.1357143,31.9857143 C24.9,31.9857143 32,24.6785714 32,15.9928571 C32,7.30714286 24.9,0 16.1357143,0 Z M16,25.1428571 C14.6142857,25.1428571 13.2928571,24.8357143 12.1142857,24.2785714 L6.32142857,25.7142857 L7.95714286,20.3571429 C7.25714286,19.0642857 6.85714286,17.5785714 6.85714286,16 C6.85714286,10.95 10.95,6.85714286 16,6.85714286 C21.05,6.85714286 25.1428571,10.95 25.1428571,16 C25.1428571,21.05 21.05,25.1428571 16,25.1428571 Z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="social-link"
                  href="https://discord.gg/jjSYEQd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to RedwoodJS Discord server"
                >
                  <svg viewBox="0 0 36 36" focusable="false">
                    <path
                      fill="currentColor"
                      d="M29.9699 7.7544C27.1043 5.44752 22.5705 5.05656 22.3761 5.04288C22.2284 5.03072 22.0806 5.0648 21.9531 5.1404C21.8257 5.216 21.7249 5.32937 21.6647 5.4648C21.5783 5.65936 21.5049 5.85949 21.4451 6.06384C23.3409 6.38424 25.6694 7.02864 27.7761 8.33616C27.8565 8.38604 27.9262 8.45126 27.9814 8.52809C28.0366 8.60493 28.0761 8.69187 28.0976 8.78397C28.1192 8.87607 28.1224 8.97151 28.1071 9.06485C28.0917 9.15819 28.0582 9.24759 28.0083 9.32796C27.9584 9.40833 27.8932 9.47809 27.8164 9.53325C27.7395 9.58842 27.6526 9.62791 27.5605 9.64947C27.4684 9.67103 27.373 9.67424 27.2796 9.65892C27.1863 9.6436 27.0969 9.61004 27.0165 9.56016C23.3949 7.3116 18.8719 7.2 17.9999 7.2C17.1287 7.2 12.6028 7.31232 8.98338 9.55944C8.90301 9.60932 8.81361 9.64288 8.72027 9.6582C8.62693 9.67352 8.53149 9.67031 8.43939 9.64875C8.25339 9.6052 8.09231 9.48955 7.99158 9.32724C7.89085 9.16493 7.85873 8.96925 7.90227 8.78325C7.94582 8.59725 8.06147 8.43617 8.22378 8.33544C10.3305 7.03152 12.659 6.38424 14.5547 6.06672C14.4453 5.7096 14.3459 5.48424 14.3387 5.4648C14.2788 5.32841 14.1776 5.2143 14.0493 5.13859C13.921 5.06288 13.7721 5.0294 13.6238 5.04288C13.4294 5.05728 8.89554 5.44752 5.99034 7.78536C4.47474 9.18792 1.43994 17.3894 1.43994 24.48C1.43994 24.6067 1.47378 24.7277 1.5357 24.8371C3.62802 28.5163 9.3405 29.4775 10.6423 29.52H10.6646C10.7782 29.5203 10.8903 29.4937 10.9916 29.4424C11.093 29.3911 11.1808 29.3165 11.2478 29.2248L12.5632 27.4133C9.01146 26.4967 7.19706 24.9386 7.09338 24.8458C6.95017 24.7194 6.86303 24.5412 6.85115 24.3506C6.83927 24.1599 6.90361 23.9723 7.03002 23.8291C7.15643 23.6859 7.33456 23.5988 7.52522 23.5869C7.71588 23.575 7.90345 23.6394 8.04666 23.7658C8.08842 23.8054 11.4299 26.64 17.9999 26.64C24.5807 26.64 27.9223 23.7938 27.9561 23.7658C28.0998 23.6403 28.2874 23.5769 28.4777 23.5896C28.668 23.6023 28.8456 23.69 28.9713 23.8334C29.0335 23.9042 29.0812 23.9864 29.1117 24.0756C29.1421 24.1647 29.1546 24.259 29.1486 24.353C29.1426 24.447 29.1181 24.5389 29.0766 24.6235C29.035 24.708 28.9772 24.7836 28.9065 24.8458C28.8028 24.9386 26.9884 26.4967 23.4367 27.4133L24.7528 29.2248C24.8198 29.3164 24.9074 29.3909 25.0087 29.4422C25.1099 29.4935 25.2218 29.5202 25.3353 29.52H25.3569C26.6601 29.4775 32.3719 28.5156 34.4649 24.8371C34.5261 24.7277 34.5599 24.6067 34.5599 24.48C34.5599 17.3894 31.5251 9.18864 29.9699 7.7544V7.7544ZM13.3199 21.6C11.9275 21.6 10.7999 20.3112 10.7999 18.72C10.7999 17.1288 11.9275 15.84 13.3199 15.84C14.7124 15.84 15.8399 17.1288 15.8399 18.72C15.8399 20.3112 14.7124 21.6 13.3199 21.6ZM22.6799 21.6C21.2875 21.6 20.1599 20.3112 20.1599 18.72C20.1599 17.1288 21.2875 15.84 22.6799 15.84C24.0724 15.84 25.1999 17.1288 25.1999 18.72C25.1999 20.3112 24.0724 21.6 22.6799 21.6Z"
                    ></path>
                  </svg>
                </a>
              </div>
              {version && (
                <>
                  RedwoodJS version{' '}
                  <a
                    href="https://github.com/redwoodjs/redwood/releases"
                    target="_blank"
                    rel="noreferrer"
                  >
                    v{version}
                  </a>
                </>
              )}
            </section>
          </section>
        </section>
      </main>
    </>
  )
}

const useVersion = () => {
  const [version, setVersion] = useState(null)
  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await global.fetch(
          `${global.__REDWOOD__API_PROXY_PATH}/graphql`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              query: 'query RedwoodVersion { redwood { version } }',
            }),
          }
        )

        const versionData = await response.json()
        setVersion(versionData?.data?.redwood?.version || null)
      } catch (err) {
        console.error('Unable to get Redwood version: ', err)
      }
    }

    if (!global.fetch) {
      return
    }

    fetchVersion()
  }, [])
  return version
}

export default HomePage
