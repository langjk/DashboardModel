<template>
    <el-row>
        <el-col :span="17" style="display: flex; flex-direction: column; z-index:3">
            <el-card class="title-container">机械臂信息采集系统</el-card>
            <div class="home-container">
                <div style="width: 24%">
                    <Transition
                        name="slide-right"
                        mode="out-in"
                        class="transition-container"
                    >
                        <div :key="robotsData[0].id">
                            <DataCollection
                                :robot="robotsData[0]"
                                @click="changeData(0)"
                            />
                        </div>
                    </Transition>
                </div>
                <div style="width: 24%">
                    <Transition
                        name="slide-right"
                        mode="out-in"
                        class="transition-container"
                    >
                        <div :key="robotsData[1].id">
                            <DataCollection
                                :robot="robotsData[1]"
                                @click="changeData(1)"
                            />
                        </div>
                    </Transition>
                </div>
                <div style="width: 24%">
                    <Transition
                        name="slide-right"
                        mode="out-in"
                        class="transition-container"
                    >
                        <div :key="robotsData[2].id">
                            <DataCollection
                                :robot="robotsData[2]"
                                @click="changeData(2)"
                            />
                        </div>
                    </Transition>
                </div>
                <div style="width: 24%">
                    <Transition
                        name="slide-right"
                        mode="out-in"
                        class="transition-container"
                    >
                        <div :key="robotsData[3].id">
                            <DataCollection
                                :robot="robotsData[3]"
                                @click="changeData(3)"
                            />
                        </div>
                    </Transition>
                </div>
            </div>
            <InfoData :robot-num="robotsData[4].id" />
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="6" style="position: relative">
            <Transition name="slide-left" mode="out-in">
                <div :key="robotsData[4].id" style="height: 100%; z-index: 1">
                    <DataRight :robot="robotsData[4]" />
                </div>
            </Transition>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import robotImage from "@/assets/robot.png";
import DataCollection from "../components/DataCollection.vue";
import DataRight from "../components/DataRight.vue";
import InfoData from "../components/InfoData.vue";
import "@/assets/transition.css";

interface RobotData {
    id: number;
    robotImage: string;
    operationTime: number;
    status: string;
    alarmMessage: string;
    processingInfo: string;
    processingPercent: number;
}

const robotsData = ref<RobotData[]>([
    {
        id: 1,
        robotImage: robotImage,
        operationTime: 268500,
        status: "正常",
        alarmMessage: "运行良好",
        processingInfo: "运行中",
        processingPercent: 50,
    },
    {
        id: 2,
        robotImage: robotImage,
        operationTime: 150000,
        status: "警告",
        alarmMessage: "温度过高",
        processingInfo: "停止",
        processingPercent: 30,
    },
    {
        id: 3,
        robotImage: robotImage,
        operationTime: 350000,
        status: "正常",
        alarmMessage: "运行良好",
        processingInfo: "运行中",
        processingPercent: 70,
    },
    {
        id: 4,
        robotImage: robotImage,
        operationTime: 500000,
        status: "错误",
        alarmMessage: "设备故障",
        processingInfo: "停止",
        processingPercent: 20,
    },
    {
        id: 5,
        robotImage: robotImage,
        operationTime: 268500,
        status: "正常",
        alarmMessage: "运行良好",
        processingInfo: "运行中",
        processingPercent: 80,
    },
]);

const showNum = ref<number>(1);

const changeData = (robotNum: number) => {
    const temp = robotsData.value[robotNum];
    robotsData.value[robotNum] = robotsData.value[4];
    robotsData.value[4] = temp;
    showNum.value = robotNum;
};
</script>
<style scoped>
.title-container {
    font-size: 40px;
    font-weight: bold;
    width: 100%;
}
.home-container {
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
}
.container {
    height: 300px;
    width: 300px;
    background-color: red;
}
.transition-container {
    width: 230px;
    
}
</style>
