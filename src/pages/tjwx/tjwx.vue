<!--  -->
<template>
    <div class="tjwxPage page">
        <div class="fixedBox">
            <div class="searchBox">
                <div class="search sd bd">
                    <div class="inputBox">
                        <div class="iconBox vcenter">
                            <up-icon
                                name="search"
                                color="#009963"
                                size="28"
                            ></up-icon>
                        </div>
                        <input
                            v-model="kw"
                            class="searchInput"
                            placeholder="内测阶段仅支持经管类学科文献检索"
                        />
                        <div
                            class="iconBox2 close vcenter"
                            @click="clearKw"
                            v-show="kw"
                        >
                            <up-icon
                                name="close-circle"
                                color="gray"
                                size="16"
                            ></up-icon>
                        </div>
                        <div
                            class="btnBox vcenter"
                            @click="isShowTypeVisible = true"
                        >
                            <div class="btn cg">搜索</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toolsBox">
                <div class="tools mt10">
                    <div class="item vcenter">
                        <u-checkbox-group size="14" v-model="allChecked">
                            <u-checkbox
                                :checked="allChecked.length == 1"
                                @change="changeAllPick"
                                label-size="10"
                                size="14"
                                activeColor="#009963"
                                label="全选"
                                name="true"
                            ></u-checkbox>
                        </u-checkbox-group>
                    </div>
                    <div class="item vcenter" @click="showFilter">
                        <div class="flex">
                            <div
                                class="text f10"
                                :class="isFilter ? 'cg' : 'ci'"
                            >
                                筛选
                            </div>
                            <div class="iconBox vcenter">
                                <up-icon
                                    name="arrow-down"
                                    :color="isFilter ? '#009963' : 'gray'"
                                    size="12"
                                ></up-icon>
                            </div>
                        </div>
                    </div>
                    <div class="item vcenter" @click="showOption">
                        <div class="flex">
                            <div class="text f10 ci">排序</div>
                            <div class="iconBox vcenter">
                                <up-icon
                                    name="arrow-down"
                                    color="gray"
                                    size="12"
                                ></up-icon>
                            </div>
                        </div>
                    </div>
                    <div class="item vcenter">
                        <div class="flex">
                            <div
                                @click="showType = 1"
                                class="text f10"
                                :class="showType == 1 ? 'cg' : 'ci'"
                            >
                                全部结果
                            </div>
                        </div>
                    </div>
                    <div class="item vcenter">
                        <div class="flex">
                            <div
                                @click="showType = 2"
                                class="text f10"
                                :class="showType == 1 ? 'ci' : 'cg'"
                            >
                                勾选文献列表
                            </div>
                        </div>
                    </div>
                    <div class="grow item"></div>
                    <div
                        class="item mbtn cbgg cw f10 vcenter"
                        v-if="ailist.length <= 30"
                        @click="aiAutoPick"
                    >
                        <div class="center">
                            <div class="text" v-if="ailist.length == 0">
                                AI智选
                            </div>
                            <div class="text" v-if="ailist.length > 0">
                                再推荐10篇
                            </div>
                            <div
                                class="imgBox vcenter"
                                v-if="ailist.length == 0"
                            >
                                <image
                                    class="resImg"
                                    src="/static/rywx/kfd.png"
                                    mode="scaleToFill"
                                />
                            </div>
                            <div class="text" v-if="ailist.length == 0">
                                150
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="filter"
                    :style="{
                        maxHeight: isShowFilter ? '500px' : '0'
                    }"
                >
                    <div class="row">
                        <div class="label f10 cg">文献语言</div>
                        <div class="val f10">
                            <div
                                class="item"
                                :class="item.isPick ? 'cg' : 'ci'"
                                v-for="(item, index) of ops.language"
                                :key="index"
                                @click="clickOp('language', item)"
                            >
                                {{ item.label }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="label f10 cg">文献类型</div>
                        <div class="val f10">
                            <div
                                class="item"
                                :class="item.isPick ? 'cg' : 'ci'"
                                v-for="(item, index) of ops.classification"
                                :key="index"
                                @click="clickOp('classification', item)"
                                :style="{
                                    paddingLeft:
                                        item.val == '问卷调查类' ? '0' : '0'
                                }"
                            >
                                {{ item.label }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="label f10 cg">年份</div>
                        <div class="val f10">
                            <div
                                class="item"
                                :class="item.isPick ? 'cg' : 'ci'"
                                v-for="(item, index) of ops.year"
                                :key="index"
                                @click="clickOp('year', item)"
                            >
                                {{ item.label }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="label f10 cg">期刊等级</div>
                        <div class="val f10">
                            <div
                                class="item"
                                :class="item.isPick ? 'cg' : 'ci'"
                                v-for="(item, index) of ops.level"
                                :key="index"
                                @click="clickOp('level', item)"
                            >
                                {{ item.label }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="label f10 cg">学科</div>
                        <div class="val f10">
                            <div
                                class="item"
                                :class="item.isPick ? 'cg' : 'ci'"
                                v-for="(item, index) of ops.subject"
                                :key="index"
                                @click="clickOp('subject', item)"
                            >
                                {{ item.label }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="btnGroup">
                            <div class="btn cbgg cw f12" @click="reStoreFilter">
                                重置
                            </div>
                            <div class="btn cbgg cw f12" @click="hideFilter">
                                确定
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mlistBox mt5">
            <div
                class="ailist list"
                :class="
                    (ailist.length && showType != 2) ||
                    ailist.filter((v: any) => v.isPick.length).length
                        ? 'pd'
                        : ''
                "
                v-show="ailist.length > 0"
            >
                <div
                    class="item item2"
                    v-for="(item, index) in showType == 1
                        ? ailist
                        : ailist.filter((v) => v.isPick.length == 1)"
                    :key="index"
                >
                    <div class="lf">
                        <div class="cbox wcenter">
                            <u-checkbox-group size="14" v-model="item.isPick">
                                <u-checkbox
                                    @change="changeCheckbox(item)"
                                    :checked="item.isPick.length == 1"
                                    label-size="10"
                                    activeColor="#009963"
                                    :name="true"
                                ></u-checkbox>
                            </u-checkbox-group>
                        </div>
                        <div class="f10 wcenter" style="margin-right: 0px">
                            {{ item.reference || 0 }}
                            <!-- {{ index + 1 }} -->
                        </div>
                        <div class="f8 wcenter" style="margin-right: 0px">
                            {{ "被引量" }}
                        </div>
                    </div>
                    <div class="med" @click="goToDetail(item)">
                        <div class="name f10 bold hidden3">
                            {{ item.title }}
                        </div>
                        <div class="info f8 mt5 hidden hidden">
                            {{
                                item.year +
                                "," +
                                "《" +
                                item.journal +
                                "》" +
                                "," +
                                item.authors
                            }}
                        </div>
                        <div class="tags mt5">
                            <div class="tag cbgg cw bd f8">
                                {{ item.level }}
                            </div>
                            <div class="tag cbgg cw bd f8">
                                IF:{{ item.impact_factor }}
                            </div>
                            <div class="tag cbgg cw bd f8">
                                {{ item.subject }}
                            </div>
                            <div
                                class="tag bd f8"
                                style="
                                    background-color: #009963;
                                    color: #fff;
                                    align-self: flex-end;
                                "
                                v-if="item.summarys"
                            >
                                已解读
                            </div>
                        </div>
                    </div>
                    <div
                        class="lf vcenter"
                        @click="singleDownload(item)"
                        v-show="!item.isdownload"
                    >
                        <div class="imgBox vcenter">
                            <up-icon
                                name="download"
                                color="gray"
                                size="24"
                            ></up-icon>
                        </div>
                    </div>
                    <div class="lf vcenter" v-show="item.isdownload">
                        <div class="imgBox vcenter" style="min-width: 32px">
                            <div class="cg vcenter f10">已下载</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list" :class="{}">
                <div
                    class="item item2"
                    v-for="(item, index) in showType == 1
                        ? list.filter((v) => !v.isAi)
                        : list
                              .filter((v) => !v.isAi)
                              .filter((v) => v.isPick.length == 1)"
                    :key="index"
                >
                    <div class="lf">
                        <div class="cbox wcenter">
                            <u-checkbox-group size="14" v-model="item.isPick">
                                <u-checkbox
                                    @change="changeCheckbox(item)"
                                    :checked="item.isPick.length == 1"
                                    label-size="10"
                                    activeColor="#009963"
                                    :name="true"
                                ></u-checkbox>
                            </u-checkbox-group>
                        </div>
                        <div class="f10 wcenter" style="margin-right: 0px">
                            <!-- {{ index + 1 + ailist.length }} -->
                            {{ item.reference || 0 }}
                        </div>
                        <div class="f8 wcenter" style="margin-right: 0px">
                            {{ "被引量" }}
                        </div>
                    </div>
                    <div class="med" @click="goToDetail(item)">
                        <div
                            class="name f10 bold hidden3"
                            :class="item.isAi ? 'cg' : '#1c170d'"
                        >
                            {{ item.isAi ? "【AI智选】 " : "" }}
                            {{ item.title }}
                        </div>
                        <div class="info f8 mt5 hidden hidden">
                            {{
                                item.year +
                                "," +
                                "《" +
                                item.journal +
                                "》" +
                                "," +
                                item.authors
                            }}
                        </div>
                        <div class="tags mt5">
                            <div class="tag cbgg cw bd f8">
                                {{ item.level }}
                            </div>
                            <div class="tag cbgg cw bd f8">
                                IF:{{ item.impact_factor }}
                            </div>
                            <div class="tag cbgg cw bd f8">
                                {{ item.subject }}
                            </div>
                            <div
                                class="tag bd f8"
                                style="
                                    background-color: #009963;
                                    color: #fff;
                                    align-self: flex-end;
                                "
                                v-if="item.summarys"
                            >
                                已解读
                            </div>
                        </div>
                    </div>
                    <div
                        class="lf vcenter"
                        v-show="!item.isdownload"
                        @click="singleDownload(item)"
                    >
                        <div class="imgBox vcenter">
                            <up-icon
                                name="download"
                                color="gray"
                                size="24"
                            ></up-icon>
                        </div>
                    </div>
                    <div class="lf vcenter" v-show="item.isdownload">
                        <div class="imgBox vcenter" style="min-width: 32px">
                            <div class="cg vcenter f10">已下载</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="floatBtm" v-if="true || hasPickList.length">
            <div class="info f10 ci">
                <!-- <div class="lf">明细</div>
                <div class="rt">明细</div> -->
            </div>
            <div class="btnGroup">
                <div class="lf f12 ci">
                    <div class="item">已选 {{ hasPickList.length }}</div>
                    <div class="item" @click="clearPickArr">清除</div>
                </div>
                <div class="rt">
                    <div
                        class="item mbtn cbgg cw f12 vcenter"
                        @click="mulDownload"
                    >
                        <div class="center">
                            <div class="text">批量下载</div>
                            <div class="imgBox vcenter">
                                <image
                                    class="resImg"
                                    src="/static/rywx/kfd.png"
                                    mode="scaleToFill"
                                />
                            </div>
                            <div class="text">
                                {{ hasPickList.length * 10 }}
                            </div>
                        </div>
                    </div>
                    <div
                        v-show="isCanCreateWXZS"
                        class="item mbtn cbgg cw f12 vcenter"
                        @click="mulSummarize"
                    >
                        <div class="center">
                            <div class="text">批量总结</div>
                            <div class="imgBox vcenter">
                                <image
                                    class="resImg"
                                    src="/static/rywx/kfd.png"
                                    mode="scaleToFill"
                                />
                            </div>
                            <div class="text">{{ mulSummarizeCfd }}</div>
                        </div>
                    </div>
                    <div
                        v-show="!isCanCreateWXZS"
                        class="item mbtn cbgg cw f12 vcenter"
                        @click="mulSummarize"
                    >
                        <div class="center">
                            <div class="text">查看总结</div>
                            <div class="imgBox vcenter">
                                <image
                                    class="resImg"
                                    src="/static/rywx/kfd.png"
                                    mode="scaleToFill"
                                />
                            </div>
                            <!-- <div class="text">{{ mulSummarizeCfd }}</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="myModal clearModal" v-if="isShowAiModalVisible">
            <div class="outterBox">
                <div class="innerBox f12">
                    <div class="close" @click="isShowAiModalVisible = false">
                        <up-icon name="close" color="gray" size="20"></up-icon>
                    </div>
                    <div class="p bold">
                        如影帮你筛选出了20篇高相关且高质量的文献~
                    </div>
                    <div class="p">
                        高相关：AI从海量文献中找到与你研究最接近最能提供灵感的文献，甚至帮你找到核心概念蕴含的理论和经典文献~
                    </div>
                    <div class="p">
                        高质量：将综合考虑你的研究目的、文献质量、被引用量、发表年份等因素
                    </div>
                    <div class="bold bd">
                        你可以直接批量总结或者批量下载这些文献
                    </div>
                    <div class="btnGroup mt5">
                        <div
                            class="item mbtn cbgg cw f12 vcenter"
                            @click="mulDownload"
                        >
                            <div class="center">
                                <div class="text">批量下载</div>
                                <div class="imgBox vcenter">
                                    <image
                                        class="resImg"
                                        src="/static/rywx/kfd.png"
                                        mode="scaleToFill"
                                    />
                                </div>
                                <div
                                    class="text"
                                    v-if="hasPickList.length * 10"
                                >
                                    {{ hasPickList.length * 10 }}
                                </div>
                            </div>
                        </div>
                        <div
                            class="item mbtn cbgg cw f12 vcenter"
                            @click="mulSummarize"
                        >
                            <div class="center">
                                <div class="text">批量总结</div>
                                <div class="imgBox vcenter">
                                    <image
                                        class="resImg"
                                        src="/static/rywx/kfd.png"
                                        mode="scaleToFill"
                                    />
                                </div>
                                <div class="text">{{ mulSummarizeCfd }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearModal" v-if="userSelfTimeVisible">
            <div class="outterBox">
                <div class="innerBox sd">
                    <div class="close" @click="closeUserSelfVisible">
                        <up-icon name="close" color="gray" size="20"></up-icon>
                    </div>
                    <div class="title center f16">自定义筛选年份</div>
                    <div class="timeBox mt20">
                        <div class="inputBox flex flexs">
                            <div class="label f14 vcenter">开始年份</div>
                            <input
                                class="sd myInput"
                                type="number"
                                v-model="stime"
                                maxlength="4"
                                placeholder=""
                                placeholder-class="input-placeholder"
                            />
                        </div>
                        <div class="inputBox flex flexs">
                            <div class="label f14 vcenter">结束年份</div>
                            <input
                                class="sd myInput"
                                type="number"
                                maxlength="4"
                                v-model="etime"
                                placeholder=""
                                placeholder-class="input-placeholder"
                            />
                        </div>
                    </div>
                    <div class="btnGroup">
                        <div
                            class="item mbtn cbgg cw f12 vcenter w100"
                            @click="checkFilterYear"
                        >
                            <div class="center">
                                <div class="text">确定</div>
                                <!-- <div class="imgBox vcenter">
                                    <image
                                        class="resImg"
                                        src="/static/rywx/kfd.png"
                                        mode="scaleToFill"
                                    />
                                </div> -->
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- startPop -->
        <div class="clearModal" v-if="isShowTypeVisible">
            <div class="outerBox">
                <div class="innerBox center">
                    <div class="container">
                        <div class="close" @click="clickClose">
                            <up-icon
                                name="close"
                                color="#333"
                                size="20"
                            ></up-icon>
                        </div>
                        <div class="title f12 bold">写这篇综述是为了完成：</div>
                        <div class="list mt15">
                            <div
                                class="item f10"
                                v-for="(item, index) of typeList"
                                @click="clickTypeList(item)"
                                :key="index"
                                :class="{
                                    bcg: item.isPick,
                                    cg: item.isPick
                                }"
                            >
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="info f8 mt10 alf">
                            {{ pickTypeItem?.info }}
                        </div>
                        <div class="center">
                            <div class="btn cbgg mt15 f12" @click="goSearch">
                                确定
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearModal" v-if="isShowMulSummarizeVisible">
            <div class="outterBox">
                <div class="innerBox sd checkContentBox">
                    <div class="checkContent">
                        <div class="title f18 center bold">批量总结文献</div>
                        <div class="show">
                            <span class="label f14"> 本次将消耗 </span>
                            <span class="val f17 bold cg">
                                {{ mulSummarizeCfd }}</span
                            >
                            <span class="val f16 bold cg">知识豆 </span>
                        </div>
                        <div class="infoBox">
                            <div class="info">
                                <div class="row myFlex flexs">
                                    <div class="iconBox vcenter">
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.49577 15.0004C6.53483 15.0004 5.59733 14.8202 4.70964 14.4643C3.81022 14.1039 2.99723 13.578 2.29557 12.9013C1.59538 12.226 1.0402 11.435 0.64616 10.5487C0.237469 9.63174 0.020672 8.65322 0.00162907 7.64101C-0.0174139 6.62881 0.162762 5.64297 0.536297 4.71133C0.896649 3.81191 1.42253 2.99892 2.09929 2.29726C2.77458 1.5956 3.56559 1.04043 4.45182 0.646385C5.36882 0.237694 6.34733 0.0208971 7.35954 0.00185413C8.37175 -0.0171888 9.35759 0.162987 10.2892 0.536522C11.1886 0.896874 12.0016 1.42275 12.7033 2.09951C13.4049 2.7748 13.9601 3.56728 14.3542 4.45351C14.7629 5.37051 14.9797 6.34902 14.9987 7.36123C15.0177 8.37344 14.8376 9.35928 14.464 10.2909C14.1037 11.1903 13.5778 12.0033 12.901 12.705C12.2257 13.4066 11.4333 13.9618 10.547 14.3559C9.63005 14.7646 8.65153 14.9813 7.63932 15.0004H7.49577ZM7.50456 0.804589C7.46208 0.804589 7.41813 0.804589 7.37565 0.806053C6.47184 0.823632 5.5988 1.01699 4.77995 1.38027C3.98893 1.73183 3.28288 2.22842 2.67936 2.85537C2.07585 3.48232 1.6071 4.20742 1.28483 5.01016C0.949383 5.84219 0.789715 6.72109 0.805828 7.62637C0.823406 8.53017 1.01677 9.40322 1.38005 10.2221C1.73161 11.0131 2.22819 11.7191 2.85514 12.3227C3.4821 12.9262 4.2072 13.3949 5.00993 13.7172C5.84196 14.0512 6.72087 14.2108 7.62468 14.1947C8.52848 14.1771 9.40153 13.9838 10.2204 13.6205C11.0114 13.2689 11.7174 12.7724 12.321 12.1454C12.9245 11.5185 13.3932 10.7934 13.7155 9.99062C14.0495 9.15859 14.2091 8.27969 14.193 7.37588C14.1755 6.47207 13.9821 5.59902 13.6188 4.78017C13.2673 3.98916 12.7707 3.2831 12.1437 2.67959C11.5168 2.07607 10.7917 1.60732 9.98893 1.28506C9.19792 0.965721 8.36296 0.804589 7.50456 0.804589Z"
                                                fill="#7D7E80"
                                            />
                                            <path
                                                d="M7.5 11.6206C7.41943 11.6206 7.34912 11.6089 7.28027 11.5855C7.21143 11.5503 7.14111 11.5049 7.0957 11.4595C7.03711 11.4009 6.9917 11.3438 6.96826 11.2749C6.93311 11.2046 6.92139 11.1255 6.92139 11.0435C6.92139 10.894 6.97852 10.7432 7.09424 10.6392C7.30225 10.4209 7.68164 10.4209 7.90137 10.6392C8.01709 10.7446 8.07422 10.894 8.07422 11.0435C8.07422 11.124 8.0625 11.2046 8.02734 11.2749C8.00391 11.3438 7.9585 11.4009 7.8999 11.4595C7.80029 11.5635 7.65088 11.6206 7.5 11.6206ZM7.5 9.08496C7.27734 9.08496 7.09717 8.90479 7.09717 8.68213V3.95068C7.09717 3.72803 7.27734 3.54785 7.5 3.54785C7.72266 3.54785 7.90283 3.72803 7.90283 3.95068V8.68213C7.90283 8.90479 7.72266 9.08496 7.5 9.08496Z"
                                                fill="#7D7E80"
                                            />
                                        </svg>
                                    </div>
                                    <div class="text f12 ml5 vcenter">
                                        消耗规则：
                                    </div>
                                </div>
                                <div class="row mt5">
                                    <div class="text ml30 f12">
                                        • 20篇及以下：1000知识豆
                                    </div>
                                </div>
                                <div class="row mt5">
                                    <div class="text ml30 f12">
                                        • 21-50篇：2000知识豆
                                    </div>
                                </div>
                                <div class="row mt5">
                                    <div class="text ml30 f12">
                                        • 50篇以上：5000知识豆
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btnGroup mt20">
                            <div
                                class="cancle f16 btn"
                                @click="isShowMulSummarizeVisible = false"
                            >
                                取消
                            </div>
                            <div
                                class="submit f16 cg btn"
                                @click="mulSummarizeSubmit"
                            >
                                确认总结
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearModal" v-if="isShowMulDownloadVisible">
            <div class="outterBox">
                <div class="innerBox sd checkContentBox">
                    <div class="checkContent">
                        <div class="title f18 center bold">批量下载文献</div>
                        <div class="show">
                            <span class="label f16">
                                文献*{{ hasPickList.length }} ,
                            </span>
                            <span class="val f17 bold cg">
                                {{ hasPickList.length * 10 }}</span
                            >
                            <span class="val f16 bold cg">知识豆 </span>
                        </div>
                        <div class="infoBox">
                            <div class="info">
                                <div class="row myFlex flexs">
                                    <div class="iconBox vcenter">
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.49577 15.0004C6.53483 15.0004 5.59733 14.8202 4.70964 14.4643C3.81022 14.1039 2.99723 13.578 2.29557 12.9013C1.59538 12.226 1.0402 11.435 0.64616 10.5487C0.237469 9.63174 0.020672 8.65322 0.00162907 7.64101C-0.0174139 6.62881 0.162762 5.64297 0.536297 4.71133C0.896649 3.81191 1.42253 2.99892 2.09929 2.29726C2.77458 1.5956 3.56559 1.04043 4.45182 0.646385C5.36882 0.237694 6.34733 0.0208971 7.35954 0.00185413C8.37175 -0.0171888 9.35759 0.162987 10.2892 0.536522C11.1886 0.896874 12.0016 1.42275 12.7033 2.09951C13.4049 2.7748 13.9601 3.56728 14.3542 4.45351C14.7629 5.37051 14.9797 6.34902 14.9987 7.36123C15.0177 8.37344 14.8376 9.35928 14.464 10.2909C14.1037 11.1903 13.5778 12.0033 12.901 12.705C12.2257 13.4066 11.4333 13.9618 10.547 14.3559C9.63005 14.7646 8.65153 14.9813 7.63932 15.0004H7.49577ZM7.50456 0.804589C7.46208 0.804589 7.41813 0.804589 7.37565 0.806053C6.47184 0.823632 5.5988 1.01699 4.77995 1.38027C3.98893 1.73183 3.28288 2.22842 2.67936 2.85537C2.07585 3.48232 1.6071 4.20742 1.28483 5.01016C0.949383 5.84219 0.789715 6.72109 0.805828 7.62637C0.823406 8.53017 1.01677 9.40322 1.38005 10.2221C1.73161 11.0131 2.22819 11.7191 2.85514 12.3227C3.4821 12.9262 4.2072 13.3949 5.00993 13.7172C5.84196 14.0512 6.72087 14.2108 7.62468 14.1947C8.52848 14.1771 9.40153 13.9838 10.2204 13.6205C11.0114 13.2689 11.7174 12.7724 12.321 12.1454C12.9245 11.5185 13.3932 10.7934 13.7155 9.99062C14.0495 9.15859 14.2091 8.27969 14.193 7.37588C14.1755 6.47207 13.9821 5.59902 13.6188 4.78017C13.2673 3.98916 12.7707 3.2831 12.1437 2.67959C11.5168 2.07607 10.7917 1.60732 9.98893 1.28506C9.19792 0.965721 8.36296 0.804589 7.50456 0.804589Z"
                                                fill="#7D7E80"
                                            />
                                            <path
                                                d="M7.5 11.6206C7.41943 11.6206 7.34912 11.6089 7.28027 11.5855C7.21143 11.5503 7.14111 11.5049 7.0957 11.4595C7.03711 11.4009 6.9917 11.3438 6.96826 11.2749C6.93311 11.2046 6.92139 11.1255 6.92139 11.0435C6.92139 10.894 6.97852 10.7432 7.09424 10.6392C7.30225 10.4209 7.68164 10.4209 7.90137 10.6392C8.01709 10.7446 8.07422 10.894 8.07422 11.0435C8.07422 11.124 8.0625 11.2046 8.02734 11.2749C8.00391 11.3438 7.9585 11.4009 7.8999 11.4595C7.80029 11.5635 7.65088 11.6206 7.5 11.6206ZM7.5 9.08496C7.27734 9.08496 7.09717 8.90479 7.09717 8.68213V3.95068C7.09717 3.72803 7.27734 3.54785 7.5 3.54785C7.72266 3.54785 7.90283 3.72803 7.90283 3.95068V8.68213C7.90283 8.90479 7.72266 9.08496 7.5 9.08496Z"
                                                fill="#7D7E80"
                                            />
                                        </svg>
                                    </div>
                                    <div class="text f10 ml5 vcenter">
                                        注意：文献下载链接有效期30天，请尽快下载~
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btnGroup mt20">
                            <div
                                class="cancle f16 btn"
                                @click="isShowMulDownloadVisible = false"
                            >
                                取消
                            </div>
                            <div
                                class="submit f16 cg btn"
                                @click="mulDownloadSumbit"
                            >
                                确认下载
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearModal" v-if="isShowSingleDownloadVisible">
            <div class="outterBox">
                <div class="innerBox sd checkContentBox">
                    <div class="checkContent">
                        <div class="title f18 center bold">下载文献</div>
                        <div class="show">
                            <span class="label f16"> 文献*{{ 1 }} , </span>
                            <span class="val f17 bold cg"> {{ 1 * 10 }}</span>
                            <span class="val f16 bold cg">知识豆 </span>
                        </div>
                        <div class="infoBox" v-if="false">
                            <div class="info">
                                <div class="row myFlex flexs">
                                    <div class="iconBox vcenter">
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.49577 15.0004C6.53483 15.0004 5.59733 14.8202 4.70964 14.4643C3.81022 14.1039 2.99723 13.578 2.29557 12.9013C1.59538 12.226 1.0402 11.435 0.64616 10.5487C0.237469 9.63174 0.020672 8.65322 0.00162907 7.64101C-0.0174139 6.62881 0.162762 5.64297 0.536297 4.71133C0.896649 3.81191 1.42253 2.99892 2.09929 2.29726C2.77458 1.5956 3.56559 1.04043 4.45182 0.646385C5.36882 0.237694 6.34733 0.0208971 7.35954 0.00185413C8.37175 -0.0171888 9.35759 0.162987 10.2892 0.536522C11.1886 0.896874 12.0016 1.42275 12.7033 2.09951C13.4049 2.7748 13.9601 3.56728 14.3542 4.45351C14.7629 5.37051 14.9797 6.34902 14.9987 7.36123C15.0177 8.37344 14.8376 9.35928 14.464 10.2909C14.1037 11.1903 13.5778 12.0033 12.901 12.705C12.2257 13.4066 11.4333 13.9618 10.547 14.3559C9.63005 14.7646 8.65153 14.9813 7.63932 15.0004H7.49577ZM7.50456 0.804589C7.46208 0.804589 7.41813 0.804589 7.37565 0.806053C6.47184 0.823632 5.5988 1.01699 4.77995 1.38027C3.98893 1.73183 3.28288 2.22842 2.67936 2.85537C2.07585 3.48232 1.6071 4.20742 1.28483 5.01016C0.949383 5.84219 0.789715 6.72109 0.805828 7.62637C0.823406 8.53017 1.01677 9.40322 1.38005 10.2221C1.73161 11.0131 2.22819 11.7191 2.85514 12.3227C3.4821 12.9262 4.2072 13.3949 5.00993 13.7172C5.84196 14.0512 6.72087 14.2108 7.62468 14.1947C8.52848 14.1771 9.40153 13.9838 10.2204 13.6205C11.0114 13.2689 11.7174 12.7724 12.321 12.1454C12.9245 11.5185 13.3932 10.7934 13.7155 9.99062C14.0495 9.15859 14.2091 8.27969 14.193 7.37588C14.1755 6.47207 13.9821 5.59902 13.6188 4.78017C13.2673 3.98916 12.7707 3.2831 12.1437 2.67959C11.5168 2.07607 10.7917 1.60732 9.98893 1.28506C9.19792 0.965721 8.36296 0.804589 7.50456 0.804589Z"
                                                fill="#7D7E80"
                                            />
                                            <path
                                                d="M7.5 11.6206C7.41943 11.6206 7.34912 11.6089 7.28027 11.5855C7.21143 11.5503 7.14111 11.5049 7.0957 11.4595C7.03711 11.4009 6.9917 11.3438 6.96826 11.2749C6.93311 11.2046 6.92139 11.1255 6.92139 11.0435C6.92139 10.894 6.97852 10.7432 7.09424 10.6392C7.30225 10.4209 7.68164 10.4209 7.90137 10.6392C8.01709 10.7446 8.07422 10.894 8.07422 11.0435C8.07422 11.124 8.0625 11.2046 8.02734 11.2749C8.00391 11.3438 7.9585 11.4009 7.8999 11.4595C7.80029 11.5635 7.65088 11.6206 7.5 11.6206ZM7.5 9.08496C7.27734 9.08496 7.09717 8.90479 7.09717 8.68213V3.95068C7.09717 3.72803 7.27734 3.54785 7.5 3.54785C7.72266 3.54785 7.90283 3.72803 7.90283 3.95068V8.68213C7.90283 8.90479 7.72266 9.08496 7.5 9.08496Z"
                                                fill="#7D7E80"
                                            />
                                        </svg>
                                    </div>
                                    <div class="text f10 ml5 vcenter">
                                        注意：文献下载链接有效期30天，请尽快下载~
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btnGroup mt20">
                            <div
                                class="cancle f16 btn"
                                @click="isShowSingleDownloadVisible = false"
                            >
                                取消
                            </div>
                            <div
                                class="submit f16 cg btn"
                                @click="singleDownloadSumbit"
                            >
                                确认下载
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- endPop -->
        <up-picker
            ref="uPickerRef"
            @confirm="confirm"
            @cancel="cancel"
            @change="changeHandler"
            :show="show"
            title="排序"
            keyName="label"
            :columns="options.picker"
            :closeOnClickOverlay="true"
            :close="closePicker"
        ></up-picker>
    </div>
</template>

<script setup lang="ts">
    import { http, ajax } from "@/http/http";
    import tabbar from "@/components/tabbar.vue";
    import { service } from "@/http/service";
    import { toast } from "@/common/toast";
    import { useRouter } from "@/common/route";
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import { com } from "@/common/com";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    const iDisplayLength = ref(10);
    const hasMore = ref(true);
    const hasLoading = ref(false);
    const total = ref(0);
    const list = ref<any>([]);
    const ailist = ref<any>([]);
    const showType = ref(1);
    const clearPickArr = () => {
        allChecked.value = [];
        console.log(allChecked.value);
        for (let v of list.value) {
            v.isPick = allChecked.value;
        }
        for (let v of ailist.value) {
            v.isPick = allChecked.value;
        }
    };
    const hasPickList = computed(() => {
        let arr = list.value.filter((v: any) => {
            return v.isPick.length == 1;
        });
        let aiarr = ailist.value.filter((v: any) => {
            return v.isPick.length == 1;
        });
        return [...arr, ...aiarr];
    });
    const changeAllPick = (e: any) => {
        setTimeout(() => {
            for (let v of list.value) {
                if (!v.isAi)
                    v.isPick = allChecked.value.length == 1 ? [true] : [];
            }
            for (let v of ailist.value) {
                v.isPick = allChecked.value.length == 1 ? [true] : [];
            }
        }, 100);
    };
    const changeCheckbox = (item: any) => {
        console.log(item);
    };
    const clickOp = (key, item) => {
        for (let v of ops.value[key]) {
            if (v.val == item.val) {
                v.isPick = !item.isPick;
            } else {
                v.isPick = false;
            }
        }
        if (key == "year" && item.key == "custom") {
            console.log("自定义");
            userSelfTimeVisible.value = true;
        }
    };
    const isShowTypeVisible = ref(false);
    const showTypeListPop = () => {
        isShowTypeVisible.value = true;
        uni.setStorageSync("pickSc", pickTypeItem.value);
    };
    const clickClose = () => {
        isShowTypeVisible.value = false;
    };
    const typeList = ref([
        {
            name: "课程论文",
            key: "0",
            isPick: true,
            info: "课程论文一般为3000-5000字，学术挑战性适中"
        },
        {
            name: "开题报告",
            key: "1",
            isPick: false,
            info: "开题报告一般为8000-1.2万字，有一定学术挑战性"
        },
        {
            name: "发表论文",
            key: "2",
            isPick: false,
            info: "发表论文一般为1.2万-1.5万字，学术挑战性较高"
        }
    ]);
    const pickTypeItem = computed(() => {
        return typeList.value.find((v) => v.isPick);
    });
    const clickTypeList = (item: any) => {
        for (let v of typeList.value) {
            v.isPick = false;
        }
        item.isPick = true;
        uni.setStorageSync("pickSc", pickTypeItem.value);
    };
    const goSearch = () => {
        if (!kw.value) {
            toast("请输入关键词");
            return;
        }
        ajax.post("/school/info/api/task/save", {
            taskmsg: {
                uid: userStore.userInfo.uid,
                topicName: kw.value,
                target: pickTypeItem?.value?.key,
                completeTime: com.format(
                    new Date(new Date()),
                    "YYYY-MM-DD hh:mm:ss"
                )
            }
        }).then((res: any) => {
            console.log(res);
            if (res.data.code == 0) {
                uni.setStorageSync("XT", kw.value);
                isShowTypeVisible.value = false;
                replace({
                    url: "/pages/tjwx/tjwx?taskId=" + res.data.data
                });
            } else {
                toast(res.data.msg);
            }
        });
    };
    const stime = ref("");
    const etime = ref("");
    const closeUserSelfVisible = () => {
        console.log("closeUserSelfVisible");
        for (let key in ops.value) {
            if (key == "year") {
                for (let v of ops.value[key]) {
                    v.isPick = false;
                }
            }
        }
        userSelfTimeVisible.value = false;
    };
    const checkFilterYear = () => {
        if (stime.value == "" || etime.value == "") {
            toast("请输入年份");
            return;
        }
        if (Number(stime.value) > Number(etime.value)) {
            toast("开始年份不能大于结束年份");
            return;
        }
        for (let key in ops.value) {
            if (key == "year") {
                for (let v of ops.value[key]) {
                    if (v.key == "custom") {
                        v.val = stime.value;
                        v.val2 = etime.value;
                        v.label = stime.value + "年-" + etime.value + "年";
                        v.isPick = true;
                    } else {
                        v.isPick = false;
                    }
                }
            }
        }
        userSelfTimeVisible.value = false;
    };
    const ops = ref({
        language: [
            {
                label: "仅中文文献",
                val: "中文",
                isPick: false
            },
            {
                label: "仅英文文献",
                val: "英文",
                isPick: false
            }
        ],
        classification: [
            {
                label: "综述类",
                val: "综述类",
                isPick: false
            },
            {
                label: "实验类",
                val: "实验类",
                isPick: false
            },
            {
                label: "问卷调查类",
                val: "问卷调查类",
                isPick: false
            },
            {
                label: "二手数据分析类",
                val: "二手数据分析类",
                isPick: false
            },

            {
                label: "案例类",
                val: "案例类",
                isPick: false
            },
            {
                label: "理论观点类",
                val: "理论观点类",
                isPick: false
            }
        ],
        year: [
            {
                label: "2024年",
                val: "2024",
                isPick: false
            },
            {
                label: "2023年",
                val: "2023",
                isPick: false
            },
            {
                label: "2022年",
                val: "2022",
                isPick: false
            },
            {
                label: "自定义____ -- ____",
                val: "",
                val2: "",
                key: "custom",
                isPick: false
            }
        ],
        level: [
            {
                label: "CSSCI",
                val: "CSSCI",
                isPick: false
            },
            {
                label: "北大核心",
                val: "北大核心",
                isPick: false
            },
            {
                label: "JCR1区",
                val: "JCR一区",
                isPick: false
            },
            {
                label: "JCR2区",
                val: "JCR二区",
                isPick: false
            },
            {
                label: "C扩",
                val: "C扩",
                isPick: false
            }
        ],
        subject: [
            {
                label: "经济学",
                val: "经济学",
                isPick: false
            },
            {
                label: "管理学",
                val: "管理学",
                isPick: false
            },
            {
                label: "社会学",
                val: "社会学",
                isPick: false
            },
            {
                label: "心理学",
                val: "心理学",
                isPick: false
            },
            {
                label: "统计学",
                val: "统计学",
                isPick: false
            }
        ],
        sort_index: [
            {
                label: "相关性",
                val: "relevance",
                isPick: false
            },
            {
                label: "时间",
                val: "year",
                isPick: false
            },
            {
                label: "引用量",
                val: "reference",
                isPick: false
            }
        ]
    });
    const userSelfTimeVisible = ref(false);
    const isFilter = ref(false);
    const getTjwxList = async (type: string = "init") => {
        console.log(kw.value);
        try {
            if (!hasMore.value && type != "init") {
                console.log("noMore");
                return;
            }

            if (type == "init") {
                list.value = [];
            }
            let param = {
                text: uni.getStorageSync("XT") || "人工智能",
                page_num: Number(
                    (list.value.length / iDisplayLength.value + 1).toFixed(0)
                ),

                article_per_page: iDisplayLength.value,

                year: ops.value["year"].filter((v) => v.isPick).length
                    ? ops.value["year"].filter((v) => v.isPick)[0].key ==
                      "custom"
                        ? [
                              ops.value["year"].filter((v) => v.isPick)[0][
                                  "val"
                              ],
                              ops.value["year"].filter((v) => v.isPick)[0][
                                  "val2"
                              ]
                          ]
                        : [ops.value["year"].filter((v) => v.isPick)[0]["val"]]
                    : undefined,

                level: ops.value["level"].filter((v) => v.isPick).length
                    ? ops.value["level"].filter((v) => v.isPick)[0]["val"]
                    : undefined, // str=None  /等级，用于筛选特定等级的文献
                language: ops.value["language"].filter((v) => v.isPick).length
                    ? ops.value["language"].filter((v) => v.isPick)[0]["val"]
                    : undefined, // str=None  /语言，用于筛选特定语言的文献
                classification: ops.value["classification"].filter(
                    (v) => v.isPick
                ).length
                    ? ops.value["classification"].filter((v) => v.isPick)[0][
                          "val"
                      ] + "文献"
                    : undefined, //str=None  /文献类别，用于筛选特定类别的文献

                subject: ops.value["subject"].filter((v) => v.isPick).length
                    ? ops.value["subject"].filter((v) => v.isPick)[0]["val"]
                    : undefined, // str=None  /文献类别，学科，用于筛选特定学科的文献

                sort_index: pickItem.value?.val || undefined,
                uid: userStore.userInfo.uid
            };
            let params = {
                taskId: query.value!.taskId,
                param: JSON.stringify(param)
            };
            if (
                param.year ||
                param.level ||
                param.language ||
                param.classification ||
                param.subject
            ) {
                isFilter.value = true;
            } else {
                isFilter.value = false;
            }
            if (hasLoading.value) {
                return;
            }
            hasLoading.value = true;
            const res = await service.getTjwxList(params);
            hasLoading.value = false;
            uni.hideLoading();
            if (res.code == 0) {
                total.valueue = res.size || 0;
                res.data = res.data.map((v: any) => {
                    return {
                        ...v,
                        isPick: allChecked.value.length ? ["true"] : [],
                        isAi: false
                    };
                });
                if (type == "init") {
                    total.value = res.size;
                    list.value = res.data || [];
                } else {
                    list.value = list.value.concat(res.data);
                    total.value = res.size;
                }
                checkListData();
                if (res.size <= list.value.length) {
                    hasMore.value = false;
                } else {
                    hasMore.value = true;
                }
            }
        } catch (error) {
            console.log(error);
            uni.hideLoading();
        }
    };
    const checkListData = () => {
        const recordIds = ailist.value.map((v: any) => v.recordId);
        console.log(recordIds);
        const checkList = [];
        for (let v of list.value) {
            if (recordIds.includes(v.id)) {
                v.isAi = true;
                console.log("isAi->", true);
                if (v.isPick.length) {
                    for (let vv of ailist.value) {
                        if (vv.recordId == v.id) {
                            v.isPick = [];
                            vv.isPick = [true];
                            break;
                        }
                    }
                }
            }
        }
        showType.value = 1;
    };
    const query = ref<any>();
    onLoad((op: any) => {
        query.value = op;
        kw.value = uni.getStorageSync("XT");
        getHasAiPickList();
        getTjwxList("init");
    });
    const isCanCreateWXZS = ref(false);
    const getWjzx = () => {
        http.post(
            "/itproduct/api/taskstate",
            {
                uid: userStore.userInfo.uid,
                taskId: query.value.taskId
            },
            {},
            { showToast: false }
        ).then((res) => {
            res = res.data;

            // uni.hideToast();
            if (res.msg.includes("暂时还没有文献综述")) {
                isCanCreateWXZS.value = true;
            } else if (res.msg.includes("综述生成中")) {
                isCanCreateWXZS.value = false;
            } else {
                isCanCreateWXZS.value = false;
            }
            if (res.code == 0) {
                if (res.data.taskState == 2) {
                    isCanCreateWXZS.value = false;
                } else if (res.data.taskState == 3) {
                    isCanCreateWXZS.value = true;
                }
            } else {
            }
        });
    };
    onShow(() => {
        console.log("tjwx Show");
        getWjzx();
        let pickItem = uni.getStorageSync("pickWXItem");
        if (pickItem.recordId) {
            for (let v of ailist.value) {
                if (v.recordId == pickItem.recordId) {
                    v.isPick = ["true"];
                    uni.removeStorageSync("pickWXItem");
                    break;
                }
            }
            for (let v of list.value) {
                if (v.recordId == pickItem.recordId && !v.isAi) {
                    v.isPick = ["true"];
                    uni.removeStorageSync("pickWXItem");
                    break;
                }
            }
        }
        let summaryWXItem = uni.getStorageSync("summaryWXItem");
        if (summaryWXItem.recordId) {
            for (let v of ailist.value) {
                if (v.recordId == summaryWXItem.recordId) {
                    v.summarys = summaryWXItem.summarys;
                    uni.removeStorageSync("summaryWXItem");
                    break;
                }
            }
            for (let v of list.value) {
                if (v.recordId == summaryWXItem.recordId && !v.isAi) {
                    v.summarys = summaryWXItem.summarys;
                    uni.removeStorageSync("summaryWXItem");
                    break;
                }
            }
        }
    });
    const getHasAiPickList = async () => {
        const res = await service.getHasAiPickList({
            taskId: query.value.taskId
        });
        let flag = false;
        if (res.code == 0) {
            ailist.value =
                res.data?.map((v: any) => {
                    let isPick =
                        allChecked.value.length || true ? ["true"] : [];
                    if (flag && !isPick.length) {
                        isPick = ["true"];
                    }
                    return {
                        ...v,
                        isPick
                    };
                }) || [];
            checkListData();
        }
    };
    onReachBottom(() => {
        console.log("more");
        if (showType.value == 1) getTjwxList("more");
    });
    const kw = ref("");
    const clearKw = () => {
        kw.value = "";
    };
    const allChecked = ref([]);
    const show = ref(false);
    const uPickerRef = ref<any>();
    const changeHandler = (e: any) => {
        const { columnIndex, value, values, index } = e;
        // console.log(e);
        // if (columnIndex === 0) {
        //     uPickerRef.value.setColumnValues(1, columnData[index]);
        // }
    };
    const isShowFilter = ref(false);
    const showFilter = () => {
        isShowFilter.value = !isShowFilter.value;
    };
    const reStoreFilter = () => {
        for (let key in ops.value) {
            ops.value[key] = ops.value[key].map((v: any) => {
                v.isPick = false;
                return v;
            });
        }
    };
    const hideFilter = () => {
        isShowFilter.value = false;
        getTjwxList("init");
    };
    const showOption = () => {
        show.value = true;
    };
    const options = ref({
        picker: [
            [
                {
                    label: "不排序",
                    val: undefined
                },
                {
                    label: "相关性",
                    val: "relevance"
                },
                {
                    label: "时间",
                    val: "year"
                },
                {
                    label: "被引量",
                    val: "reference"
                }
            ]
        ]
    });
    interface PickItem {
        label: string;
        val: string;
        [index: string]: any;
    }
    const pickItem = ref<PickItem>();
    const emits = defineEmits<{
        (e: "confirm", item: PickItem): void;
    }>();
    const confirm = (e: any) => {
        // console.log("confirm", e);
        pickItem.value = e.value[0];
        show.value = false;
        console.log(pickItem.value);
        if (pickItem.value) emits("confirm", pickItem.value);
        getTjwxList("init");
    };
    const cancel = () => {
        show.value = false;
    };
    const closePicker = () => {
        show.value = false;
    };
    const setVal = (item: PickItem) => {
        pickItem.value = item;
    };
    const isShowMulDownloadVisible = ref(false);
    const mulDownloadSumbit = async () => {
        const resp = await service.downloadPdf({
            downloadType: 0, //,:压缩包，1：单个文献下载 ,
            taskId: query.value.taskId,
            records: hasPickList.value
        });
        uni.hideLoading();
        if (resp.code == 0) {
            isShowMulDownloadVisible.value = false;
            for (let v of ailist.value) {
                if (v.isPick.length == 1) {
                    v.isdownload = true;
                }
            }
            for (let v of list.value) {
                if (v.isPick.length == 1) {
                    v.isdownload = true;
                }
            }
            toast("下载成功，请到 我的文献-批量下载记录 进行查看");
        } else if (resp.msg == "账户余额不足,请充值") {
            push({
                url: "/pages/my/recharge?isBack=true"
            });
        }
    };
    const mulDownload = () => {
        if (!hasPickList.value.length) {
            uni.showToast({
                title: "请选择文献",
                icon: "none"
            });
            return;
        }
        isShowMulDownloadVisible.value = true;
        return;
        uni.showModal({
            title: "是否批量下载",
            content: `文献 * ${hasPickList.value.length} , 消耗 ${hasPickList.value.length * 10} 知识豆`,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认下载",
            success: async (res) => {
                if (res.confirm) {
                    // console.log("用户点击确定");
                } else if (res.cancel) {
                    // console.log("用户点击取消");
                }
            }
        });
    };
    const isShowSingleDownloadVisible = ref(false);
    const singleDownloadSumbit = async () => {
        let item = singleDownItem.value;
        const resp = await service.downloadPdf({
            downloadType: 1, //,:压缩包，1：单个文献下载 ,
            taskId: query.value.taskId,
            records: [item]
        });
        uni.hideLoading();
        if (resp.code == 0) {
            toast("下载成功，请到 我的文献 进行查看");
            item.isdownload = true;
            isShowSingleDownloadVisible.value = false;
        }
    };
    const singleDownItem = ref<any>();
    const singleDownload = (item: any) => {
        isShowSingleDownloadVisible.value = true;
        singleDownItem.value = item;
        return;
        uni.showModal({
            title: "是否确认下载",
            content: `下载一篇文献  , 消耗 ${1 * 10} 知识豆`,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认下载",
            success: async (res) => {
                if (res.confirm) {
                } else if (res.cancel) {
                    // console.log("用户点击取消");
                }
            }
        });
    };
    //20篇及以下消耗1000知识豆
    // 21-50篇消耗2000知识豆
    // 50篇以上消耗5000知识豆
    const mulSummarizeCfd = computed(() => {
        if (hasPickList.value.length <= 20) {
            return 1000;
        } else if (
            hasPickList.value.length > 20 &&
            hasPickList.value.length <= 50
        ) {
            return 2000;
        } else {
            return 5000;
        }
    });
    const isShowMulSummarizeVisible = ref(false);
    const mulSummarize = () => {
        if (!isCanCreateWXZS.value) {
            push({
                url: "/pages/tjwx/wxzs?taskId=" + query.value.taskId
            });
            return;
        }
        if (!hasPickList.value.length) {
            uni.showToast({
                title: "请选择文献",
                icon: "none"
            });
            return;
        }
        isShowMulSummarizeVisible.value = true;
        // uni.showModal({
        //     title: "是否批量总结",
        //     content:
        //         "20篇及以下消耗1000知识豆\n21-50篇消耗2000知识豆\n50篇以上消耗5000知识豆\n\n" +
        //         "本次消耗" +
        //         mulSummarizeCfd.value +
        //         "知识豆",
        //     showCancel: true,
        //     cancelText: "取消",
        //     confirmText: "确认总结",
        //     success: async (res) => {
        //         if (res.confirm) {
        //         } else if (res.cancel) {
        //             // console.log("用户点击取消");
        //         }
        //     }
        // });
    };
    const mulSummarizeSubmit = async () => {
        const resp = await service.singleSummar({
            recordIds: hasPickList.value.map((v) => v.recordId),
            records: hasPickList.value,
            taskId: query.value.taskId,
            actType: 0
        });
        uni.hideLoading();
        if (resp.code == 0) {
            isShowMulSummarizeVisible.value = false;
            uni.setStorageSync("wxzsRecords", hasPickList.value || []);
            push({
                url: "/pages/tjwx/wxzs?taskId=" + query.value.taskId
            });
        } else if (resp.msg == "账户余额不足,请充值") {
            push({
                url: "/pages/my/recharge?isBack=true"
            });
        }
    };
    const aiAutoPick = async () => {
        let flag = false;

        const res = await service.AITJWX({
            taskId: query.value.taskId,
            param: JSON.stringify({
                text: kw.value || "人工智能",
                number: ailist.value.length ? ailist.value.length + 10 : 20,
                year: ops.value["year"].filter((v) => v.isPick).length
                    ? ops.value["year"].filter((v) => v.isPick)[0].key ==
                      "custom"
                        ? [
                              ops.value["year"].filter((v) => v.isPick)[0][
                                  "val"
                              ],
                              ops.value["year"].filter((v) => v.isPick)[0][
                                  "val2"
                              ]
                          ]
                        : [ops.value["year"].filter((v) => v.isPick)[0]["val"]]
                    : undefined,

                level: ops.value["level"].filter((v) => v.isPick).length
                    ? ops.value["level"].filter((v) => v.isPick)[0]["val"]
                    : undefined, // str=None  /等级，用于筛选特定等级的文献
                language: ops.value["language"].filter((v) => v.isPick).length
                    ? ops.value["language"].filter((v) => v.isPick)[0]["val"]
                    : undefined, // str=None  /语言，用于筛选特定语言的文献
                classification: ops.value["classification"].filter(
                    (v) => v.isPick
                ).length
                    ? ops.value["classification"].filter((v) => v.isPick)[0][
                          "val"
                      ] + "文献"
                    : undefined, //str=None  /文献类别，用于筛选特定类别的文献

                subject: ops.value["subject"].filter((v) => v.isPick).length
                    ? ops.value["subject"].filter((v) => v.isPick)[0]["val"]
                    : undefined, // str=None  /文献类别，学科，用于筛选特定学科的文献

                sort_index: pickItem.value?.val || undefined,
                uid: userStore.userInfo.uid
            })
        });
        uni.hideLoading();
        if (res.code == 0) {
            if (ailist.value.length == 0) {
                isShowAiModalVisible.value = true;
                flag = true;
            }
            ailist.value = res.data.map((v: any) => {
                let isPick = allChecked.value.length ? ["true"] : [];
                if ((flag && !isPick.length) || true) {
                    isPick = ["true"];
                }
                return {
                    ...v,
                    isPick
                };
            });
            checkListData();
        } else if (res.code == -1 && res.msg == "账户余额不足,请充值") {
            setTimeout(() => {
                push({
                    url: "/pages/my/recharge?isBack=true"
                });
            }, 700);
        }
    };
    const isShowAiModalVisible = ref(false);
    const goToDetail = (item: any) => {
        console.log(item);
        uni.setStorageSync("wxDetail", item);
        push({
            url:
                "/pages/tjwx/ydwx?taskId=" +
                query.value.taskId +
                "&recordId=" +
                item.recordId +
                "&pdf_url=" +
                item.pdf_url +
                "/" +
                item.recordId +
                ".pdf" +
                "&title=" +
                item.title
        });
    };
</script>
<style lang="scss" scoped>
    .page {
        padding: 12 * 2rpx 0;
        padding-bottom: 50 * 2rpx;
        padding-top: 100 * 2rpx;
        .fixedBox {
            position: fixed;
            padding-top: 12 * 2rpx;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #f6f6f6;
            z-index: 101;
        }
        .searchBox {
            height: 45 * 2rpx;
            width: 100%;
            padding: 0 8 * 2rpx;
            .search {
                height: 45 * 2rpx;
                border: 1px solid #333;
                .inputBox {
                    position: relative;
                    .iconBox {
                        position: absolute;
                        top: 0 * 2rpx;
                        left: 10 * 2rpx;
                        height: 45 * 2rpx;
                    }
                    .iconBox2 {
                        position: absolute;
                        top: 0;
                        right: 60 * 2rpx;
                        height: 45 * 2rpx;
                    }
                    .btnBox {
                        position: absolute;
                        top: 0;
                        right: 10 * 2rpx;
                        height: 45 * 2rpx;
                        font-size: 12 * 2rpx;
                        .btn {
                            background-color: #ddf3e7;
                            padding: 5 * 2rpx 10 * 2rpx;
                            border-radius: 30rpx;
                            font-weight: bold;
                            text-align: center;
                        }
                    }
                    .searchInput {
                        height: 45 * 2rpx;
                        line-height: 45 * 2rpx;
                        padding: 0 80 * 2rpx 0 40 * 2rpx;
                        font-size: 12 * 2rpx;
                    }
                }
            }
        }
        .ci {
            color: #7d7e80;
        }
        .toolsBox {
            position: relative;
        }
        .tools {
            display: flex;
            justify-content: flex-start;
            height: 32 * 2rpx;
            padding: 0 8 * 2rpx;
            .flex {
                display: flex;
                justify-content: space-between;
            }
            .item {
                margin-right: 10 * 2rpx;
            }
            .grow {
                flex-grow: 1;
                margin: 0;
            }
            .mbtn {
                border-radius: 5 * 2rpx;
                padding: 0 10 * 2rpx;
                margin-right: 0;

                .resImg {
                    width: 15 * 2rpx;
                    height: 15 * 2rpx;
                }
            }
        }
        .filter {
            position: absolute;
            left: 0;
            top: 32 * 2rpx;
            transition: all 0.2s;
            max-height: 0;
            z-index: 100;

            overflow: hidden;
            padding: 0 8 * 2rpx;
            background-color: #f6f6f6;
            .row {
                display: flex;
                justify-content: flex-start;
                & + .row {
                    margin-top: 10 * 2rpx;
                }
                .cg {
                    font-weight: bold;
                }
                .label {
                    min-width: 60 * 2rpx;
                }
                .val {
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;

                    .item {
                        min-width: 60 * 2rpx;
                        margin-bottom: 5 * 2rpx;
                    }
                }
                .btnGroup {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    padding-bottom: 20rpx;
                    .btn {
                        padding: 5rpx 10 * 2rpx;
                        border-radius: 8rpx;
                        margin: 0 20rpx;
                    }
                }
            }
        }
        .mlistBox {
            .list {
                padding: 0 * 2rpx 8 * 2rpx;
                .item {
                    display: flex;
                    justify-content: flex-start;
                    min-height: 72 * 2rpx;
                    padding: 15 * 2rpx 18 * 2rpx;
                    background-color: #fff;
                    border-radius: 15rpx;
                    border-bottom: 1px solid #f6f6f9;
                    padding-left: 10 * 2rpx;

                    &.item2 {
                        padding: 10 * 2rpx 18 * 2rpx;
                        min-height: 72 * 2rpx;
                        padding-left: 10 * 2rpx;
                        // padding-bottom: 15 * 2rpx;
                    }
                    & + .item {
                        margin-top: 10 * 2rpx;
                    }
                    .cbgg {
                        background-color: #e8decf;
                        color: #1c170d;
                    }
                    .lf {
                        min-width: 24 * 2rpx;
                        text-align: center;
                        .wcenter {
                            text-align: center;
                            display: flex;
                            justify-content: center;
                        }
                        .imgBox {
                            .resImg {
                                width: 20 * 2rpx;
                                height: 20 * 2rpx;
                            }
                        }
                    }
                    .med {
                        flex-grow: 1;
                        margin: 0 10 * 2rpx;
                        .name {
                            // color: #1c170d;
                        }
                        .info {
                            color: #7d7e80;
                        }
                        .tags {
                            display: flex;
                            .tag {
                                font-size: 0.4rem !important;
                                margin-right: 10 * 2rpx;
                                padding: 1 * 2rpx 5 * 2rpx;
                                white-space: nowrap;
                                max-width: 111px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                    .rt {
                        min-width: fit-content;
                        .btn {
                            color: #a6a6a6;
                        }
                    }
                }
            }
            .ailist {
            }
            .ailist {
                background-color: #79c7ad;
                border-radius: 15rpx;
            }
            .pd {
                padding: 10 * 2rpx 8 * 2rpx;
            }
        }
        .floatBtm {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 60 * 2rpx;
            background-color: #fff;
            z-index: 100;
            padding: 15.5 * 2rpx 10 * 2rpx;
            // padding-top: 0;
            .info {
                // height: 20 * 2rpx;
                // line-height: 20 * 2rpx;
                // display: flex;
                // justify-content: space-between;
                // padding: 0 45rpx 0 190 * 2rpx;
            }
            .btnGroup {
                display: flex;
                height: 30 * 2rpx;
                line-height: 30 * 2rpx;

                .lf {
                    display: flex;
                    .item {
                        margin-right: 20 * 2rpx;
                    }
                }
                .rt {
                    flex-grow: 1;
                    display: flex;
                    justify-content: space-around;
                    .item {
                        padding: 0 10 * 2rpx;
                        border-radius: 5 * 2rpx;
                        .resImg {
                            width: 15 * 2rpx;
                            height: 15 * 2rpx;
                        }
                    }
                }
            }
        }
        .clearModal {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 600;
            // background: rgba(0, 0, 0, 0.7);
            .outerBox {
                position: absolute;
                top: 184 * 2rpx;
                left: 0rpx;

                padding: 50rpx 40rpx;
                width: 100%;
                .innerBox {
                    .container {
                        position: relative;
                        background-color: #fff;
                        width: 252 * 2rpx;
                        height: 170 * 2rpx;
                        border-radius: 30rpx;
                        border: 1px solid #333;
                        padding: 26 * 2rpx 20 * 2rpx;
                        .close {
                            position: absolute;
                            right: 10rpx;
                            top: 10rpx;
                            z-index: 800rpx;
                        }
                        .title {
                            padding: 5 * 2rpx 10 * 2rpx;
                            text-align: left;
                            border-bottom: 1px solid #a1824a;
                        }
                        .list {
                            display: flex;
                            justify-content: space-between;
                            padding: 0 13 * 2rpx;
                            .item {
                                padding: 4 * 2rpx 7 * 2rpx;
                                border: 1px solid #a6a6a6;
                                border-radius: 10 * 2rpx;
                            }
                        }
                        .info {
                            padding: 0 10 * 2rpx;
                        }
                        .btn {
                            color: #fff;
                            min-width: 84 * 2rpx;
                            height: 20 * 2rpx;
                            line-height: 20 * 2rpx;
                            border-radius: 30rpx;
                        }
                    }
                }
            }
        }
        .clearModal {
            z-index: 105;
            .outterBox {
                position: absolute;
                width: 100%;
                left: 0;
                top: 20vh;
                padding: 0 30 * 2rpx;
                .innerBox {
                    background-color: #fff;
                    border-radius: 30rpx;
                    padding: 15 * 2rpx 15 * 2rpx;
                    padding-top: 25 * 2rpx;
                    padding-bottom: 10 * 2rpx;
                    position: relative;
                    .close {
                        position: absolute;
                        right: 10 * 2rpx;
                        top: 10 * 2rpx;
                        width: 20 * 2rpx;
                        height: 20 * 2rpx;
                    }
                    .timeBox {
                        padding-bottom: 10 * 2rpx;
                        > .inputBox {
                            margin-bottom: 10 * 2rpx;
                            > .label,
                            > .myInput {
                                height: 30 * 2rpx;
                            }
                            > .label {
                                margin-right: 10 * 2rpx;
                            }
                            > .myInput {
                                border-radius: 5 * 2rpx;
                                padding-left: 5 * 2rpx;
                            }
                        }
                    }
                    .btnGroup {
                        display: flex;
                        justify-content: space-between;
                        padding: 5 * 2rpx 0;
                    }
                    .bd {
                        border-top: 1px solid #e8decf;
                        margin-top: 10 * 2rpx;
                        padding-top: 10 * 2rpx;
                    }
                    .mbtn {
                        border-radius: 10 * 2rpx;
                        padding: 0 10 * 2rpx;
                        margin-right: 0;
                        height: 30 * 2rpx;
                        .resImg {
                            width: 15 * 2rpx;
                            height: 15 * 2rpx;
                        }
                    }
                }
            }
        }
        .checkContentBox {
            padding: 0 !important;
        }
        .checkContent {
            > .title {
                padding: 20 * 2rpx 0;
            }
            > .show {
                background-color: #f0fdf4;
                padding: 20 * 2rpx 0;
                text-align: center;
                line-height: 18 * 2rpx;
                .label {
                    color: #4b5563;
                }
                .f17 {
                    font-size: 17 * 2rpx;
                }
            }
            .infoBox {
                margin-top: 16 * 2rpx;
                padding: 0 20 * 2rpx;
                .info {
                    background-color: #f9fafb;
                    padding: 10 * 2rpx 20 * 2rpx;
                    color: #6b7280;
                    .row {
                        .text {
                            text-align: justify;
                        }
                    }
                }
            }
            .btnGroup {
                display: flex;
                .btn {
                    border-top: 2px solid #f4f5f7;
                    flex-grow: 1;
                    height: 40 * 2rpx;
                    text-align: center;
                    line-height: 40 * 2rpx;
                    width: 50%;
                    &:first-child {
                        color: #4b5563;
                        border-right: 2px solid #f4f5f7;
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
    .tjwxPage {
        .u-checkbox__icon-wrap,
        .u-checkbox__icon-wrap--square,
        .cursor-pointer {
            margin-right: 0px !important;
        }
        ::v-deep .cursor-pointer {
            margin-right: 0px !important;
        }
    }
</style>
