const Remark = () => import('@/views/Remark.vue')
const GalleryItem = () => import('@/components/rmrk/Gallery/UniqueGalleryItem.vue')
const CollectionItem = () => import('@/components/rmrk/Gallery/UniqueCollection.vue')

const DetailNavigation = {
  template: '<router-view></router-view>',
  name: 'DetailNavigation',
}

export default [
  {
    path: '/detail/:id',
    component: DetailNavigation,
    children: [
      { path: '', name: 'contractDetail', component: CollectionItem },
      { path: ':item', name: 'superDetail', component: GalleryItem },
    ]
  },

  {
    path: '/new',
    name: 'ormlNew',
    component: Remark
  },
]
