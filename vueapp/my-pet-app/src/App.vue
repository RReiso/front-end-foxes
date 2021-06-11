<template>
	<v-app>
		<v-main class="foxes-layout">
			<v-container fill-height>
				<div class="foxes-overlay">
					<h1 class="display-2 text-xs-center">I'm a foxy fox!</h1>
					<v-card class="fox-card">
						<v-img height="400px" :src="currentFoxLink"></v-img>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn icon @click="addToFavorites" :disabled="isAlreadyInFavorites">
								<v-icon>favorite</v-icon>
							</v-btn>
							<v-btn icon @click="loadNewFox">
								<v-icon>forward</v-icon>
							</v-btn>
						</v-card-actions>
					</v-card>
          <v-container grid-list-md fluid>
            <v-layout wrap>
              <v-flex xs6 sm4 md2 v-for="(pet, index) in favoriteFoxes" :key="pet">
                <v-card class="fox-card">
                  <v-img height="150px" :src="pet"></v-img>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="removeFromFavorites(index)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
				</div>
			</v-container>
		</v-main>
	</v-app>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentFoxLink: "",
      favoriteFoxes: []
    };
  },
  computed: {
    isAlreadyInFavorites() {
      return this.favoriteFoxes.indexOf(this.currentFoxLink) > -1;
    }
  },
  created() {
    this.loadNewFox();
  },
  methods: {
    loadNewFox() {
      axios
        .get('https://randomfox.ca/floof/')
        .then((response) => {
        console.log(response)
        console.log(response.data.image)
          this.currentFoxLink = response.data.image;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToFavorites() {
      this.favoriteFoxes.push(this.currentFoxLink);
    },
    removeFromFavorites(index) {
      this.favoriteFoxes.splice(index, 1);
    }
  }
};
</script>


<style>
img {
  max-width: 100%;
}

h1 {
  padding-bottom: 15px;
}

.foxes-layout {
  width: 100%;
  background: #fff center repeat;
  background-image: url("https://i.postimg.cc/d3LCTbRg/pexels-minamarie-michell-570041.jpg");
}

.foxes-overlay {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .foxes-overlay {
    margin: 0;
  }
}

.fox-card {
  width: 100%;
  max-width: 600px;
}
</style>
