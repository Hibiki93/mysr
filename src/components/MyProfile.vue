<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs4>
                <v-layout column class="text-sm-left">
                <h1>Profile</h1>
                    <v-flex>
                        <img src="../../static/img/icons/apple-touch-icon-180x180.png" alt="profile_pic">
                    </v-flex>
                    <v-card-text>
                        <a href="">
                            <p class="text-sm-left">
                                <i class="fas fa-user-plus"></i> Add Friend
                            </p>
                        </a>
                        
                        
                    </v-card-text>
                </v-layout>
            </v-flex>
        <v-flex xs8>
            <!-- info -->
            <v-card>
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <p class="text-sm-left">
                                    <i class="fas fa-map-marker-alt"></i> &nbsp;  City : Kuala Lumpur
                                    </p>
                                <p class="text-sm-left">
                                    <i class="far fa-comment-alt"></i> &nbsp; Subggestion : <strong>1000</strong>
                                </p>
                                <p class="text-sm-left"> 
                                        <i class="fas fa-users"></i> &nbsp; Follower : <strong>1000</strong>
                                    </p>
                        </v-flex>
                        <v-flex xs6>
                            <p class="text-sm-left">
                                    <i class="fas fa-star" style="color:orange"></i> &nbsp; Rate : <strong>5.0</strong>
                                    </p>
                                <p class="text-sm-left">
                                    <i class="fas fa-thumbs-up" style="color:blue"></i> &nbsp; Like: <strong>1000</strong>
                                </p>
                                <p class="text-sm-left"> 
                                        <i class="fas fa-heart" style="color:red"></i> &nbsp; Love : <strong>1000</strong>
                                    </p>
                        </v-flex>
                    </v-layout>
                </v-container>
                
            </v-card>
            
            <h2>Add Your Suggestion Here!</h2>
            <v-flex grid-list-md>
            <v-textarea
                name="input-7-1"
                box
                label="Title"
                auto-grow
                value=""
                ></v-textarea>
            <!-- <v-container fluid grid-list-md>
                <v-textarea
                name="input-7-1"
                box
                label="Your Suggestion"
                auto-grow
                value=""
                ></v-textarea>
            </v-container> -->
            </v-flex>
        </v-flex>
        </v-layout>
    </v-container>
</template>
