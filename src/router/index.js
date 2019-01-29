import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([],() => r(require('../page/home/home')), 'home')
const newsDetail = r => require.ensure([],() => r(require('../page/home/newsDetail')), 'newsDetail')
const newsList = r => require.ensure([],() => r(require('../page/home/newsList')), 'newsList')

const qimian = r => require.ensure([],() =>r(require('../page/qimian/qimian')),'qimian')

const neishi = r => require.ensure([],() =>r(require('../page/neishi/neishi')),'neishi')

const serve = r => require.ensure([],() =>r(require('../page/serve/serve')),'serve')
const wechatServe = r => require.ensure([],() =>r(require('../page/serve/wechatServe')),'wechatServe')

const contact = r => require.ensure([],() =>r(require('../page/contact/contact')),'contact')

const caseArr  = r => require.ensure([],() =>r(require('../page/case/case')),'case')
const caseDe = r =>require.ensure([],() =>r(require('../page/case/caseDe')),'caseDe')
export default new Router({
		routes:[
			{
				path: '/',
				component:home
			},
			{
				path: '/home',
				name: 'home',
				component: home
			},
			{
				path: '/newsDetail',
				name: 'newsDetail',
				component: newsDetail
			},
			{
				path: '/newsList',
				name: 'newsList',
				component: newsList
			},
			{
				path:'/qimian',
				name:'qimian',
				component:qimian
			},
			{
				path:'/neishi',
				name:'neishi',
				component:neishi
			},
			{
				path:'/serve',
				name:'serve',
				component:serve
			},
			{
				path:'/wechatServe',
				name:'wechatServe',
				component:wechatServe
			},
			{
				path:'/contact',
				name:'contact',
				component:contact
			},
			{
				path:'/case',
				name:'case',
				component:caseArr
			},
			{
				path:'/caseDe',
				name:'caseDe',
				component:caseDe
			}
			
		]
})
