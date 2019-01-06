<template>
           <social-sharing :url="socialData.url"
                      :title="project.title"
                      :description="questionText"
                      :quote="project.title"
                      hashtags="prodeus"
                      :twitter-user="loggedInUser.fullName"
                      inline-template>
                            <div class="social-share-wrap">
      <network network="facebook">
        <facebook />
      </network>
       <network network="twitter">
         <twitter />
       </network>
          </div>
</social-sharing>
</template>
<script>
export default {
    props:['title', 'description', 'quote', 'url']
}
</script>
