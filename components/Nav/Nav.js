import React, {
  useContext,
  useEffect,
  useRef,
} from 'react'

import {
  motion,
  useCycle,
} from 'framer-motion'

import styled from '@emotion/styled'

import { AppContext } from '../../pages/_app'
import {
  MenuToggle,
  Navigation,
} from './'

const Container = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.state ? '300px' : '0px'};
  background: rgba(0,0,0,.1);
  transition: 1s;
  z-index: 4;
  height: 100vh;
  padding-bottom: 4em;

  `

const MenuBox = styled.div`
    position: relative;
    margin-top: 60px;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    border-radius: 0 0 30px 30px;
    padding-bottom: 10em;
      ::-webkit-scrollbar {
    display: none;
    }

  `
const Bar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;
  height: 55px;
  background: white;
  border-bottom: 3px solid orangered;
`
const CLogo = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LinkLogo = styled.a`
  :hover {
    animation: 2s rotate infinite linear;
    @keyframes rotate {
      100% {
        transform: rotate (360deg)
      }
    }
  }
`
export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { navOpen, toggleNavOpen } = useContext(AppContext)
  const handleOpen = () => {
    toggleOpen()
    toggleNavOpen()
  }
  useEffect(() => {
    toggleOpen()
  }, [navOpen])
  const logo = (width) => <svg width={width + 'px'} height="1028" viewBox="0 0 1025 1028" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M451.493 0.720001C440.595 3.379 415.481 11.269 402.993 15.957C309.849 50.923 231.175 117.865 181.554 204.374C174.827 216.102 167.993 229.53 167.993 231.019C167.993 231.604 175.98 235.943 185.743 240.66C217.52 256.017 233.136 263.589 254.493 273.997C266.043 279.626 280.893 286.829 287.493 290.004C294.093 293.179 311.193 301.483 325.493 308.457C353.389 322.063 360.881 325.495 361.353 324.886C361.517 324.674 363.595 320.9 365.97 316.5C391.921 268.421 434.327 232.802 486.497 215.262C491.445 213.599 497.968 211.647 500.993 210.925C504.018 210.203 506.637 209.517 506.814 209.402C506.99 209.286 506.436 206.336 505.583 202.846C504.73 199.356 501.298 184.35 497.957 169.5C494.615 154.65 490.991 138.675 489.904 134C488.816 129.325 487.31 122.8 486.556 119.5C485.803 116.2 484.255 109.45 483.115 104.5C481.975 99.55 477.823 81.325 473.888 64C469.952 46.675 466.158 30.025 465.456 27C464.755 23.975 463.131 16.663 461.849 10.75L459.517 0L456.505 0.115997C454.848 0.179997 452.593 0.452001 451.493 0.720001ZM596.993 69.565C573.962 71.446 564.333 72.512 550.993 74.66C535.318 77.183 524.189 79.471 523.309 80.351C523.045 80.615 525.325 92.007 528.376 105.666C534.551 133.31 552.608 213.434 556.51 230.5C557.893 236.55 561.455 252.226 564.427 265.335C567.398 278.444 570.048 289.388 570.316 289.656C570.584 289.924 576.583 289.119 583.648 287.867C600.202 284.934 633.445 284.652 649.856 287.306C685.264 293.031 718.752 306.894 745.156 326.757C751.723 331.697 752.336 331.957 753.515 330.294C754.215 329.307 767.546 312.516 783.14 292.979C871.534 182.237 885.989 164.002 885.952 163.287C885.929 162.854 882.892 160.266 879.202 157.535C811.432 107.384 743.51 80.52 661.493 71.427C648.979 70.04 606.275 68.807 596.993 69.565ZM60.4 238.75C40.013 283.355 27.746 329.686 22.869 380.5C21.273 397.14 21.236 437.693 22.802 454.5C26.701 496.333 36.505 538.042 51.013 574.513C56.787 589.032 63.63 604 64.492 604C65.325 604 71.661 601.039 94.493 589.982C104.943 584.922 130.143 572.778 150.493 562.998C170.843 553.217 196.268 540.972 206.993 535.787C217.718 530.601 233.468 523.036 241.993 518.974C250.518 514.912 257.663 511.474 257.87 511.334C258.077 511.194 256.403 506.674 254.151 501.29C244.612 478.488 239.734 458.213 237.782 433.25C236.332 414.699 237.666 393.922 241.523 375C244.219 361.771 251.503 338.873 255.565 330.857C256.901 328.222 257.993 325.575 257.993 324.973C257.993 324.001 248.401 319.162 211.993 301.767C206.218 299.008 196.543 294.385 190.493 291.494C184.443 288.603 172.743 282.978 164.493 278.994C150.22 272.101 140.72 267.55 116.993 256.233C111.218 253.479 97.092 246.674 85.601 241.112C74.111 235.551 64.537 231 64.326 231C64.115 231 62.348 234.487 60.4 238.75ZM851.912 276.312C846.643 283.015 821.884 314.15 796.893 345.5C730.368 428.952 729.517 430.031 729.222 431.318C729.073 431.968 732.632 435.65 737.132 439.5C770.004 467.626 795.602 512.017 804.407 556.163C806.909 568.709 808.993 586.438 808.993 595.174V600H916.627H1024.26L1023.72 579.25C1021.18 482.406 980.093 384.016 910.402 307.906C895.208 291.313 865.279 263.93 862.493 264.072C861.943 264.1 857.182 269.608 851.912 276.312ZM481.993 353.636C462.804 356.023 443.915 361.83 425.493 371.005C377.257 395.029 344.608 437.658 332.824 492C330.821 501.24 330.55 505.261 330.567 525.5C330.59 551.133 331.839 559.701 338.44 579.5C368.747 670.401 466.167 719.197 557.092 689.019C595.295 676.34 629.553 648.927 650.22 614.5C684.805 556.89 683.088 484.487 645.828 429.257C620.494 391.705 583.845 366.867 538.376 356.433C527.828 354.013 524.189 353.678 505.993 353.454C494.718 353.314 483.918 353.397 481.993 353.636ZM474.443 390.5L497.953 408.5L497.723 436.922L497.493 465.344L472.403 483.615L447.312 501.886L420.029 493.066L392.745 484.246L382.866 456.373C374.639 433.159 373.172 428.146 374.089 426.381C377.824 419.197 398.54 399.986 413.001 390.296C423.971 382.946 447.518 371.559 450.213 372.302C450.609 372.411 461.513 380.6 474.443 390.5ZM566.751 376.734C588.408 385.94 610.707 402.588 626.23 421.143L631.788 427.785L621.888 455.595C616.443 470.891 611.651 483.713 611.24 484.088C610.471 484.791 561.901 500.588 558.711 501.173C557.647 501.368 546.897 494.256 532 483.5L507.071 465.5L507.032 436.917L506.993 408.333L530.743 390.191C548.764 376.424 554.975 372.19 556.493 372.636C557.593 372.959 562.209 374.803 566.751 376.734ZM486.993 413.5C486.993 413.775 487.218 414 487.493 414C487.768 414 487.993 413.775 487.993 413.5C487.993 413.225 487.768 413 487.493 413C487.218 413 486.993 413.225 486.993 413.5ZM417.651 502.598C432.215 507.327 444.301 511.715 444.509 512.348C444.717 512.982 448.996 526.226 454.019 541.781L463.15 570.062L461.322 572.863C460.316 574.403 452.75 584.964 444.509 596.332L429.526 617H415.919C408.435 617 394.928 617.28 385.903 617.622L369.493 618.245L365.346 611.372C351.522 588.46 342.626 561.15 341.287 537.515L340.712 527.351L364.602 510.755C377.742 501.628 389.096 494.124 389.832 494.08C390.569 494.036 403.088 497.869 417.651 502.598ZM639.493 510.554C656.116 522.012 663.597 527.742 663.832 529.194C664.339 532.339 662.111 550.339 660.007 560.083C656.809 574.901 647.83 598.635 645.879 597.429C645.404 597.136 645.248 597.502 645.532 598.242C645.969 599.379 637.467 614.916 635.119 617.272C634.696 617.696 620.964 617.736 604.604 617.36L574.858 616.677L558.175 593.647C549 580.98 541.639 569.915 541.818 569.058C541.997 568.201 544.334 560.75 547.012 552.5C549.69 544.25 553.801 531.529 556.147 524.232C560.367 511.105 560.45 510.954 563.953 509.976C565.9 509.433 577.618 505.649 589.993 501.566C602.368 497.484 613.168 494.114 613.993 494.077C614.818 494.04 626.293 501.455 639.493 510.554ZM624.993 565.5C624.993 565.775 625.218 566 625.493 566C625.768 566 625.993 565.775 625.993 565.5C625.993 565.225 625.768 565 625.493 565C625.218 565 624.993 565.225 624.993 565.5ZM549.957 598.751C559.013 611.262 566.4 622.174 566.374 622.999C566.347 623.825 562.85 636.2 558.601 650.5C554.352 664.8 550.663 677.236 550.403 678.135C549.884 679.935 539.231 682.921 525.493 685.119C513.086 687.103 487.687 686.634 473.993 684.167C467.668 683.027 460.706 681.47 458.521 680.707L454.549 679.318L446.162 650.948C438.956 626.571 437.953 622.29 439.034 620.539C439.726 619.417 447.227 608.938 455.703 597.25L471.114 576L502.303 576.002L533.493 576.003L549.957 598.751ZM96.247 637.32C31.924 668.183 0.00100021 683.998 2.07562e-07 685C-0.00199979 686.968 14.45 713.608 22.173 725.871C80.997 819.274 173.315 886.945 278.827 914.003C285.61 915.742 291.327 916.999 291.53 916.796C291.733 916.593 296.879 894.393 302.964 867.463C309.049 840.533 314.676 815.8 315.469 812.5C316.262 809.2 320.337 791.2 324.525 772.5C328.712 753.8 333.695 731.774 335.597 723.553C337.499 715.332 338.862 708.101 338.625 707.484C338.389 706.868 335.562 705.776 332.344 705.057C316.02 701.414 287.436 688.964 271.268 678.455C240.063 658.174 214.774 630.881 197.891 599.264C195.472 594.734 193.268 591.053 192.993 591.084C192.718 591.115 149.182 611.921 96.247 637.32ZM715.556 654.25C711.84 714.484 686.066 767.153 641.248 806.094L635.003 811.521L639.864 817.51C644.629 823.382 725.066 924.292 754.43 961.236C767.266 977.386 769.541 979.802 770.907 978.74C786.345 966.74 812.328 941.656 827.095 924.496C869.569 875.138 901.216 815.031 917.39 753C925.745 720.954 929.236 696.78 931.578 654.75L932.233 643H824.242H716.25L715.556 654.25ZM536.493 770.603C505.305 794.253 465.84 808.736 423.365 812.118C407.101 813.413 391.491 812.57 371.713 809.329C366.334 808.448 361.662 807.998 361.331 808.329C360.867 808.793 338.044 906.899 330.584 940.5C329.852 943.8 325.591 962.434 321.115 981.91C316.64 1001.39 313.095 1017.41 313.236 1017.53C313.377 1017.65 318.218 1018.68 323.993 1019.82C340.009 1022.99 360.87 1025.84 377.491 1027.11C396.454 1028.56 440.966 1027.72 458.493 1025.57C532.519 1016.52 599.856 990.386 659.993 947.36C666.318 942.835 672.832 938.029 674.468 936.681L677.443 934.23L673.468 929.162C655.709 906.519 543.383 766.141 542.993 766.102C542.718 766.075 539.793 768.101 536.493 770.603Z" fill="red" />
  </svg>

  return (
    <Container
      initial={true}
      animate={navOpen ? "open" : "closed"}
      ref={containerRef}
      state={navOpen}
    >
      <Bar>
        <CLogo>
          <LinkLogo href="https://www.laliga.marcosmrod.com">{logo(30)}</LinkLogo>
        </CLogo>
      </Bar>
      <MenuBox>
        <Navigation />
      </MenuBox>


      <MenuToggle toggle={handleOpen} />
    </Container>
  )
}