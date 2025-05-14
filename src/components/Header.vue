<template>
    <div class="header-container">
        <!-- Logo -->
        <div class="logo">
            <span>Project Dashboard</span>
        </div>

        <!-- Header Menu -->
        <el-menu
            :default-active="activeMenu"
            class="header-menu"
            mode="horizontal"
            background-color="rgb(132, 190, 239)"
            text-color="#fff"
            active-text-color="#ffcc00"
        >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">数据采集</el-menu-item>
            <el-menu-item index="3">抛光配置</el-menu-item>
            <el-menu-item index="4">设置</el-menu-item>

            <!-- User profile dropdown -->
            <el-menu-item index="5" class="user-dropdown" @click="handleUserClick">
                用户名
                <i class="el-icon-arrow-down"></i>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            activeMenu: "1", // Default active menu item
        };
    },
    methods: {
        handleUserClick() {
            // Handle the user profile dropdown logic here
            console.log("User clicked");
        },
    },
};
</script>

<style scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.logo {
    font-size: 20px;
    font-weight: bold;
    color: rgb(132, 190, 239);
}

.header-menu {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    height:80px;
}

.el-menu-item {
    font-size: 20px;
}

.user-dropdown {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.user-dropdown i {
    margin-left: 5px;
}
</style>
