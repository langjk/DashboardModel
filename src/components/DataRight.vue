<template>
    <div class="data-collection">
        <el-card class="data-card" shadow="always">
            <img class="image" :src="robot.robotImage" fit="cover" />
            <div slot="header" class="card-header">
                <span>机器{{ robot.id }}详细信息</span>
            </div>

            <el-divider />
            <div class="sub-title">设备信息</div>

            <el-statistic title="运行时间" :value="robot.operationTime" suffix="sec" />
            <el-statistic title="设备状态" :value="robot.status" />

            <el-row class="data-item" :gutter="10">
                <el-col :span="12">
                    <h3>报警信息</h3>
                </el-col>
                <el-col :span="12">
                    <el-tag type="primary" size="medium" effect="plain">
                        {{ robot.alarmMessage }}
                    </el-tag>
                </el-col>
            </el-row>

            <el-divider />
            <div class="sub-title marginB">加工信息</div>

            <el-progress
                type="dashboard"
                :percentage="robot.processingPercent"
                :width="90"
            >
                <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label">转动时间占比</span>
                </template>
            </el-progress>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
    robot: {
        id: number;
        robotImage: string;
        operationTime: number;
        status: string;
        alarmMessage: string;
        processingInfo: string;
        processingPercent: number;
    };
}>();
</script>

<style scoped>
.image {
    width: 100%;
}
.sub-title {
    font-size: 20px;
    font-weight: bold;
}

.data-collection {
    height: 100%;
    width: 100%;
    cursor: pointer;
}

.data-card {
    background-color: var(--light-background-color);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: white;
}

.card-header {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
}

.data-item {
    margin-bottom: 20px;
}

h3 {
    font-size: 16px;
    color: var(--primary-color);
}

.el-tag {
    font-size: 14px;
    font-weight: bold;
    width: 80px;
}

:deep(.el-col) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

:deep(.el-card__body) {
    width: 90%;
    flex-direction: row;
    display: inline;
    background-color: white;
}

.percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 28px;
}

.percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
}

:deep(.el-statistic__head) {
    font-size: 14px;
}

:deep(.el-progress-circle) {
    height: 186px !important;
    width: 186px !important;
}

.el-statistic {
    margin-top: 20px;
}

.marginB{
    margin-bottom:30px;
}
</style>
