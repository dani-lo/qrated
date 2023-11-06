"use client";

import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faNewspaper,
  faTags,
  faUserTie,
  faClone,
  faBinoculars,
  faComment,
  faPeopleGroup,
  faRss
} from "@fortawesome/free-solid-svg-icons"

import { cnLogo } from "@/src/styles/classnames.tailwind"
import { usePathname } from 'next/navigation';

const cname = (isActive: boolean) => {

    if (isActive) {
      return 'text-red-600 text-sm py-4'
    }
    return 'text-white text-sm py-4'
}

export const HeaderComponent = ()  => {
    
    const pathname = usePathname()
    const appTitle = process.env.APP_TITLE || 'CryptoMob'
    
    return <div className="navbar">
        {/* <div className="bg-white rounded shadow-lg py-5 px-7"> */}
        <div>
            <h2 className={ cnLogo }>{ appTitle }</h2>
            <nav>
                <ul className="hiddenX md:flexX flex-autoX space-x-2X">
                    <li  className={ cname(pathname.indexOf('articles') !== -1) }>
                        <FontAwesomeIcon icon={faNewspaper} />
                        <Link href="/articles">Articles</Link>
                    </li>
                    <li className="separate"><span /></li>
                    <li  className={ cname(pathname.indexOf('tags') !== -1) }>
                        <FontAwesomeIcon icon={faTags} />
                        <Link href="/tags">Tags</Link>
                    </li>
                    <li  className={ cname(pathname.indexOf('categories') !== -1) }>
                        <FontAwesomeIcon icon={faClone} />
                        <Link href="/categories">Categories</Link>
                    </li>
                    <li  className={ cname(pathname.indexOf('authors') !== -1) }>
                        <FontAwesomeIcon icon={faUserTie} />
                        <Link href="/authors">Authors</Link>
                    </li>
                    <li  className={ cname(pathname.indexOf('watchlists') !== -1) }>
                        <FontAwesomeIcon icon={faBinoculars} />
                        <Link href="/watchlists">WatchLists</Link>
                    </li>
                    <li  className={ cname(pathname.indexOf('comments') !== -1) }>
                        <FontAwesomeIcon icon={faComment} />
                        <Link href="/comments">Comments</Link>
                    </li>
                    <li className="separate"><span /></li>
                    <li  className={ cname(pathname.indexOf('reviewers') !== -1) }>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <Link href="/reviewers">Reviewers</Link>
                    </li>
                    <li  className={ cname(pathname.indexOf('sources') !== -1) }>
                        <FontAwesomeIcon icon={faRss} />
                        <Link href="/sources">ETL</Link>
                    </li>
                </ul>
                {/* <div className=" flex space-x-5 justify-center items-center pl-2">
                    <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        />
                        <div>
                        </div>
                        <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                        <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
                    </div>
                    <FontAwesomeIcon
                        icon={faBars}
                    />
                </div> */}
            </nav>

        {/* <div className="block md:hidden w-full mt-5 ">
            <div   className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                <div className="flex space-x-2">
                    <span id="s1" className="font-semibold text-sm leading-3 hidden">Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">Collections</p>
                </div>
                
            </div>
            <div className=" relative">
                <ul id="list" className=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md">
                <li  className={ cnMobHeaderLinkClassName }><Link href="/articles">Articles</Link></li>
                    <li  className={ cnMobHeaderLinkClassName }><Link href="/tweets">Tweets</Link></li>
                    <li  className={ cnMobHeaderLinkClassName }><Link href="/tags">Tags</Link></li>
                    <li  className={ cnMobHeaderLinkClassName }><Link href="/categories">Categories</Link></li>
                </ul>
            </div>
        </div> */}
    </div>
    <div style={{ position: 'absolute', left: '1rem', bottom: 0 }} className="logoimg">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1192.000000 1280.000000" preserveAspectRatio="xMidYMid meet" width="112.000000pt" height="180.000000pt">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M5160 12790 c-593 -41 -1144 -151 -1680 -335 -811 -279 -1460 -654 -2096 -1211 -469 -411 -883 -895 -1176 -1378 -208 -343 -207 -346 5 -38 583 845 1428 1578 2337 2026 620 306 1266 509 1931 606 549 80 1157 85 1689 14 1147 -152 2233 -622 3121 -1352 839 -689 1467 -1559 1863 -2584 255 -661 396 -1434 396 -2173 0 -1471 -532 -2904 -1496 -4030 -161 -188 -477 -505 -654 -657 -868 -742 -1911 -1228 -3043 -1418 -384 -64 -676 -90 -1027 -90 -351 0 -573 16 -925 67 -264 38 -356 57 -620 123 -405 102 -791 239 -1135 402 -129 61 -238 113 -242 115 -5 2 -8 2 -8 0 0 -3 107 -64 237 -135 515 -283 1096 -491 1723 -617 446 -90 903 -132 1320 -122 1434 35 2793 533 3890 1426 380 309 784 729 1063 1106 350 473 651 1014 854 1535 446 1146 549 2417 297 3655 -48 236 -93 402 -173 643 -327 983 -890 1894 -1600 2588 -248 242 -280 271 -566 495 -492 387 -1140 746 -1748 968 -507 185 -1041 304 -1602 356 -199 19 -754 27 -935 15z"/>
<path d="M5155 12209 c-394 -28 -819 -100 -1169 -200 -866 -247 -1736 -743 -2346 -1340 -173 -169 -165 -165 79 44 199 169 586 431 871 589 482 268 1024 473 1535 583 727 155 1535 171 2230 44 552 -101 995 -243 1470 -473 837 -405 1574 -1024 2115 -1776 93 -129 199 -287 235 -350 178 -306 216 -376 284 -524 310 -674 478 -1318 531 -2036 13 -175 13 -557 0 -735 -53 -727 -238 -1422 -549 -2061 -528 -1085 -1348 -1940 -2411 -2514 -1141 -617 -2493 -811 -3821 -550 -449 88 -982 270 -1394 477 -230 116 -510 284 -726 434 -216 151 -296 214 -528 412 -50 43 -91 76 -91 74 0 -2 84 -85 188 -183 402 -384 870 -707 1389 -959 506 -247 987 -404 1500 -490 385 -64 588 -80 1023 -80 353 1 552 12 765 45 198 31 277 45 425 76 927 198 1772 613 2512 1236 173 145 565 538 702 703 541 651 909 1345 1141 2151 169 589 252 1256 225 1814 -42 873 -250 1663 -643 2450 -376 754 -1041 1531 -1753 2047 -890 646 -1929 1023 -3014 1092 -188 12 -597 12 -775 0z"/>
<path d="M5335 11694 c-233 -14 -515 -50 -744 -95 -264 -51 -275 -54 -581 -146 -155 -47 -534 -195 -662 -258 -77 -39 -387 -209 -384 -212 1 -2 92 40 202 91 266 126 612 249 918 326 1188 301 2443 171 3551 -369 400 -195 716 -399 1060 -685 156 -130 473 -447 605 -606 787 -946 1209 -2095 1210 -3297 1 -1509 -668 -2935 -1835 -3910 -1003 -837 -2318 -1264 -3613 -1173 -635 45 -1241 201 -1847 474 -787 355 -1569 1010 -2067 1732 -66 96 -122 174 -125 174 -3 0 1 -10 9 -23 8 -12 60 -97 116 -189 95 -157 339 -491 440 -603 532 -588 1038 -978 1654 -1274 565 -273 1137 -434 1798 -507 195 -22 750 -25 945 -6 701 70 1277 233 1880 532 751 372 1376 889 1880 1555 486 642 840 1436 980 2200 97 531 115 1121 49 1650 -24 197 -83 523 -114 630 -15 55 -47 166 -69 247 -23 82 -87 262 -142 400 -332 837 -854 1564 -1523 2123 -925 772 -2084 1201 -3296 1219 -129 2 -262 2 -295 0z"/>
<path d="M5300 11199 c-120 -6 -425 -42 -545 -65 -68 -13 -374 -88 -371 -92 2 -1 93 13 202 32 758 132 1610 63 2323 -191 1071 -380 1935 -1078 2504 -2023 338 -563 564 -1241 633 -1895 90 -870 -60 -1731 -439 -2519 -343 -711 -894 -1347 -1557 -1795 -1104 -747 -2444 -988 -3728 -671 -327 81 -617 188 -947 350 -700 345 -1266 816 -1718 1429 -259 352 -508 816 -642 1199 -32 89 -59 161 -61 159 -11 -11 119 -406 193 -588 233 -567 584 -1092 1017 -1524 300 -300 588 -522 956 -740 974 -576 2139 -783 3260 -579 738 134 1448 444 2035 889 192 145 291 231 479 415 418 410 724 831 962 1325 408 849 565 1799 449 2710 -165 1298 -845 2471 -1879 3240 -411 305 -913 565 -1396 721 -534 174 -1108 244 -1730 213z"/>
<path d="M5600 10756 c3 -2 73 -10 155 -16 371 -28 850 -140 1210 -282 583 -230 1063 -551 1510 -1009 709 -726 1123 -1645 1195 -2652 101 -1415 -516 -2790 -1637 -3645 -594 -452 -1270 -729 -2038 -833 -196 -27 -650 -37 -862 -19 -1217 101 -2300 699 -3056 1688 -313 409 -547 881 -698 1402 -70 240 -132 578 -150 805 -6 83 -14 152 -16 155 -14 14 8 -387 32 -565 70 -535 272 -1132 536 -1581 418 -713 1067 -1322 1800 -1690 914 -458 1980 -579 2979 -338 890 214 1734 732 2311 1419 432 514 749 1129 908 1760 173 685 178 1416 15 2095 -124 517 -359 1043 -658 1468 -416 592 -1009 1104 -1617 1395 -248 119 -304 143 -504 212 -408 140 -809 215 -1235 230 -102 4 -183 4 -180 1z"/>
<path d="M6685 10190 c28 -10 91 -33 140 -51 50 -17 171 -70 269 -116 1047 -490 1831 -1439 2119 -2568 88 -346 111 -539 111 -940 1 -276 -3 -342 -22 -484 -98 -720 -368 -1361 -802 -1907 -281 -353 -637 -666 -1020 -899 -52 -32 -169 -95 -260 -141 -416 -207 -825 -327 -1315 -386 -143 -17 -643 -17 -790 0 -932 107 -1746 504 -2375 1159 -693 722 -1090 1696 -1090 2677 0 251 22 522 56 700 14 70 23 130 21 133 -11 10 -78 -316 -101 -487 -83 -617 -9 -1285 205 -1847 453 -1193 1395 -2068 2602 -2419 856 -248 1756 -204 2592 128 510 202 924 477 1331 883 668 668 1057 1496 1155 2460 18 173 15 559 -5 740 -95 868 -438 1631 -1025 2280 -429 473 -1096 893 -1693 1065 -147 43 -182 50 -103 20z"/>
<path d="M7400 9495 c0 -2 50 -38 111 -81 149 -103 357 -282 510 -439 555 -571 891 -1302 980 -2135 15 -140 15 -517 0 -660 -127 -1208 -841 -2249 -1910 -2785 -389 -195 -765 -303 -1214 -351 -187 -20 -600 -14 -777 10 -774 108 -1445 432 -1989 961 -306 298 -524 596 -701 960 -158 322 -253 616 -315 970 -44 255 -50 328 -49 625 0 258 3 302 28 465 53 352 164 728 297 1004 32 68 59 126 59 130 0 3 -29 -46 -65 -109 -148 -264 -284 -645 -350 -982 -54 -277 -68 -450 -62 -748 6 -270 18 -388 67 -630 201 -1003 817 -1866 1700 -2383 445 -260 906 -413 1445 -479 135 -17 649 -17 785 0 277 34 515 86 742 163 667 225 1265 642 1692 1181 529 670 803 1478 783 2318 -6 247 -22 397 -68 625 -67 334 -180 657 -338 960 -231 444 -569 845 -976 1156 -127 97 -385 268 -385 254z"/>
<path d="M4705 8974 c-298 -95 -614 -265 -860 -464 -431 -348 -759 -856 -900 -1393 -136 -519 -119 -1039 51 -1552 264 -797 897 -1436 1694 -1708 890 -304 1877 -129 2596 461 130 106 324 304 416 422 272 352 459 772 533 1200 40 230 46 561 16 786 -12 88 -31 192 -41 230 -19 71 -27 62 -10 -12 32 -141 40 -543 14 -753 -67 -543 -296 -1047 -667 -1462 -633 -710 -1631 -1019 -2561 -795 -1030 248 -1804 1095 -1971 2156 -23 141 -31 507 -15 653 66 616 333 1171 774 1613 162 161 304 273 498 392 128 78 353 186 461 222 37 12 67 24 67 26 0 7 -12 4 -95 -22z"/>
<path d="M3940 8901 c-287 -175 -600 -469 -808 -758 -243 -338 -412 -730 -495 -1143 -46 -227 -52 -301 -51 -590 0 -312 16 -445 80 -701 286 -1138 1211 -2008 2359 -2218 196 -36 306 -45 540 -45 512 0 934 102 1382 334 275 142 502 309 729 535 506 503 797 1132 864 1865 38 424 -44 929 -217 1343 -49 118 -139 297 -149 297 -5 0 12 -43 41 -101 45 -89 124 -316 165 -479 56 -217 80 -397 87 -635 23 -807 -286 -1587 -850 -2147 -920 -915 -2340 -1107 -3455 -467 -799 459 -1326 1257 -1437 2179 -19 161 -19 477 0 644 89 761 446 1433 1019 1918 71 60 163 132 205 160 75 50 99 68 91 68 -3 0 -48 -27 -100 -59z"/>
<path d="M5205 8844 c-994 -134 -1821 -895 -2039 -1874 -72 -325 -76 -725 -11 -1045 92 -451 321 -884 645 -1219 206 -213 412 -362 685 -496 254 -125 447 -188 715 -231 161 -26 522 -32 680 -11 699 93 1295 452 1705 1027 253 355 410 814 430 1255 l4 105 -13 -105 c-80 -611 -308 -1076 -727 -1485 -198 -193 -379 -321 -624 -440 -230 -112 -430 -175 -685 -216 -198 -32 -531 -32 -720 0 -515 87 -965 314 -1315 665 -387 388 -623 882 -686 1435 -17 154 -7 494 20 646 88 502 324 951 684 1307 389 385 922 637 1447 687 l85 8 -90 0 c-49 1 -135 -5 -190 -13z"/>
<path d="M7904 8683 c4 -7 40 -52 82 -100 100 -117 245 -329 334 -488 306 -546 449 -1196 400 -1811 -51 -633 -258 -1184 -630 -1679 -542 -721 -1350 -1171 -2254 -1256 -159 -15 -549 -6 -691 15 -504 75 -927 236 -1335 508 -207 137 -292 208 -491 407 -263 264 -440 511 -599 836 -287 586 -385 1226 -289 1890 81 565 341 1146 707 1580 l75 90 -72 -70 c-98 -94 -267 -311 -367 -471 -279 -444 -441 -929 -485 -1453 -14 -173 -6 -538 15 -693 85 -603 317 -1144 692 -1613 102 -127 341 -370 464 -471 508 -419 1092 -663 1785 -745 145 -18 513 -15 671 4 982 121 1814 621 2366 1422 219 319 395 723 483 1110 97 426 102 946 14 1374 -97 476 -316 947 -613 1323 -93 117 -279 324 -262 291z"/>
<path d="M5350 8641 c-529 -50 -1037 -296 -1402 -679 -320 -337 -520 -751 -595 -1232 -21 -139 -24 -460 -5 -595 56 -392 199 -748 422 -1050 588 -794 1608 -1111 2541 -789 640 220 1173 765 1370 1399 28 88 22 91 -10 5 -246 -657 -813 -1166 -1503 -1349 -166 -45 -283 -61 -469 -68 -495 -17 -962 126 -1361 417 -127 93 -362 324 -451 445 -234 317 -375 679 -418 1075 -16 146 -6 434 20 582 60 342 200 667 408 946 85 114 312 338 437 430 310 229 679 377 1051 422 186 23 425 17 647 -15 20 -3 13 1 -17 10 -134 39 -478 63 -665 46z"/>
<path d="M5375 8439 c-957 -91 -1712 -837 -1826 -1803 -17 -143 -6 -452 20 -592 104 -552 431 -1041 903 -1348 257 -167 585 -282 900 -316 485 -51 1004 92 1400 387 171 127 396 367 476 508 l23 40 -23 -29 c-139 -175 -221 -262 -353 -370 -557 -460 -1330 -584 -1992 -321 -468 187 -828 519 -1049 970 -530 1082 43 2389 1202 2740 192 58 314 77 541 82 157 4 229 2 318 -11 187 -27 380 -82 533 -152 81 -37 93 -38 28 -1 -134 75 -384 160 -561 191 -201 35 -355 42 -540 25z"/>
<path d="M5353 8250 c-628 -79 -1164 -461 -1438 -1023 -248 -508 -258 -1059 -30 -1579 174 -397 502 -731 900 -919 559 -263 1225 -225 1742 99 98 62 236 167 278 213 20 21 6 13 -40 -23 -545 -432 -1294 -520 -1913 -223 -531 255 -887 725 -999 1319 -25 132 -24 455 1 591 50 275 152 516 314 745 86 122 290 326 412 412 236 167 525 280 816 318 136 18 451 8 584 -19 281 -56 576 -193 785 -364 34 -28 42 -32 25 -13 -68 77 -261 211 -421 291 -117 59 -330 130 -469 155 -131 24 -426 35 -547 20z"/>
<path d="M5334 8075 c-421 -64 -797 -278 -1066 -605 -170 -208 -306 -499 -354 -765 -26 -139 -26 -460 -1 -595 69 -371 237 -678 513 -939 426 -403 1058 -550 1615 -376 98 31 241 88 270 109 29 20 17 21 -21 1 -43 -22 -185 -72 -260 -90 -369 -94 -796 -47 -1135 122 -333 167 -584 422 -745 756 -69 142 -100 232 -132 377 -20 92 -23 132 -22 330 0 195 3 238 22 323 112 503 432 912 887 1132 448 217 960 217 1422 0 217 -102 433 -274 588 -470 57 -72 65 -79 41 -40 -41 67 -130 176 -211 258 -230 232 -511 384 -838 453 -153 32 -429 41 -573 19z"/>
<path d="M5445 7930 c-432 -41 -816 -249 -1080 -585 -224 -285 -338 -642 -322 -1010 6 -153 26 -259 74 -410 170 -531 633 -932 1184 -1026 106 -18 149 -20 299 -16 258 9 278 22 33 22 -181 0 -221 3 -312 23 -143 32 -256 74 -392 143 -392 203 -665 557 -771 1003 -30 127 -33 476 -4 606 87 400 310 724 649 944 153 100 314 166 511 208 146 32 436 32 583 0 390 -84 733 -314 948 -637 51 -77 134 -233 150 -283 4 -13 9 -21 11 -19 7 7 -39 123 -86 217 -212 423 -636 732 -1105 805 -120 18 -272 25 -370 15z"/>
<path d="M5330 7773 c-295 -51 -614 -229 -803 -448 -207 -239 -326 -525 -345 -828 -21 -319 56 -611 230 -872 68 -103 219 -259 328 -341 185 -139 451 -239 685 -258 66 -5 65 -5 -30 13 -298 56 -522 170 -730 372 -122 118 -209 236 -276 374 -90 186 -128 339 -136 555 -15 369 124 719 391 986 367 366 884 484 1394 318 90 -29 267 -124 353 -188 285 -215 474 -521 539 -875 18 -96 19 -100 14 -36 -18 233 -118 498 -258 685 -80 106 -237 259 -336 325 -162 108 -359 187 -549 219 -118 20 -354 20 -471 -1z"/>
<path d="M5443 7660 c-669 -71 -1167 -643 -1140 -1310 12 -296 114 -552 311 -782 104 -121 289 -254 442 -318 115 -48 118 -46 14 7 -129 65 -224 130 -315 215 -184 171 -317 411 -371 668 -25 117 -25 353 0 470 101 470 433 822 896 948 87 24 112 26 295 26 174 1 211 -2 287 -21 474 -121 818 -480 925 -965 13 -62 18 -125 18 -253 0 -169 7 -171 21 -5 7 94 -8 271 -32 365 -62 239 -180 442 -358 613 -206 198 -456 311 -755 341 -113 12 -131 12 -238 1z"/>
<path d="M5372 7535 c-276 -49 -538 -203 -708 -419 -78 -99 -175 -288 -209 -410 -14 -49 -31 -142 -37 -207 -27 -265 57 -558 221 -776 67 -89 174 -194 247 -243 l49 -32 -45 38 c-183 156 -298 320 -365 518 -76 226 -82 455 -19 672 111 385 408 673 799 775 78 20 114 24 265 24 152 0 187 -3 264 -23 446 -118 772 -477 836 -921 26 -177 3 -400 -58 -564 -12 -31 -20 -57 -17 -57 17 0 86 213 106 326 19 113 7 337 -25 459 -35 134 -126 316 -212 423 -162 202 -408 354 -659 407 -110 23 -328 28 -433 10z"/>
<path d="M5435 7439 c-423 -54 -776 -363 -887 -776 -29 -112 -36 -328 -13 -448 25 -137 79 -267 161 -390 61 -91 86 -112 30 -25 -65 102 -99 177 -131 286 -131 451 65 938 472 1167 347 196 783 167 1102 -73 183 -138 316 -340 372 -561 26 -105 36 -297 20 -399 -24 -155 -81 -301 -168 -428 -25 -37 -39 -61 -29 -53 35 29 128 182 165 272 99 238 105 498 16 745 -132 372 -466 633 -870 683 -101 12 -140 12 -240 0z"/>
<path d="M5385 7336 c-465 -91 -798 -511 -771 -971 6 -107 36 -249 62 -293 8 -15 13 -19 10 -9 -109 357 -28 714 221 963 258 258 652 339 990 204 220 -88 412 -278 504 -499 98 -235 89 -526 -21 -756 -58 -119 -151 -238 -255 -324 -22 -18 -30 -28 -18 -22 12 6 61 48 109 93 195 184 294 417 294 686 -1 430 -295 804 -720 916 -88 24 -312 30 -405 12z"/>
<path d="M5475 7263 c-310 -38 -552 -207 -689 -480 -57 -115 -77 -200 -81 -343 -1 -69 -1 -102 1 -75 8 110 27 212 52 284 95 267 293 454 567 537 79 23 107 27 225 27 118 0 146 -4 225 -27 279 -84 474 -272 566 -546 41 -122 51 -290 25 -418 -50 -248 -210 -463 -431 -581 -67 -36 -82 -47 -43 -32 92 35 180 93 267 175 278 266 344 668 165 1017 -103 199 -269 343 -482 415 -132 45 -258 61 -367 47z"/>
<path d="M5410 7176 c-292 -62 -517 -266 -599 -542 -11 -39 -21 -82 -20 -95 0 -13 7 2 14 33 52 213 222 415 428 508 296 133 644 63 864 -173 128 -137 192 -289 201 -473 10 -231 -56 -410 -212 -572 -101 -105 -215 -173 -361 -213 -54 -15 -60 -18 -25 -14 70 9 189 53 265 97 102 60 230 193 282 293 53 103 80 190 92 292 28 261 -77 523 -278 689 -74 62 -215 135 -306 159 -84 22 -264 28 -345 11z"/>
<path d="M5434 7110 c-72 -13 -174 -51 -241 -91 -73 -43 -198 -168 -240 -239 -41 -70 -55 -111 -16 -48 93 153 234 266 395 319 63 21 92 24 213 24 120 0 150 -3 210 -23 206 -68 367 -227 438 -431 39 -112 48 -260 22 -375 -33 -149 -131 -303 -248 -391 -118 -89 -221 -130 -375 -150 -84 -11 -90 -13 -42 -14 192 -4 379 75 523 221 129 132 197 303 197 496 0 318 -218 603 -525 687 -72 19 -240 28 -311 15z"/>
<path d="M5480 7049 c-152 -18 -339 -118 -411 -221 -16 -23 -3 -14 44 29 136 126 333 191 505 166 334 -49 567 -326 549 -653 -15 -274 -207 -506 -477 -577 -80 -21 -234 -21 -307 -1 -29 8 -50 11 -47 7 2 -4 39 -15 81 -25 107 -23 263 -15 355 19 164 60 289 170 363 319 70 141 88 267 60 415 -37 197 -170 372 -347 457 -130 62 -237 81 -368 65z"/>
<path d="M8181 7044 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path d="M5474 6991 c-86 -14 -186 -54 -239 -95 -11 -9 10 -1 47 18 327 162 720 -14 813 -364 19 -72 19 -211 0 -284 -51 -196 -215 -360 -411 -411 -119 -31 -287 -13 -399 42 -27 14 -45 20 -40 15 19 -20 112 -61 170 -77 33 -8 98 -15 145 -15 165 0 292 53 411 170 361 357 132 971 -374 1004 -40 3 -95 1 -123 -3z"/>
<path d="M5432 6928 c-24 -5 -42 -12 -39 -14 2 -3 24 0 48 5 251 58 527 -111 603 -368 23 -78 21 -213 -4 -293 -58 -187 -224 -328 -425 -359 -69 -10 -92 -9 -160 4 -102 21 -189 64 -262 130 -41 37 -50 42 -30 18 63 -76 171 -140 279 -166 273 -64 553 104 634 380 25 86 22 221 -6 305 -76 227 -275 372 -507 369 -48 -1 -108 -6 -131 -11z"/>
<path d="M5630 6879 c82 -14 173 -61 239 -124 240 -229 183 -615 -111 -759 -139 -68 -275 -69 -412 -3 -85 41 -144 91 -187 157 -39 61 -49 65 -17 9 56 -100 180 -191 303 -224 268 -69 548 117 595 397 40 232 -106 469 -331 539 -33 10 -77 18 -97 18 -32 -1 -29 -3 18 -10z"/>
<path d="M5740 6801 c161 -85 250 -242 237 -416 -24 -314 -357 -492 -637 -339 -64 35 -140 116 -174 186 -14 29 -25 47 -26 40 -1 -48 98 -179 175 -232 77 -53 152 -72 262 -68 91 3 106 6 174 40 93 46 168 122 212 215 30 64 32 74 32 183 0 108 -2 119 -31 180 -51 107 -165 212 -254 234 -14 4 0 -7 30 -23z"/>
<path d="M5818 6703 c98 -96 138 -211 120 -343 -17 -125 -105 -242 -225 -298 -51 -24 -70 -27 -158 -27 -92 0 -105 2 -166 32 -117 57 -198 169 -219 299 l-9 59 4 -64 c7 -126 100 -256 225 -315 60 -29 73 -31 170 -31 97 0 110 2 172 32 85 40 151 106 191 191 30 62 32 75 32 172 0 94 -3 111 -28 165 -28 60 -85 127 -142 168 -16 12 -2 -6 33 -40z"/>
<path d="M5844 6629 c101 -136 83 -344 -38 -463 -171 -166 -445 -123 -556 86 -29 53 -35 76 -39 148 -4 73 -6 79 -12 45 -25 -144 81 -318 229 -376 89 -35 198 -32 282 8 82 38 145 100 184 183 27 57 31 76 31 150 0 76 -4 93 -32 151 -18 36 -42 74 -55 85 -17 15 -16 12 6 -17z"/>
<path d="M5360 6593 c-50 -56 -70 -109 -70 -183 0 -241 279 -362 463 -200 20 17 37 27 37 22 0 -14 -72 -70 -112 -86 -213 -88 -444 99 -399 323 6 31 25 78 42 105 17 27 24 44 16 38 -7 -6 -27 -35 -43 -64 -26 -47 -29 -63 -29 -138 0 -72 4 -92 27 -135 55 -104 141 -158 260 -163 65 -4 85 0 130 20 29 14 67 37 85 52 39 32 89 133 98 196 8 60 1 49 -19 -28 -15 -59 -44 -118 -53 -108 -2 2 5 22 16 45 12 22 21 46 21 53 0 7 -11 -9 -24 -37 -46 -98 -136 -155 -241 -153 l-60 1 71 7 c86 9 117 25 172 84 58 63 53 67 -6 6 -27 -28 -54 -50 -61 -50 -7 0 -10 3 -8 8 3 4 -8 7 -25 8 -16 1 -24 -2 -18 -6 16 -10 -24 -20 -70 -18 l-35 1 40 8 c35 7 33 7 -16 4 -43 -2 -64 1 -89 16 -18 11 -35 18 -37 15 -3 -3 10 -14 28 -25 19 -12 30 -21 25 -21 -36 0 -136 107 -136 144 0 6 11 -7 23 -29 12 -22 28 -40 34 -40 6 0 15 -3 19 -7 17 -18 26 -6 9 12 -10 11 -21 17 -26 15 -4 -3 -10 -1 -13 4 -5 7 22 8 32 1 1 -2 8 -3 15 -4 6 0 12 -7 12 -14 0 -8 11 -20 25 -27 15 -9 19 -15 10 -15 -13 -1 -13 -2 1 -10 9 -5 35 -5 65 0 l49 9 -55 -4 c-37 -3 -50 -1 -40 5 11 7 11 10 2 10 -7 0 -10 4 -7 10 4 6 -1 7 -12 3 -10 -3 -15 -2 -10 2 4 5 -1 17 -10 27 -17 20 -19 26 -29 108 -9 78 52 150 128 150 16 0 28 5 28 10 0 6 -10 10 -22 10 -13 0 -34 3 -48 6 -20 5 -22 4 -10 -6 12 -9 11 -10 -9 -5 -15 5 -21 3 -17 -3 3 -6 1 -14 -5 -18 -8 -4 -9 -3 -5 4 12 20 -10 13 -29 -8 -10 -11 -21 -17 -26 -14 -4 2 -15 -8 -23 -23 -8 -15 -15 -21 -16 -13 0 13 -1 13 -10 0 -15 -24 -12 -2 5 30 17 33 28 40 19 13 -4 -10 6 -3 21 15 20 25 32 31 49 27 17 -5 18 -4 6 5 -13 10 -13 11 2 6 10 -3 28 -1 40 4 21 8 21 9 3 10 -17 0 -17 2 -5 10 24 16 2 11 -31 -6 -39 -20 -50 -11 -12 10 15 8 24 15 20 16 -16 0 -52 -22 -84 -53 -18 -17 -33 -26 -33 -20 0 6 19 28 42 47 23 20 39 36 35 36 -16 0 -90 -77 -110 -114 -27 -53 -29 -156 -3 -206 33 -64 65 -98 118 -124 28 -14 45 -26 37 -26 -27 0 -108 58 -138 100 -73 101 -63 234 24 339 37 44 24 39 -15 -6z m65 -33 c-10 -11 -20 -18 -23 -15 -7 6 18 35 31 35 5 0 2 -9 -8 -20z m-66 -52 c-7 -12 -16 -54 -19 -93 l-7 -70 -2 63 c-1 59 22 143 35 129 3 -3 0 -16 -7 -29z m-2 -125 c-2 -16 -4 -3 -4 27 0 30 2 43 4 28 2 -16 2 -40 0 -55z m83 -69 c0 -8 -19 -13 -24 -6 -3 5 1 9 9 9 8 0 15 -2 15 -3z m217 -125 c-27 -16 -118 -22 -147 -11 -20 9 -15 9 25 5 28 -3 66 0 85 5 46 13 59 14 37 1z"/>
<path d="M5246 6514 c-51 -150 23 -327 169 -402 72 -37 188 -42 266 -13 78 30 141 88 180 166 26 54 31 75 31 137 0 40 -4 84 -10 98 -7 19 -8 7 -4 -46 6 -93 -11 -162 -56 -223 -117 -159 -333 -179 -480 -46 -82 73 -118 204 -88 315 18 69 14 77 -8 14z"/>
<path d="M5434 6538 l-19 -23 23 19 c12 11 22 21 22 23 0 8 -8 2 -26 -19z"/>
<path d="M5856 6547 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>
<path d="M5709 6243 l-24 -28 28 24 c25 23 32 31 24 31 -2 0 -14 -12 -28 -27z"/>
<path d="M5447 6239 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z"/>
<path d="M4690 6035 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25 -5 8 -10 11 -10 5z"/>
<path d="M5858 4913 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
</g>
</svg>
    </div>
    </div>
}
