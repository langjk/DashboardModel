<template>
    <div class="layout-container">
        <!-- Header -->
        <!-- <el-header class="layout-header">
            <Header />
        </el-header> -->

        <!-- Main Layout with Sidebar and Content -->
        <el-container style="justify-content:center">
            <!-- Sidebar -->
            <!-- <el-aside width="200px" class="layout-sidebar">
                <el-menu
                    :default-active="activeMenu"
                    class="sidebar-menu"
                    mode="vertical"
                    background-color="#f4f4f4"
                >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据采集</el-menu-item>
                    <el-menu-item index="3">抛光配置</el-menu-item>
                    <el-menu-item index="4">设置</el-menu-item>
                </el-menu>
            </el-aside> -->

            <!-- Main Content Area -->
            <el-main class="layout-main">
                <slot />
                <!-- Dynamically insert content here -->
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    name: "Layout",
    components: {
        Header,
    },
    data() {
        return {
            activeMenu: "1", // Default active menu item
        };
    },
};
</script>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: column;
}

.layout-header {
    background-color: var(--primary-color);
    color: white;
    font-size: 18px;
}

.layout-sidebar {
    background-color: var(--light-background-color);
    padding-top: 20px;
}

.layout-main {
    padding: 20px;
    background-color: var(--background-color);
    flex-grow: 1;
    width:1400px;
    flex:none;
    overflow: hidden;
}

:deep(.el-header){
    --el-header-padding:0px;
}
</style>
