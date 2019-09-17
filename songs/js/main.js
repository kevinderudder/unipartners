const songComponent = {
    template: `
    <div style="display: flex; width: 100%">
    <figure class="media-left">
        <img class="image is-64x64" v-bind:src="song.imgSong" />
    </figure>
    <div class="media-content">
        <div class="content">
            <p>
                <strong>
                    <a href="#" class="has-text-info">{{song.artist}}</a>
                    <span class="tag is-small">#{{song.id}}</span>
                </strong>
                <br/>
                {{song.title}}
                <br/>
                <small class="is-size-7">by: <img class="image is-24x24" v-bind:src="song.imgArtist"></small>
            </p>
        </div>
    </div>
    <div class="media-right">
        <span class="icon is-small" v-on:click="upvote(song.id)">
            <i class="fa fa-chevron-up"></i>&nbsp;
            <strong class="has-text-info">{{song.id}}.votes</strong>
        </span>
    </div>
</div>
    `,
    props: ['song', 'songs'],
    methods: {
        upvote(songId){
            const song = this.songs.find(song => song.id === songId);
            song.votes++;
        }
    }
}



new Vue({
    el: "#app",
    data: {
        songs: Seed.songs
    },
    computed: {
        sortedSongs(){
            return this.songs.sort((a,b) => {
                return b.votes - a.votes
            });
        }
    },
    components: {
        'song-component': songComponent
    }
   
});