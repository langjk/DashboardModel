<template>
    <el-card class="info-container">
        <template #header> 机器{{ robotNum }}详细信息 </template>
        <el-descriptions title="加工参数" border>
            <el-descriptions-item label="参数1">aaaaaaa</el-descriptions-item>
            <el-descriptions-item label="参数2">00000000</el-descriptions-item>
            <el-descriptions-item label="参数3">#######</el-descriptions-item>
            <el-descriptions-item label="状态">
                <el-tag size="small">tag</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="描述">
                111111111111111111111111111111111111111111111111
            </el-descriptions-item>
        </el-descriptions>
        <div class="sub-title">统计信息</div>
        <el-row>
            <el-col :span="6">
                <el-statistic title="统计数字" :value="12300" />
            </el-col>
            <el-col :span="6">
                <el-statistic :value="138">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            统计数字
                            <el-icon >
                                <CircleCheck />
                            </el-icon>
                        </div>
                    </template>
                    <template #suffix>/100</template>
                </el-statistic>
            </el-col>
            <el-col :span="6">
                <el-statistic title="统计数字" :value="30" />
            </el-col>
            <el-col :span="6">
                <el-statistic title="统计数字" :value="562">
                    <template #suffix>
                        <el-icon style="vertical-align: -0.125em">
                            <ChatLineRound />
                        </el-icon>
                    </template>
                </el-statistic>
            </el-col>
        </el-row>
    </el-card>
</template>

<script lang="ts" setup>
// 定义传入的 props 类型
defineProps<{
    robotNum: number; // 机器人编号
}>();
</script>

<style scoped>
.info-container {
    flex: 1;
}
:deep(.el-card__header) {
    font-size: 26px;
    text-align: left;
    font-weight: bold;
}
.el-descriptions {
    margin-bottom: 20px;
}
.sub-title{
    text-align: left;
    font-weight: bold;
    font-size:18px;
    margin:20px 0;
}
:deep(.el-descriptions__title){
    text-align: left;
    font-weight: bold;
    font-size:18px;
}
:deep(.el-statistic__head){
    font-size:14px;
}
</style>
