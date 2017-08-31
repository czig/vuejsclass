<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Animations </h1> 
                <br>
                <select v-model="alertAnimation" class="form-control">
                    <option value="slide">Slide</option>
                    <option value="fade">Fade</option>
                </select>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition :name="alertAnimation" type="animation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition appear
                            enter-active-class="animated bounce"
                            leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show" >This is some Info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <hr>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition :css="false"
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @before-leave="beforeLeave"
                            @leave="leave">
                    <div style="width: 300px; height: 100px; background-color: lightgreen"
                            v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary"
                        @click="selectedComponent == 'appDangerAlert' ? selectedComponent = 'appSuccessAlert' : selectedComponent = 'appDangerAlert'">Toggle Component</button>
                <br>
                <br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <div class="form-group">
                    <label for="newval">Insert Value into List</label>
                    <input type="text" class="form-control" v-model="newValue" id="newval">
                </div>
                <button class="btn btn-primary" @click="addItem">Add Item to List</button>

                <ul class="list-group">
                    <transition-group name="slide">
                        <li class="list-group-item" 
                            v-for="(number,index) in numbers"
                            @click="removeItem(index)"
                            style="cursor: pointer"
                            :key="number">{{ number }}
                        </li>
                    </transition-group>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                load: true,
                show: false,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'appDangerAlert',
                numbers: [1, 2, 3, 4, 5],
                newValue: ''
            }
        },
        methods: {
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.newValue);
            },
            removeItem(index) {
                this.numbers.splice(index,1);
            },
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round*10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave'); 
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round*10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;    
    }

    .fade-enter-active {
        transition: opacity 1s; 
        /*defaults to 1, and becomes one shortly after enter removed, so knows to transition when changed*/
    }

    .fade-leave {
       /*opacity: 1;*/ 
    }

    .fade-leave-active {
       transition: opacity 1s;
       /* again, setting opacity to 0 begins transition to zero b/c transition starts when opacity changes*/
        opacity: 0; 
    }

    .slide-enter {
        /*transform: translateY(20px);*/
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;        
        transition: opacity .5s;
    }

    .slide-leave {
        
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards; 
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(200px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(200px);
        }
    }

</style>
