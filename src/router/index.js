import VueRouter from 'vue-router'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: () => import('@/components/Login.vue'),
        },
        {
            path: '*',
            component: () => import('@/components/NotFound.vue'),
            hidden: true
        }
    ]
})

export const powerRoutes = [
    {
        path: '/backstage',
        component: () => import('@/components/Backstage.vue'),
        redirect: '/backstage/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home/Home.vue'),
            },
            {
                path: 'headMaster',
                component: () => import('@/views/HeadMaster/HeadMaster.vue'),
                meta: { roles: 'M' },
                children: [
                    {
                        path: '/',
                        redirect: 'school',
                    },
                    {
                        path: 'school',
                        name: 'school',
                        component: () => import('@/views/HeadMaster/Mission/School.vue'),
                    },
                    {
                        path: 'money',
                        name: 'money',
                        component: () => import('@/views/HeadMaster/Mission/Money.vue'),
                    }
                ]
            },
            {
                path: 'teacher',
                component: () => import('@/views/Teacher/Teacher.vue'),
                meta: { roles: 'T' },
                children: [
                    {
                        path: '/',
                        redirect: 'education'
                    },
                    {
                        path: 'education',
                        name: 'education',
                        component: () => import('@/views/Teacher/Mission/Education.vue'),
                    },
                    {
                        path: 'salary',
                        name: 'salary',
                        component: () => import('@/views/Teacher/Mission/Salary.vue'),
                    }
                ]
            },
            {
                path: 'student',
                component: () => import('@/views/Student/Student.vue'),
                meta: { roles: 'S' },
                children: [
                    {
                        path: '/',
                        redirect: 'grade'
                    },
                    {
                        path: 'grade',
                        name: 'grade',
                        component: () => import('@/views/Student/Mission/Grade.vue'),
                    },
                    {
                        path: 'credit',
                        name: 'credit',
                        component: () => import('@/views/Student/Mission/Credit.vue'),
                    }
                ]
            },
        ]
    },
]