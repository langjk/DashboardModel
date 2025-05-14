<template>
    <div class="data-collection">
        <el-card class="data-card" shadow="always">
            <!-- 显示机器人图片 -->
            <img class="image" :src="robot.robotImage" fit="cover" />

            <!-- 卡片标题 -->
            <div slot="header" class="card-header">
                <span>机器{{ robot.id }}信息</span>
            </div>

            <!-- 分割线 -->
            <el-divider />

            <!-- 累计工作时间 -->
            <el-statistic title="累计工作时间" :value="operationTime" suffix="sec" />

            <!-- 报警信息 -->
            <el-row class="data-item" :gutter="10">
                <el-col :span="12">
                    <h3>报警信息</h3>
                </el-col>
                <el-col :span="12">
                    <el-tag :type="alarmStatus" size="medium" effect="plain">
                        {{ alarmMessage }}
                    </el-tag>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

// 定义接收的 props 类型
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

const alarmStatus = ref(props.robot.status); // 从 props 接收报警状态
const alarmMessage = ref(props.robot.alarmMessage); // 从 props 接收报警信息
const operationTime = ref(props.robot.operationTime); // 从 props 接收累计工作时间
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
    cursor: pointer;
}

.data-card {
    background-color: var(--light-background-color);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
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

:deep(.el-statistic__head) {
    font-size: 14px;
}
</style>
