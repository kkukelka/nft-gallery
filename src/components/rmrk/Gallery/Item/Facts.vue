<template>
    <b-collapse class="card" animation="slide"
      aria-id="contentIdForA11y3" :open="false">
      <template #trigger="props">
        <div
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3">
          <p class="card-header-title">
            {{ $t('facts') }}
          </p>
          <a class="card-header-icon">
            <b-icon
              :icon="props.open ? 'chevron-up' : 'chevron-down'">
            </b-icon>
          </a>
      </div>
      </template>
      <div class="card-content">
        <div class="content">
          <p class="subtitle is-size-6">
            <b>ID:</b> {{ nft.id }}
          </p>
          <p class="subtitle is-size-6">
            <b>{{ $t('collection') }}: </b>{{ nft.collectionId }}
          </p>
          <p class="subtitle is-size-6">
            <b>DEPOSIT: </b>
            <Money :value="nft.deposit" inline />
          </p>
          <ArweaveLink v-if="meta.image_ar" :id="meta.image_ar" label="image" />
          <ArweaveLink v-if="nft.animationArId" :id="nft.animationArId" label="animated" />
          <p v-if="imageId" class="subtitle is-size-6">
            <b>IPFS: </b>
            <br />
            <a :href="imageId" target="_blank" rel="noopener noreferrer">Check on IPFS</a>
          </p>
          <div>
          <p class="subtitle is-size-6 has-text-weight-bold" @click="removeMeta">
            <a class="has-text-danger">Clear Metadata!</a>
          </p>

          </div>
        </div>
      </div>
    </b-collapse>
</template>

<script lang="ts" >
import { Component, Prop, Vue } from 'vue-property-decorator'
import { UniqueNFT as NFT, NFTMetadata } from '../../service/scheme'
import { emptyObject } from '@/utils/empty'
import { sanitizeIpfsUrl } from '../../utils'
const components = {
  ArweaveLink: () => import('@/components/shared/ArweaveLink.vue'),
  Money: () => import('@/components/shared/format/Money.vue')
}

@Component({ components })
export default class Facts extends Vue {
  @Prop({ default: () => emptyObject<NFT>() }) public nft!: NFT;
  @Prop({ default: () => emptyObject<NFTMetadata>() }) public meta!: NFTMetadata;
  public multimediaCid = '';
  public showGwLinks = false;
  public gwList: any = [
    'https://kodadot.mypinata.cloud/ipfs/',
    'https://cloudflare-ipfs.com/ipfs/',
    'https://gateway.ipfs.io/ipfs/',
    'https://ipfs.fleek.co/ipfs/',
    'https://dweb.link/ipfs/'
  ];

  get tags() {
    return this.meta.attributes?.filter(({ trait_type }) => !trait_type).map(({ value }) => value)
  }

  get isOwner() {
    return this.nft.currentOwner === this.$store.state.account
  }


  get imageId() {
    return sanitizeIpfsUrl(this.meta.image || '')
  }

  protected removeMeta() {
    console.log('removeMeta')
  }

// public created() {
  //   console.log(this.nft)
  //   this.multimediaCid = extractCid(this.nft.image);
  //   this.showGwLinks = true;
  // }
}
</script>
<style scoped lang="scss">
  @import "@/styles/variables";
</style>
