<!--  -->
<template>
    <div class="resume pages">
        <div class="floatTop sd">
            <div
                class="logo"
                style="
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: 500;
                    line-height: 42rpx;
                    letter-spacing: 0px;
                    color: #1f2937;
                    margin-right: 50px;
                "
            >
                创建简历
            </div>
            <div class="savebtn btn flex center" @click="exit">
                <div class="svgBox" style="margin-top: 2px">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="none"
                        version="1.1"
                        width="12.25"
                        height="14"
                        viewBox="0 0 12.25 14"
                    >
                        <defs>
                            <clipPath id="master_svg0_26_2249">
                                <rect
                                    x="0"
                                    y="0"
                                    width="12.25"
                                    height="14"
                                    rx="0"
                                />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#master_svg0_26_2249)">
                            <g transform="matrix(1,0,0,-1,0,26.8515625)">
                                <g>
                                    <path
                                        d="M1.75,25.67578125Q1.01172,25.64848125,0.519531,25.15628125Q0.0273438,24.664081250000002,0,23.92578125L0,15.17578125Q0.0273438,14.43750125,0.519531,13.94531225Q1.01172,13.45312505,1.75,13.42578125L10.5,13.42578125Q11.2383,13.45312505,11.7305,13.94531225Q12.2227,14.43750125,12.25,15.17578125L12.25,21.82031125Q12.25,22.53125125,11.7305,23.05078125L9.625,25.15628125Q9.10547,25.67578125,8.39453,25.67578125L1.75,25.67578125ZM1.75,23.05078125Q1.75,23.43358125,1.99609,23.67968125Q2.24219,23.92578125,2.625,23.92578125L7.875,23.92578125Q8.25781,23.92578125,8.50391,23.67968125Q8.75,23.43358125,8.75,23.05078125L8.75,21.30078125Q8.75,20.91797125,8.50391,20.67187125Q8.25781,20.42578125,7.875,20.42578125L2.625,20.42578125Q2.24219,20.42578125,1.99609,20.67187125Q1.75,20.91797125,1.75,21.30078125L1.75,23.05078125ZM6.125,18.67578125Q7.10938,18.64844125,7.62891,17.80078125Q8.12109,16.92578125,7.62891,16.05078125Q7.10938,15.20312125,6.125,15.17578125Q5.14062,15.20312125,4.62109,16.05078125Q4.12891,16.92578125,4.62109,17.80078125Q5.14062,18.64844125,6.125,18.67578125Z"
                                        fill="#4B5563"
                                        fill-opacity="1"
                                        style="mix-blend-mode: passthrough"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                保存
            </div>
            <div class="exitbtn btn flex center" @click="exit">
                <div class="svgBox" style="margin-top: 2px">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="none"
                        version="1.1"
                        width="8.75"
                        height="14"
                        viewBox="0 0 8.75 14"
                    >
                        <defs>
                            <clipPath id="master_svg0_26_2254">
                                <rect
                                    x="0"
                                    y="0"
                                    width="8.75"
                                    height="14"
                                    rx="0"
                                />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#master_svg0_26_2254)">
                            <g transform="matrix(1,0,0,-1,0,23.3515625)">
                                <g>
                                    <path
                                        d="M7.628909999999999,18.92187125Q7.875,19.19531125,7.875,19.55078125Q7.875,19.90625125,7.628909999999999,20.179691249999998Q7.35547,20.42578125,7,20.42578125Q6.64453,20.42578125,6.37109,20.179691249999998L3.5,17.28125125L0.6289100000000001,20.179691249999998Q0.35546999999999995,20.42578125,0,20.42578125Q-0.35546900000000003,20.42578125,-0.628906,20.179691249999998Q-0.875,19.90625125,-0.875,19.55078125Q-0.875,19.19531125,-0.628906,18.92187125L2.26953,16.05078125L-0.628906,13.17969125Q-0.875,12.90625125,-0.875,12.55078125Q-0.875,12.19531225,-0.628906,11.92187525Q-0.35546900000000003,11.67578125,0,11.67578125Q0.35546999999999995,11.67578125,0.6289100000000001,11.92187525L3.5,14.82031125L6.37109,11.92187525Q6.64453,11.67578125,7,11.67578125Q7.35547,11.67578125,7.628909999999999,11.92187525Q7.875,12.19531225,7.875,12.55078125Q7.875,12.90625125,7.628909999999999,13.17969125L4.73047,16.05078125L7.628909999999999,18.92187125Z"
                                        fill="#4B5563"
                                        fill-opacity="1"
                                        style="mix-blend-mode: passthrough"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                退出
            </div>
        </div>
        <div class="floatBtm sd">
            <div
                class="msg"
                style="
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: normal;
                    line-height: 40rpx;
                    letter-spacing: 0px;
                    color: #6b7280;
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    version="1.1"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                >
                    <defs>
                        <clipPath id="master_svg0_26_2244">
                            <rect x="0" y="0" width="14" height="14" rx="0" />
                        </clipPath>
                    </defs>
                    <g clip-path="url(#master_svg0_26_2244)">
                        <g transform="matrix(1,0,0,-1,0,28.6015625)">
                            <g>
                                <path
                                    d="M7,28.30078125Q8.91406,28.27348125,10.5,27.37108125Q12.0859,26.44138125,13.0703,24.80078125Q14,23.13281125,14,21.30078125Q14,19.46875125,13.0703,17.80078125Q12.0859,16.16016125,10.5,15.23046925Q8.91406,14.32812505,7,14.30078125Q5.08594,14.32812505,3.5,15.23046925Q1.91406,16.16016125,0.929688,17.80078125Q0,19.46875125,0,21.30078125Q0,23.13281125,0.929688,24.80078125Q1.91406,26.44138125,3.5,27.37108125Q5.08594,28.27348125,7,28.30078125ZM6.34375,25.01958125L6.34375,21.30078125L6.34375,25.01958125L6.34375,21.30078125Q6.34375,20.94531125,6.64453,20.75390125L9.26953,19.00390125Q9.78906,18.70312125,10.1719,19.19531125Q10.4727,19.71484125,9.98047,20.09766125L7.65625,21.65625125L7.65625,25.01958125Q7.60156,25.62108125,7,25.67578125Q6.39844,25.62108125,6.34375,25.01958125Z"
                                    fill="#6B7280"
                                    fill-opacity="1"
                                    style="mix-blend-mode: passthrough"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
                最后保存于 {{ lastTime }}
            </div>
            <div class="savebtn btn flex center" @click="openPdf">预览简历</div>
            <div class="exitbtn btn flex center" @click="downloadPdf">
                导出PDF
            </div>
        </div>
        <div class="template">
            <div class="title mt20">选择模版</div>
            <div class="box">
                <div class="listBox">
                    <div
                        class="itemBox m20"
                        v-for="(item, index) in temList"
                        :key="index"
                        :class="item.isPick ? 'pick' : ''"
                        @click="pickTem(item)"
                    >
                        <div class="item">
                            <div class="imgBox">
                                <image
                                    class="resImg sd"
                                    :src="'/static/jianli/template/t01.png'"
                                    mode="widthFix"
                                />
                            </div>
                            <!-- <div class="name">产品锦鲤简历</div> -->
                            <!-- <div class="time">2025-10-15 编辑</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" style="margin-top: 48rpx">
            <div class="titleBox">
                <div class="title">基本信息</div>
                <div class="rt" @click="editPerson('person')">+ 编辑</div>
            </div>
            <div class="fitem" v-for="(item, index) in pform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val">
                        {{ item.val || item.placeholder }}
                    </div>
                </div>
            </div>
        </div>
        <div class="section" style="margin-top: 48rpx">
            <div class="titleBox">
                <div class="title">工作经历</div>
                <div class="rt">
                    <!-- <div class="btn">+ 编辑</div> -->
                    <div class="btn" @click="editPerson('experience')">
                        + 添加
                    </div>
                </div>
            </div>
            <div class="fitem">
                <div
                    class="row pt"
                    style="margin-top: 16rpx"
                    v-for="(item, index) in ExperienceForm"
                    :key="index"
                >
                    <!-- <div class="label">{{ item.epName }}</div> -->
                    <div class="valBox pt">
                        <div class="floatBtnGroup">
                            <div
                                class="edit"
                                @click="editPerson('experience', item.id)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9207"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9207">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9208">
                                            <rect
                                                x="15"
                                                y="14"
                                                width="14"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9207)">
                                        <g
                                            clip-path="url(#master_svg1_26_9207)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9208)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.601539611816406)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M27.96465234375,41.699169805908205Q27.46765234375,42.164069805908206,26.860152343750002,42.164069805908206Q26.25265234375,42.164069805908206,25.75565234375,41.699169805908205L24.92721234375,40.8788698059082L27.633352343749998,38.199209805908204L28.46175234375,39.019569805908205Q28.93115234375,39.511669805908205,28.93115234375,40.1132698059082Q28.93115234375,40.7148698059082,28.46175234375,41.207069805908205L27.96465234375,41.699169805908205ZM19.68066234375,35.6835798059082Q19.43214234375,35.4374898059082,19.32168234375,35.0820198059082L18.49328234375,32.6757698059082Q18.38283234375,32.292959805908204,18.658962343749998,31.992179805908204Q18.96271234375,31.718739805908204,19.34930234375,31.828109805908202L21.80689234375,32.6484298059082Q22.13825234375,32.757799805908206,22.38677234375,33.0038898059082L27.02585234375,37.597649805908205L24.31971234375,40.2773698059082L19.68066234375,35.6835798059082ZM17.58204234375,40.5507698059082Q16.44989234375,40.523469805908206,15.70432834375,39.785169805908204Q14.95876574375,39.0468698059082,14.93115234375,37.9257698059082L14.93115234375,30.925769805908203Q14.95876574375,29.804679805908204,15.70432834375,29.066394805908203Q16.44989234375,28.328113605908204,17.58204234375,28.300769805908203L24.651072343750002,28.300769805908203Q25.78325234375,28.328113605908204,26.52875234375,29.066394805908203Q27.27435234375,29.804679805908204,27.30195234375,30.925769805908203L27.30195234375,33.5507698059082Q27.30195234375,33.9335798059082,27.05345234375,34.1796798059082Q26.80495234375,34.4257698059082,26.41835234375,34.4257698059082Q26.03175234375,34.4257698059082,25.78325234375,34.1796798059082Q25.53465234375,33.9335798059082,25.53465234375,33.5507698059082L25.53465234375,30.925769805908203Q25.53465234375,30.542959805908204,25.28615234375,30.296859805908202Q25.03765234375,30.050769805908203,24.651072343750002,30.050769805908203L17.58204234375,30.050769805908203Q17.19545234375,30.050769805908203,16.94693234375,30.296859805908202Q16.69841234375,30.542959805908204,16.69841234375,30.925769805908203L16.69841234375,37.9257698059082Q16.69841234375,38.308569805908206,16.94693234375,38.554669805908205Q17.19545234375,38.8007698059082,17.58204234375,38.8007698059082L20.23292234375,38.8007698059082Q20.61951234375,38.8007698059082,20.868032343750002,39.0468698059082Q21.11655234375,39.2929698059082,21.11655234375,39.6757698059082Q21.11655234375,40.058569805908206,20.868032343750002,40.304669805908205Q20.61951234375,40.5507698059082,20.23292234375,40.5507698059082L17.58204234375,40.5507698059082Z"
                                                            fill="#6366F1"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                class="del"
                                @click="
                                    delPerson(
                                        'experience',
                                        item.id,
                                        ExperienceForm,
                                        index
                                    )
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9203"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9203">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9204">
                                            <rect
                                                x="15.875"
                                                y="14"
                                                width="12.25"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9203)">
                                        <g
                                            clip-path="url(#master_svg1_26_9203)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9204)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.6015625)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M19.56641,41.80858125L19.375,41.42578125L19.56641,41.80858125L19.375,41.42578125L16.75,41.42578125Q16.367188,41.42578125,16.121094,41.17968125Q15.875,40.93358125,15.875,40.55078125Q15.875,40.16798125,16.121094,39.92188125Q16.367188,39.67578125,16.75,39.67578125L27.25,39.67578125Q27.6328,39.67578125,27.8789,39.92188125Q28.125,40.16798125,28.125,40.55078125Q28.125,40.93358125,27.8789,41.17968125Q27.6328,41.42578125,27.25,41.42578125L24.625,41.42578125L24.433590000000002,41.80858125Q24.1875,42.27348125,23.64062,42.30078125L20.35938,42.30078125Q19.8125,42.27348125,19.56641,41.80858125ZM27.25,38.80078125L16.75,38.80078125L27.25,38.80078125L16.75,38.80078125L17.32422,29.53125125Q17.37891,29.01171925,17.73438,28.65625025Q18.11719,28.30078125,18.63672,28.30078125L25.36328,28.30078125Q25.8828,28.30078125,26.2656,28.65625025Q26.6211,29.01171925,26.675800000000002,29.53125125L27.25,38.80078125Z"
                                                            fill="#6B7280"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="line myFlex flexs">
                            <div class="lf">{{ item.epName }}</div>
                            <div class="rt">{{ item.epTime }}</div>
                        </div>
                        <div class="line f12 mt5">
                            <div class="epType">
                                {{ item.epType }}
                            </div>
                        </div>
                        <div class="line f12 mt5">
                            <div class="epContent">
                                {{ item.epContent }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" style="margin-top: 48rpx">
            <div class="titleBox">
                <div class="title">教育经历</div>
                <div class="rt">
                    <!-- <div class="btn">+ 编辑</div> -->
                    <div class="btn" @click="editPerson('education')">
                        + 添加
                    </div>
                </div>
            </div>
            <div class="fitem">
                <div
                    class="row pt"
                    style="margin-top: 16rpx"
                    v-for="(item, index) in EducationForm"
                    :key="index"
                >
                    <!-- <div class="label">{{ item.epName }}</div> -->
                    <div class="valBox pt">
                        <div class="floatBtnGroup">
                            <div
                                class="edit"
                                @click="editPerson('education', item.id)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9207"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9207">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9208">
                                            <rect
                                                x="15"
                                                y="14"
                                                width="14"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9207)">
                                        <g
                                            clip-path="url(#master_svg1_26_9207)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9208)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.601539611816406)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M27.96465234375,41.699169805908205Q27.46765234375,42.164069805908206,26.860152343750002,42.164069805908206Q26.25265234375,42.164069805908206,25.75565234375,41.699169805908205L24.92721234375,40.8788698059082L27.633352343749998,38.199209805908204L28.46175234375,39.019569805908205Q28.93115234375,39.511669805908205,28.93115234375,40.1132698059082Q28.93115234375,40.7148698059082,28.46175234375,41.207069805908205L27.96465234375,41.699169805908205ZM19.68066234375,35.6835798059082Q19.43214234375,35.4374898059082,19.32168234375,35.0820198059082L18.49328234375,32.6757698059082Q18.38283234375,32.292959805908204,18.658962343749998,31.992179805908204Q18.96271234375,31.718739805908204,19.34930234375,31.828109805908202L21.80689234375,32.6484298059082Q22.13825234375,32.757799805908206,22.38677234375,33.0038898059082L27.02585234375,37.597649805908205L24.31971234375,40.2773698059082L19.68066234375,35.6835798059082ZM17.58204234375,40.5507698059082Q16.44989234375,40.523469805908206,15.70432834375,39.785169805908204Q14.95876574375,39.0468698059082,14.93115234375,37.9257698059082L14.93115234375,30.925769805908203Q14.95876574375,29.804679805908204,15.70432834375,29.066394805908203Q16.44989234375,28.328113605908204,17.58204234375,28.300769805908203L24.651072343750002,28.300769805908203Q25.78325234375,28.328113605908204,26.52875234375,29.066394805908203Q27.27435234375,29.804679805908204,27.30195234375,30.925769805908203L27.30195234375,33.5507698059082Q27.30195234375,33.9335798059082,27.05345234375,34.1796798059082Q26.80495234375,34.4257698059082,26.41835234375,34.4257698059082Q26.03175234375,34.4257698059082,25.78325234375,34.1796798059082Q25.53465234375,33.9335798059082,25.53465234375,33.5507698059082L25.53465234375,30.925769805908203Q25.53465234375,30.542959805908204,25.28615234375,30.296859805908202Q25.03765234375,30.050769805908203,24.651072343750002,30.050769805908203L17.58204234375,30.050769805908203Q17.19545234375,30.050769805908203,16.94693234375,30.296859805908202Q16.69841234375,30.542959805908204,16.69841234375,30.925769805908203L16.69841234375,37.9257698059082Q16.69841234375,38.308569805908206,16.94693234375,38.554669805908205Q17.19545234375,38.8007698059082,17.58204234375,38.8007698059082L20.23292234375,38.8007698059082Q20.61951234375,38.8007698059082,20.868032343750002,39.0468698059082Q21.11655234375,39.2929698059082,21.11655234375,39.6757698059082Q21.11655234375,40.058569805908206,20.868032343750002,40.304669805908205Q20.61951234375,40.5507698059082,20.23292234375,40.5507698059082L17.58204234375,40.5507698059082Z"
                                                            fill="#6366F1"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                class="del"
                                @click="
                                    delPerson(
                                        'education',
                                        item.id,
                                        EducationForm,
                                        index
                                    )
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9203"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9203">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9204">
                                            <rect
                                                x="15.875"
                                                y="14"
                                                width="12.25"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9203)">
                                        <g
                                            clip-path="url(#master_svg1_26_9203)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9204)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.6015625)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M19.56641,41.80858125L19.375,41.42578125L19.56641,41.80858125L19.375,41.42578125L16.75,41.42578125Q16.367188,41.42578125,16.121094,41.17968125Q15.875,40.93358125,15.875,40.55078125Q15.875,40.16798125,16.121094,39.92188125Q16.367188,39.67578125,16.75,39.67578125L27.25,39.67578125Q27.6328,39.67578125,27.8789,39.92188125Q28.125,40.16798125,28.125,40.55078125Q28.125,40.93358125,27.8789,41.17968125Q27.6328,41.42578125,27.25,41.42578125L24.625,41.42578125L24.433590000000002,41.80858125Q24.1875,42.27348125,23.64062,42.30078125L20.35938,42.30078125Q19.8125,42.27348125,19.56641,41.80858125ZM27.25,38.80078125L16.75,38.80078125L27.25,38.80078125L16.75,38.80078125L17.32422,29.53125125Q17.37891,29.01171925,17.73438,28.65625025Q18.11719,28.30078125,18.63672,28.30078125L25.36328,28.30078125Q25.8828,28.30078125,26.2656,28.65625025Q26.6211,29.01171925,26.675800000000002,29.53125125L27.25,38.80078125Z"
                                                            fill="#6B7280"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="line myFlex flexs">
                            <div class="lf">{{ item.epName }}</div>
                            <div class="rt">{{ item.epTime }}</div>
                        </div>
                        <div class="line f12 mt5">
                            <div class="epType">
                                {{ item.epType }}
                            </div>
                        </div>
                        <div class="line f12 mt5">
                            <div class="epContent">
                                {{ item.epContent }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" style="margin-top: 48rpx">
            <div class="titleBox">
                <div class="title">项目经验</div>
                <div class="rt">
                    <!-- <div class="btn">+ 编辑</div> -->
                    <div class="btn" @click="editPerson('projects')">
                        + 添加
                    </div>
                </div>
            </div>
            <div class="fitem">
                <div
                    class="row pt"
                    style="margin-top: 16rpx"
                    v-for="(item, index) in ProjectsForm"
                    :key="index"
                >
                    <!-- <div class="label">{{ item.epName }}</div> -->
                    <div class="valBox pt">
                        <div class="floatBtnGroup">
                            <div
                                class="edit"
                                @click="editPerson('projects', item.id)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9207"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9207">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9208">
                                            <rect
                                                x="15"
                                                y="14"
                                                width="14"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9207)">
                                        <g
                                            clip-path="url(#master_svg1_26_9207)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9208)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.601539611816406)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M27.96465234375,41.699169805908205Q27.46765234375,42.164069805908206,26.860152343750002,42.164069805908206Q26.25265234375,42.164069805908206,25.75565234375,41.699169805908205L24.92721234375,40.8788698059082L27.633352343749998,38.199209805908204L28.46175234375,39.019569805908205Q28.93115234375,39.511669805908205,28.93115234375,40.1132698059082Q28.93115234375,40.7148698059082,28.46175234375,41.207069805908205L27.96465234375,41.699169805908205ZM19.68066234375,35.6835798059082Q19.43214234375,35.4374898059082,19.32168234375,35.0820198059082L18.49328234375,32.6757698059082Q18.38283234375,32.292959805908204,18.658962343749998,31.992179805908204Q18.96271234375,31.718739805908204,19.34930234375,31.828109805908202L21.80689234375,32.6484298059082Q22.13825234375,32.757799805908206,22.38677234375,33.0038898059082L27.02585234375,37.597649805908205L24.31971234375,40.2773698059082L19.68066234375,35.6835798059082ZM17.58204234375,40.5507698059082Q16.44989234375,40.523469805908206,15.70432834375,39.785169805908204Q14.95876574375,39.0468698059082,14.93115234375,37.9257698059082L14.93115234375,30.925769805908203Q14.95876574375,29.804679805908204,15.70432834375,29.066394805908203Q16.44989234375,28.328113605908204,17.58204234375,28.300769805908203L24.651072343750002,28.300769805908203Q25.78325234375,28.328113605908204,26.52875234375,29.066394805908203Q27.27435234375,29.804679805908204,27.30195234375,30.925769805908203L27.30195234375,33.5507698059082Q27.30195234375,33.9335798059082,27.05345234375,34.1796798059082Q26.80495234375,34.4257698059082,26.41835234375,34.4257698059082Q26.03175234375,34.4257698059082,25.78325234375,34.1796798059082Q25.53465234375,33.9335798059082,25.53465234375,33.5507698059082L25.53465234375,30.925769805908203Q25.53465234375,30.542959805908204,25.28615234375,30.296859805908202Q25.03765234375,30.050769805908203,24.651072343750002,30.050769805908203L17.58204234375,30.050769805908203Q17.19545234375,30.050769805908203,16.94693234375,30.296859805908202Q16.69841234375,30.542959805908204,16.69841234375,30.925769805908203L16.69841234375,37.9257698059082Q16.69841234375,38.308569805908206,16.94693234375,38.554669805908205Q17.19545234375,38.8007698059082,17.58204234375,38.8007698059082L20.23292234375,38.8007698059082Q20.61951234375,38.8007698059082,20.868032343750002,39.0468698059082Q21.11655234375,39.2929698059082,21.11655234375,39.6757698059082Q21.11655234375,40.058569805908206,20.868032343750002,40.304669805908205Q20.61951234375,40.5507698059082,20.23292234375,40.5507698059082L17.58204234375,40.5507698059082Z"
                                                            fill="#6366F1"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                class="del"
                                @click="
                                    delPerson(
                                        'projects',
                                        item.id,
                                        ProjectsForm,
                                        index
                                    )
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9203"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9203">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9204">
                                            <rect
                                                x="15.875"
                                                y="14"
                                                width="12.25"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9203)">
                                        <g
                                            clip-path="url(#master_svg1_26_9203)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9204)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.6015625)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M19.56641,41.80858125L19.375,41.42578125L19.56641,41.80858125L19.375,41.42578125L16.75,41.42578125Q16.367188,41.42578125,16.121094,41.17968125Q15.875,40.93358125,15.875,40.55078125Q15.875,40.16798125,16.121094,39.92188125Q16.367188,39.67578125,16.75,39.67578125L27.25,39.67578125Q27.6328,39.67578125,27.8789,39.92188125Q28.125,40.16798125,28.125,40.55078125Q28.125,40.93358125,27.8789,41.17968125Q27.6328,41.42578125,27.25,41.42578125L24.625,41.42578125L24.433590000000002,41.80858125Q24.1875,42.27348125,23.64062,42.30078125L20.35938,42.30078125Q19.8125,42.27348125,19.56641,41.80858125ZM27.25,38.80078125L16.75,38.80078125L27.25,38.80078125L16.75,38.80078125L17.32422,29.53125125Q17.37891,29.01171925,17.73438,28.65625025Q18.11719,28.30078125,18.63672,28.30078125L25.36328,28.30078125Q25.8828,28.30078125,26.2656,28.65625025Q26.6211,29.01171925,26.675800000000002,29.53125125L27.25,38.80078125Z"
                                                            fill="#6B7280"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="line myFlex flexs">
                            <div class="lf">{{ item.epName }}</div>
                            <div class="rt">{{ item.epTime }}</div>
                        </div>
                        <div class="line f12 mt5">
                            <div class="epType">
                                {{ item.epType }}
                            </div>
                        </div>
                        <div class="line f12 mt5">
                            <div class="epContent">
                                {{ item.epContent }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" style="margin-top: 48rpx">
            <div class="titleBox">
                <div class="title">技能</div>
                <div class="rt">
                    <!-- <div class="btn">+ 编辑</div> -->
                    <div class="btn" @click="editPerson('skills')">+ 添加</div>
                </div>
            </div>
            <div class="fitem">
                <div
                    class="row pt"
                    style="margin-top: 16rpx"
                    v-for="(item, index) in SkillsForm"
                    :key="index"
                >
                    <!-- <div class="label">{{ item.epName }}</div> -->
                    <div class="valBox pt" style="padding-bottom: 26rpx">
                        <div class="floatBtnGroup" style="bottom: -0.856rem">
                            <div
                                class="edit"
                                @click="editPerson('skills', item.id)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9207"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9207">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9208">
                                            <rect
                                                x="15"
                                                y="14"
                                                width="14"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9207)">
                                        <g
                                            clip-path="url(#master_svg1_26_9207)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9208)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.601539611816406)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M27.96465234375,41.699169805908205Q27.46765234375,42.164069805908206,26.860152343750002,42.164069805908206Q26.25265234375,42.164069805908206,25.75565234375,41.699169805908205L24.92721234375,40.8788698059082L27.633352343749998,38.199209805908204L28.46175234375,39.019569805908205Q28.93115234375,39.511669805908205,28.93115234375,40.1132698059082Q28.93115234375,40.7148698059082,28.46175234375,41.207069805908205L27.96465234375,41.699169805908205ZM19.68066234375,35.6835798059082Q19.43214234375,35.4374898059082,19.32168234375,35.0820198059082L18.49328234375,32.6757698059082Q18.38283234375,32.292959805908204,18.658962343749998,31.992179805908204Q18.96271234375,31.718739805908204,19.34930234375,31.828109805908202L21.80689234375,32.6484298059082Q22.13825234375,32.757799805908206,22.38677234375,33.0038898059082L27.02585234375,37.597649805908205L24.31971234375,40.2773698059082L19.68066234375,35.6835798059082ZM17.58204234375,40.5507698059082Q16.44989234375,40.523469805908206,15.70432834375,39.785169805908204Q14.95876574375,39.0468698059082,14.93115234375,37.9257698059082L14.93115234375,30.925769805908203Q14.95876574375,29.804679805908204,15.70432834375,29.066394805908203Q16.44989234375,28.328113605908204,17.58204234375,28.300769805908203L24.651072343750002,28.300769805908203Q25.78325234375,28.328113605908204,26.52875234375,29.066394805908203Q27.27435234375,29.804679805908204,27.30195234375,30.925769805908203L27.30195234375,33.5507698059082Q27.30195234375,33.9335798059082,27.05345234375,34.1796798059082Q26.80495234375,34.4257698059082,26.41835234375,34.4257698059082Q26.03175234375,34.4257698059082,25.78325234375,34.1796798059082Q25.53465234375,33.9335798059082,25.53465234375,33.5507698059082L25.53465234375,30.925769805908203Q25.53465234375,30.542959805908204,25.28615234375,30.296859805908202Q25.03765234375,30.050769805908203,24.651072343750002,30.050769805908203L17.58204234375,30.050769805908203Q17.19545234375,30.050769805908203,16.94693234375,30.296859805908202Q16.69841234375,30.542959805908204,16.69841234375,30.925769805908203L16.69841234375,37.9257698059082Q16.69841234375,38.308569805908206,16.94693234375,38.554669805908205Q17.19545234375,38.8007698059082,17.58204234375,38.8007698059082L20.23292234375,38.8007698059082Q20.61951234375,38.8007698059082,20.868032343750002,39.0468698059082Q21.11655234375,39.2929698059082,21.11655234375,39.6757698059082Q21.11655234375,40.058569805908206,20.868032343750002,40.304669805908205Q20.61951234375,40.5507698059082,20.23292234375,40.5507698059082L17.58204234375,40.5507698059082Z"
                                                            fill="#6366F1"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                class="del"
                                @click="
                                    delPerson(
                                        'skills',
                                        item.id,
                                        SkillsForm,
                                        index
                                    )
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9203"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9203">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9204">
                                            <rect
                                                x="15.875"
                                                y="14"
                                                width="12.25"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9203)">
                                        <g
                                            clip-path="url(#master_svg1_26_9203)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9204)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.6015625)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M19.56641,41.80858125L19.375,41.42578125L19.56641,41.80858125L19.375,41.42578125L16.75,41.42578125Q16.367188,41.42578125,16.121094,41.17968125Q15.875,40.93358125,15.875,40.55078125Q15.875,40.16798125,16.121094,39.92188125Q16.367188,39.67578125,16.75,39.67578125L27.25,39.67578125Q27.6328,39.67578125,27.8789,39.92188125Q28.125,40.16798125,28.125,40.55078125Q28.125,40.93358125,27.8789,41.17968125Q27.6328,41.42578125,27.25,41.42578125L24.625,41.42578125L24.433590000000002,41.80858125Q24.1875,42.27348125,23.64062,42.30078125L20.35938,42.30078125Q19.8125,42.27348125,19.56641,41.80858125ZM27.25,38.80078125L16.75,38.80078125L27.25,38.80078125L16.75,38.80078125L17.32422,29.53125125Q17.37891,29.01171925,17.73438,28.65625025Q18.11719,28.30078125,18.63672,28.30078125L25.36328,28.30078125Q25.8828,28.30078125,26.2656,28.65625025Q26.6211,29.01171925,26.675800000000002,29.53125125L27.25,38.80078125Z"
                                                            fill="#6B7280"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="line myFlex flexs">
                            <div class="lf">{{ item.epName }}</div>
                            <!-- <div class="rt">{{ item.epTime }}</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" style="margin-top: 48rpx">
            <div class="titleBox">
                <div class="title">证书</div>
                <div class="rt">
                    <!-- <div class="btn">+ 编辑</div> -->
                    <div class="btn" @click="editPerson('certification')">
                        + 添加
                    </div>
                </div>
            </div>
            <div class="fitem">
                <div
                    class="row pt"
                    style="margin-top: 16rpx"
                    v-for="(item, index) in CertificationForm"
                    :key="index"
                >
                    <!-- <div class="label">{{ item.epName }}</div> -->
                    <div class="valBox pt">
                        <div class="floatBtnGroup">
                            <div
                                class="edit"
                                @click="editPerson('certification', item.id)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9207"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9207">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9208">
                                            <rect
                                                x="15"
                                                y="14"
                                                width="14"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9207)">
                                        <g
                                            clip-path="url(#master_svg1_26_9207)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9208)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.601539611816406)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M27.96465234375,41.699169805908205Q27.46765234375,42.164069805908206,26.860152343750002,42.164069805908206Q26.25265234375,42.164069805908206,25.75565234375,41.699169805908205L24.92721234375,40.8788698059082L27.633352343749998,38.199209805908204L28.46175234375,39.019569805908205Q28.93115234375,39.511669805908205,28.93115234375,40.1132698059082Q28.93115234375,40.7148698059082,28.46175234375,41.207069805908205L27.96465234375,41.699169805908205ZM19.68066234375,35.6835798059082Q19.43214234375,35.4374898059082,19.32168234375,35.0820198059082L18.49328234375,32.6757698059082Q18.38283234375,32.292959805908204,18.658962343749998,31.992179805908204Q18.96271234375,31.718739805908204,19.34930234375,31.828109805908202L21.80689234375,32.6484298059082Q22.13825234375,32.757799805908206,22.38677234375,33.0038898059082L27.02585234375,37.597649805908205L24.31971234375,40.2773698059082L19.68066234375,35.6835798059082ZM17.58204234375,40.5507698059082Q16.44989234375,40.523469805908206,15.70432834375,39.785169805908204Q14.95876574375,39.0468698059082,14.93115234375,37.9257698059082L14.93115234375,30.925769805908203Q14.95876574375,29.804679805908204,15.70432834375,29.066394805908203Q16.44989234375,28.328113605908204,17.58204234375,28.300769805908203L24.651072343750002,28.300769805908203Q25.78325234375,28.328113605908204,26.52875234375,29.066394805908203Q27.27435234375,29.804679805908204,27.30195234375,30.925769805908203L27.30195234375,33.5507698059082Q27.30195234375,33.9335798059082,27.05345234375,34.1796798059082Q26.80495234375,34.4257698059082,26.41835234375,34.4257698059082Q26.03175234375,34.4257698059082,25.78325234375,34.1796798059082Q25.53465234375,33.9335798059082,25.53465234375,33.5507698059082L25.53465234375,30.925769805908203Q25.53465234375,30.542959805908204,25.28615234375,30.296859805908202Q25.03765234375,30.050769805908203,24.651072343750002,30.050769805908203L17.58204234375,30.050769805908203Q17.19545234375,30.050769805908203,16.94693234375,30.296859805908202Q16.69841234375,30.542959805908204,16.69841234375,30.925769805908203L16.69841234375,37.9257698059082Q16.69841234375,38.308569805908206,16.94693234375,38.554669805908205Q17.19545234375,38.8007698059082,17.58204234375,38.8007698059082L20.23292234375,38.8007698059082Q20.61951234375,38.8007698059082,20.868032343750002,39.0468698059082Q21.11655234375,39.2929698059082,21.11655234375,39.6757698059082Q21.11655234375,40.058569805908206,20.868032343750002,40.304669805908205Q20.61951234375,40.5507698059082,20.23292234375,40.5507698059082L17.58204234375,40.5507698059082Z"
                                                            fill="#6366F1"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                class="del"
                                @click="
                                    delPerson(
                                        'certification',
                                        item.id,
                                        CertificationForm,
                                        index
                                    )
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="none"
                                    version="1.1"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 44 44"
                                >
                                    <defs>
                                        <filter
                                            id="master_svg0_26_9203"
                                            filterUnits="objectBoundingBox"
                                            color-interpolation-filters="sRGB"
                                            x="-0.28125"
                                            y="-0.21875"
                                            width="1.375"
                                            height="1.375"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feMorphology
                                                radius="-1"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            />
                                            <feOffset dy="1" dx="0" />
                                            <feGaussianBlur
                                                stdDeviation="1.5"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10000000149011612 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_dropShadow"
                                                result="effect2_dropShadow"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="master_svg1_26_9203">
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                            />
                                        </clipPath>
                                        <clipPath id="master_svg2_26_9204">
                                            <rect
                                                x="15.875"
                                                y="14"
                                                width="12.25"
                                                height="14"
                                                rx="0"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g filter="url(#master_svg0_26_9203)">
                                        <g
                                            clip-path="url(#master_svg1_26_9203)"
                                        >
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#FFFFFF"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <rect
                                                x="6"
                                                y="5"
                                                width="32"
                                                height="32"
                                                rx="16"
                                                fill="#000000"
                                                fill-opacity="0.0010000000474974513"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                            <g
                                                clip-path="url(#master_svg2_26_9204)"
                                            >
                                                <g
                                                    transform="matrix(1,0,0,-1,0,56.6015625)"
                                                >
                                                    <g>
                                                        <path
                                                            d="M19.56641,41.80858125L19.375,41.42578125L19.56641,41.80858125L19.375,41.42578125L16.75,41.42578125Q16.367188,41.42578125,16.121094,41.17968125Q15.875,40.93358125,15.875,40.55078125Q15.875,40.16798125,16.121094,39.92188125Q16.367188,39.67578125,16.75,39.67578125L27.25,39.67578125Q27.6328,39.67578125,27.8789,39.92188125Q28.125,40.16798125,28.125,40.55078125Q28.125,40.93358125,27.8789,41.17968125Q27.6328,41.42578125,27.25,41.42578125L24.625,41.42578125L24.433590000000002,41.80858125Q24.1875,42.27348125,23.64062,42.30078125L20.35938,42.30078125Q19.8125,42.27348125,19.56641,41.80858125ZM27.25,38.80078125L16.75,38.80078125L27.25,38.80078125L16.75,38.80078125L17.32422,29.53125125Q17.37891,29.01171925,17.73438,28.65625025Q18.11719,28.30078125,18.63672,28.30078125L25.36328,28.30078125Q25.8828,28.30078125,26.2656,28.65625025Q26.6211,29.01171925,26.675800000000002,29.53125125L27.25,38.80078125Z"
                                                            fill="#6B7280"
                                                            fill-opacity="1"
                                                            style="
                                                                mix-blend-mode: passthrough;
                                                            "
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="line myFlex flexs">
                            <div class="lf">{{ item.epName }}</div>
                            <div class="rt">{{ item.epTime }}</div>
                        </div>

                        <div class="line f12 mt5">
                            <div class="epContent">
                                {{ item.epContent }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="editor"></div>
        <!-- <selectpick
            :options="[
                [
                    {
                        label: '1',
                        val: '1'
                    },
                    {
                        label: '2',
                        val: '2'
                    }
                ]
            ]"
        /> -->
    </div>
</template>

<script setup lang="ts">
    import selectpick from "@/components/selectPick.vue";
    import editsec from "@/components/editSec.vue";
    import { service } from "@/http/service";
    import { toast } from "@/common/toast";
    import { useRouter } from "@/common/route";
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import { http, ajax } from "@/http/http";
    import { com, op } from "@/common/com";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back, tab } = useRouter();
    const feedRef = ref<any>(null);

    const resumeData = ref<any>({
        person: {}
    });
    const openPdf = async () => {
        const res = await service.getPdfSrc({
            uid: userStore.userInfo.uid,

            resumeRecordId: jlId.value
        });
        if (res.code == 0) {
            let downloadPdfUrl = res.data.downloadPdfUrl;
            push({
                url: "/pages/tjwx/viewPdf?pdf_url=" + downloadPdfUrl
            });
        }
        uni.hideLoading();
    };
    const downloadPdf = async () => {
        const res = await service.getPdfSrc({
            uid: userStore.userInfo.uid,

            resumeRecordId: jlId.value
        });
        if (res.code == 0) {
            let downloadPdfUrl = res.data.downloadPdfUrl;
            com.copyMsg(downloadPdfUrl, true, "下载链接已复制");
            // push({
            //     url: "/pages/tjwx/viewPdf?pdf_url=" + downloadPdfUrl
            // });
        }
        uni.hideLoading();
    };
    const temList = ref([
        {},
        {
            isPick: true
        },
        {}
    ]);
    const pickTem = (item) => {
        for (let v of temList.value) {
            v.isPick = false;
        }
        item.isPick = true;
    };
    const pform = ref([
        {
            label: "姓名",
            type: "input",
            val: "",
            placeholder: "请输入姓名"
        },
        {
            label: "联系电话",
            type: "input",
            val: "",
            placeholder: "请输入联系电话"
        },
        {
            label: "电子邮箱",
            type: "input",
            val: "",
            placeholder: "请输入电子邮箱"
        }
    ]);
    const ExperienceForm = ref([
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        },
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        }
    ]);
    const EducationForm = ref([
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        },
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        }
    ]);
    const ProjectsForm = ref([
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        },
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        }
    ]);
    const SkillsForm = ref([
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        },
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        }
    ]);
    const CertificationForm = ref([
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        },
        {
            epName: "企业级数据分析平台",
            epType: "数据分析",
            epTime: "2022-09-01-2023-09-01",
            epContent: "负责项目的需求分析、设计、开发、测试、部署和维护。"
        }
    ]);
    const pid = ref("");
    const editPerson = (key, id = 0) => {
        //type1 新增 2编辑
        push({
            url:
                "/pages/edit/edit?key=" +
                key +
                "&id=" +
                id +
                "&jlId=" +
                jlId.value
        });
    };
    const delPerson = (key, id, list, index) => {
        //删除key类型的ID项目
        if (key == "projects") {
            service.delProjects({
                uid: userStore.userInfo.uid,
                resumeRecordId: jlId.value,
                project: {
                    id: id
                }
            });
        }
        list.splice(index, 1);
    };
    const exit = () => {
        tab({
            url: "/pages/cjyj/cjyj"
        });
    };
    const jlId = ref("");
    const lastTime = ref();
    const getJLDetail = async () => {
        // 获取简历详情
        let res = await service.getResumeInfo({
            uid: userStore.userInfo.uid,
            resumeRecordId: jlId.value
        });
        let obj: any = {
            id: jlId.value
        };
        if (res.code == 0) {
            com.setItem("lastEditTime", com.format(new Date(), "hh:mm"));
            if (res.data.person) {
                obj.personItem = op.$op("pform");
                for (let v of obj.personItem) {
                    v.val = res.data.person[v.key];
                }
            }
            if (res.data.projects) {
                obj.projectsList = [];
                for (let v of res.data.projects) {
                    let o = {
                        id: v.id,
                        list: op.$op("prform")
                    };
                    for (let k in v) {
                        if (o.list.find((vv) => vv.key == k))
                            o.list.find((vv) => vv.key == k).val = v[k];
                    }
                    obj.projectsList.push(o);
                }
            }
            if (res.data.experience) {
                obj.experienceList = [];
                for (let v of res.data.experience) {
                    let o = {
                        id: v.id,
                        list: op.$op("exform")
                    };
                    for (let k in v) {
                        if (o.list.find((vv) => vv.key == k))
                            o.list.find((vv) => vv.key == k).val = v[k];
                    }
                    obj.experienceList.push(o);
                }
            }
            if (res.data.education) {
                obj.educationList = [];
                for (let v of res.data.education) {
                    let o = {
                        id: v.id,
                        list: op.$op("eform")
                    };
                    for (let k in v) {
                        if (o.list.find((vv) => vv.key == k))
                            o.list.find((vv) => vv.key == k).val = v[k];
                    }
                    obj.educationList.push(o);
                }
            }
            if (res.data.skills) {
                obj.skillsList = [];
                for (let v of res.data.skills) {
                    let o = {
                        id: v.id,
                        list: op.$op("sform")
                    };
                    for (let k in v) {
                        if (o.list.find((vv) => vv.key == k))
                            o.list.find((vv) => vv.key == k).val = v[k];
                    }
                    obj.skillsList.push(o);
                }
            }
            if (res.data.certifications) {
                obj.certificationList = [];
                for (let v of res.data.certifications) {
                    let o = {
                        id: v.id,
                        list: op.$op("cform")
                    };
                    for (let k in v) {
                        if (o.list.find((vv) => vv.key == k))
                            o.list.find((vv) => vv.key == k).val = v[k];
                    }
                    obj.certificationList.push(o);
                }
            }
        }
        console.log(obj);
        com.setItem("jlObj", obj);
        refreshData();
    };
    onLoad((op) => {
        console.log(op);
        com.setItem("editJlId", op!.id);
        jlId.value = op!.id;
        if (op?.type == "new") {
            com.setItem("lastEditTime", com.format(new Date(), "hh:mm"));
            com.setItem("jlObj", {
                id: op!.id
            });
        } else {
            getJLDetail(op.id);
        }
    });
    const refreshData = () => {
        let obj = com.getItem("jlObj");
        console.log(obj);
        lastTime.value = com.getItem("lastEditTime");
        if (obj?.personItem) {
            let pformAdd = obj.personItem;
            for (let v of pform.value) {
                for (let vv of pformAdd) {
                    if (v.label == vv.label) {
                        v.val = vv.val;
                    }
                }
            }
        }
        if (obj?.experienceList) {
            ExperienceForm.value = obj.experienceList.map((v) => {
                return {
                    ...v,
                    epName: v.list.find((vv) => vv.key == "companyName").val,
                    epType: v.list.find((vv) => vv.key == "jobTitle").val,
                    epTime:
                        v.list.find((vv) => vv.key == "startDate").val +
                        "-" +
                        v.list.find((vv) => vv.key == "endDate").val,
                    epContent: v.list.find((vv) => vv.key == "description").val
                };
            });
        } else {
            ExperienceForm.value = [];
        }
        if (obj?.educationList) {
            EducationForm.value = obj.educationList.map((v) => {
                return {
                    ...v,
                    epName: v.list.find((vv) => vv.key == "institutionName")
                        .val,
                    epType: v.list.find((vv) => vv.key == "major").val,
                    epTime:
                        v.list.find((vv) => vv.key == "startDate").val +
                        "-" +
                        v.list.find((vv) => vv.key == "endDate").val,
                    epContent: v.list.find((vv) => vv.key == "description").val
                };
            });
        } else {
            EducationForm.value = [];
        }
        if (obj?.projectsList) {
            ProjectsForm.value = obj.projectsList.map((v) => {
                return {
                    ...v,
                    epName: v.list.find((vv) => vv.key == "projectName").val,
                    epType: v.list.find((vv) => vv.key == "role").val,
                    epTime:
                        v.list.find((vv) => vv.key == "startDate").val +
                        "-" +
                        v.list.find((vv) => vv.key == "endDate").val,
                    epContent: v.list.find((vv) => vv.key == "description").val
                };
            });
        } else {
            ProjectsForm.value = [];
        }
        if (obj?.skillsList) {
            SkillsForm.value = obj.skillsList.map((v) => {
                return {
                    ...v,
                    epName: v.list.find((vv) => vv.key == "skillName").val
                    // epType: v.list.find((vv) => vv.key == "role").val,
                    // epTime:
                    //     v.list.find((vv) => vv.key == "startDate").val +
                    //     "-" +
                    //     v.list.find((vv) => vv.key == "endDate").val,
                    // epContent: v.list.find((vv) => vv.key == "description").val
                };
            });
        } else {
            SkillsForm.value = [];
        }
        if (obj?.certificationList) {
            CertificationForm.value = obj.certificationList.map((v) => {
                return {
                    ...v,
                    epName: v.list.find((vv) => vv.key == "certificationName")
                        .val,
                    epType: v.list.find((vv) => vv.key == "issuingOrganization")
                        .val,
                    epTime: v.list.find((vv) => vv.key == "issueDate").val,
                    // +
                    // "-" +
                    // v.list.find((vv) => vv.key == "endDate").val
                    epContent: v.list.find((vv) => vv.key == "description").val
                };
            });
        } else {
            CertificationForm.value = [];
        }
    };
    onShow((op) => {
        console.log(op);
        refreshData();
    });
    onMounted(() => {
        //
    });
</script>
<style lang="scss" scoped>
    .resume {
        padding: 0 20rpx;
        padding-top: 108rpx;
        padding-bottom: 150rpx;
        background-color: #f8fafc;
        min-height: 100vh;
        .floatTop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 108rpx;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 24rpx 32rpx;
            row-gap: 0rpx;
            flex-wrap: wrap;
            align-content: center;
            background-color: #fff;
            z-index: 20;
            .btn {
                width: 196.5rpx;
                height: 60rpx;
                /* 自动布局 */
                padding: 8rpx 24rpx;
                gap: 0rpx 20rpx;
                flex-wrap: wrap;
                z-index: 0;
                border-radius: 8rpx;
                opacity: 1;
                background: rgba(0, 0, 0, 0);
                box-sizing: border-box;
                border: 2rpx solid #e5e7eb;
                font-family: Roboto;
                font-size: 28rpx;
                font-weight: normal;
                line-height: 40rpx;
                text-align: center;
                letter-spacing: 0px;
                color: #4b5563;
            }
        }
        .floatBtm {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 124rpx;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 24rpx 32rpx;
            row-gap: 0rpx;
            flex-wrap: wrap;
            align-content: center;
            background-color: #fff;
            z-index: 20;
            .btn {
                width: 176rpx;
                height: 74rpx;
                /* 自动布局 */
                display: flex;
                flex-direction: column;
                padding: 16rpx 32rpx;
                gap: 0rpx 20rpx;
                flex-wrap: wrap;
                align-content: flex-start;
                letter-spacing: 0px;
                color: #4b5563;
                border-radius: 8rpx;
                opacity: 1;
                background: #4f46e5;
                font-family: Roboto;
                font-size: 28rpx;
                font-weight: normal;
                line-height: 42rpx;
                text-align: center;
                letter-spacing: 0px;
                color: #ffffff;
            }
        }
        .template {
            .title {
            }
            .box {
                width: 100%;
                overflow: auto;
            }
        }
    }
    .listBox {
        padding: 0 36rpx;
        width: fit-content;
        display: flex;

        .itemBox {
            width: 320rpx;
            .item {
                padding: 20rpx;
                .imgBox {
                    border-radius: 20.87rpx;
                    overflow: hidden;
                    background: #a5a5a5;
                    width: 100%;
                    padding: 20rpx;
                    .resImg {
                        border-radius: 20.87rpx;
                    }
                }
                .name {
                    margin-top: 20rpx;
                    font-family: Roboto;
                    font-size: 24.35rpx;
                    font-weight: bold;
                    line-height: 34.78rpx;
                    letter-spacing: 0px;
                    color: #000000;
                }
                .time {
                    font-family: Roboto;
                    font-size: 20.87rpx;
                    font-weight: normal;
                    line-height: 27.82rpx;
                    letter-spacing: 0px;
                    color: #6b7280;
                }
            }
        }
        .pick {
            border: 4rpx solid #4f46e5;
            border-radius: 24rpx;
        }
    }
    .section {
        padding: 32rpx;
        border-radius: 24rpx;
        background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.001),
                rgba(0, 0, 0, 0.001)
            ),
            #ffffff;
        box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.05);
        .titleBox {
            display: flex;
            justify-content: space-between;
            .title {
                font-family: Roboto;
                font-size: 32rpx;
                font-weight: 500;
                line-height: 48rpx;
                letter-spacing: 0px;
                color: #1f2937;
            }
            .rt {
                font-family: Roboto;
                font-size: 28rpx;
                font-weight: normal;
                line-height: 40rpx;
                text-align: center;
                letter-spacing: 0px;
                color: #4f46e5;
                display: flex;
                .btn {
                    margin: 0 20rpx;
                }
            }
        }
        .fitem {
            margin-top: 32rpx;
            .pt {
                position: relative;
            }
            .row {
                .floatBtnGroup {
                    position: absolute;
                    right: 0;
                    bottom: -35rpx;
                    z-index: 1;
                    display: flex;
                    justify-content: flex-end;
                }
                .label {
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: normal;
                    line-height: 40rpx;
                    letter-spacing: 0px;
                    color: #4b5563;
                }
                .val {
                    margin-top: 8rpx;
                    width: 100%;
                    height: 76rpx;
                    border-radius: 16rpx;
                    opacity: 1;
                    background: #ffffff;
                    box-sizing: border-box;
                    border: 2rpx solid #e5e7eb;
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: normal;
                    line-height: 76rpx;
                    letter-spacing: 0px;
                    color: #9ca3af;
                    padding-left: 24rpx;
                }
                .valBox {
                    background-color: #f6f6fd;
                    margin-top: 8rpx;
                    width: 100%;
                    min-height: 76rpx;
                    border-radius: 16rpx;
                    opacity: 1;
                    // background: #ffffff;
                    box-sizing: border-box;
                    border: 2rpx solid #e5e7eb;
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: normal;
                    line-height: 76rpx;
                    letter-spacing: 0px;
                    color: #9ca3af;
                    padding: 26rpx;
                    padding-bottom: 40rpx;
                    .line {
                        justify-content: space-between;
                        line-height: 42rpx;
                        .lf {
                            font-family: Roboto;
                            font-size: 24rpx;
                            font-weight: bold;
                            line-height: 42rpx;
                            letter-spacing: 0px;
                            color: #1f2937;
                        }
                        .rt {
                            font-family: Roboto;
                            font-size: 24rpx;
                            font-weight: normal;
                            line-height: 40rpx;
                            letter-spacing: 0px;
                            color: #6b7280;
                        }
                        .epType {
                            font-family: Roboto;
                            font-size: 28rpx;
                            font-weight: normal;
                            line-height: 40rpx;
                            letter-spacing: 0px;
                            color: #4b5563;
                        }
                        .epContent {
                            font-family: Roboto;
                            font-size: 28rpx;
                            font-weight: normal;
                            line-height: 40rpx;
                            letter-spacing: 0px;
                            color: #4b5563;
                        }
                    }
                }
            }
        }
    }
</style>
